import { defineStore } from "pinia";
import alertsService from "@/services/alerts.service";
import { Stats } from "@/interfaces/stats.interface";
import { QueryAlerts, BodyCreateAlert, Alert } from "@/interfaces/alerts.interface"

export const useAlertsStore = defineStore('alerts', {
    // Estado de alerts dentro del store.
    state: () => ({
        alerts: []
    }),
    getters: {
        // Getter donde tratamos el array de alerts para recibir lo necesario para las estadisticas.
        getHintsAlerts(state): Stats[] {
            if (!state.alerts) return [];
            const hints: Stats[] = state.alerts.map((alert: Alert) => {
                const lastMonthHits = alert.data.last_month_hits ? alert.data.last_month_hits : 0;

                return {
                    title: alert.title,
                    last_month_hits: lastMonthHits
                }
            }).filter((hint: Stats) => hint.last_month_hits !== 0);

            return hints
        }
    },
    actions: {
        // Función que llama al servicio para recibir las alertas en función de la query.
        async fetchAlerts (query: QueryAlerts = {}) {
            try {
                const { data } = await alertsService.getAlerts(query)
                this.alerts = data
            } catch (error) {
                this.alerts = []
                console.error(error)
            }
        },
        // Función que llama al servicio para crear una nueva alerta.
        async createAalert (body: BodyCreateAlert) {
            try {
                await alertsService.createAlert(body)
                this.fetchAlerts()
            } catch (error) {
                console.error(error)
            }
        }
    }
})
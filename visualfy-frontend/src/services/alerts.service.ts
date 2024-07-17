
import { QueryAlerts, BodyCreateAlert, BodyCreateAlertKeys } from "@/interfaces/alerts.interface"

const VUE_APP_API_URL = process.env.VUE_APP_API_URL

class AlertsService {
    private baseUrl

    constructor(){
        this.baseUrl = `${VUE_APP_API_URL}/alerts`
    }

    /**
     * GET recibir alertas en función de la query.
     *
     * @async
     * @function getAlerts
     * @param {QueryAlerts} query - El objeto query.
     * @param {string} [query.name] - Nombre a filtrar.
     * @param {string} [query.priority] - Prioridad a filtrar.
     * @returns {Promise<Object>} Respuesta con las alertas en formato JSON.
     */
    async getAlerts(query: QueryAlerts = {}){
        try {
            let url = `${this.baseUrl}?`
            if(query.name) url += `name=${query.name}&`
            if(query.priority) url += `priority=${query.priority}&`
            const response = await fetch(url)
            const json = await response.json()
            return json
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * POST Crear nueva alerta.
     *
     * @async
     * @function createAlert
     * @param {BodyCreateAlert} data - Los datos de la nueva alerta.
     * @param {string} data.title - Nombre de la alerta.
     * @param {string} data.type - Tipo de la alerta.
     * @param {number} data.priority - La prioridad de la alerta.
     * @param {File} data.image - Imagen de tipo File.
     * @returns {Promise<Object>} Respuesta en formato JSON con la alerta y la prioridad creadas.
     */
    async createAlert(data: BodyCreateAlert){
        try {
            const formData = new FormData();

            (Object.keys(data) as BodyCreateAlertKeys[]).forEach((key: BodyCreateAlertKeys) => {
                const value = data[key];
                if (value !== undefined) {
                    formData.append(key, value);
                }
            });

            const response = await fetch(this.baseUrl, {
                method: 'POST',
                body: formData
            })
            const json = response.json()
            return json
        } catch (error) {
            console.error(error)
        }
    }
}

const alertsService = new AlertsService()

export default alertsService
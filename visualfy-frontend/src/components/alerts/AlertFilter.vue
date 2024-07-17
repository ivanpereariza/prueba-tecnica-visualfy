<template>
    <div class="filter">
        <form @submit.prevent>
            <label for="filter-name">Buscar:</label>
            <input
                type="text"
                id="filter-name"
                v-model="filter.name"
                placeholder="Escribe para buscar..."
                aria-label="Buscar"
            />
            
            <fieldset class="priority-container">
                <legend>Prioridad:</legend>
                <label for="priority-1">1</label>
                    <input
                        id="priority-1"
                        name="priority-1"
                        type="checkbox"
                        v-model="filter.priority"
                        value="1"
                        aria-label="Prioridad 1"
                    />
                <label for="priority-2">2</label>
                    <input
                        id="priority-2"
                        name="priority-2"
                        type="checkbox"
                        v-model="filter.priority"
                        value="2"
                        aria-label="Prioridad 2"
                    />
                <label for="priority-3">3</label>
                    <input
                        id="priority-3"
                        name="priority-3"
                        type="checkbox"
                        v-model="filter.priority"
                        value="3"
                        aria-label="Prioridad 3"
                    />
                <label for="priority-4">4</label>
                    <input
                        id="priority-4"
                        name="priority-4"
                        type="checkbox"
                        v-model="filter.priority"
                        value="4"
                        aria-label="Prioridad 4"
                    />
                <label for="priority-5">5</label>
                    <input
                        id="priority-5"
                        name="priority-5"
                        type="checkbox"
                        v-model="filter.priority"
                        value="5"
                        aria-label="Prioridad 5"
                    />
            </fieldset>
        </form>
        <button
            class="new-alert-button"
            @click="openCreateAlertForm"
            aria-label="Abrir formulario nueva alerta"
            v-if="props.showNewAlertButton && !formOpened"
            >
            Nueva Alerta
        </button>
        <AlertForm v-if="formOpened" @closeForm="openCreateAlertForm"/>
    </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect, defineProps } from 'vue'
import { useAlertsStore } from '@/stores/alerts.store'
import AlertForm from './AlertForm.vue'

const alertsStore = useAlertsStore()

const props = defineProps<{ showNewAlertButton: boolean }>()

const filter = ref({
    name: '',
    priority: [] as string[]
})
const formOpened = ref(false)


// Función para abrir y cerrar el formulario de nueva alerta.
const openCreateAlertForm = () => {
    formOpened.value = !formOpened.value
}

// Detectamos cambios en los inputs para hacer de nuevo la petición con el filtro.
watchEffect(() => {
    const priorityString = filter.value.priority.join(',')
    alertsStore.fetchAlerts({
        name: filter.value.name,
        priority: priorityString
    })
})
</script>

<style scoped>
    .filter {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;

        input[type="text"] {
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
            box-sizing: border-box;
            margin-top: 15px;
        }
    
        .priority-container {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
            padding: 0;
            margin: 0;
            border: 0;
            margin-top: 15px;

            legend {
                margin-bottom: 1rem;
            }
        }
    
        .priority-container label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    
        .new-alert-button {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            background-color: #566E8D;
            color: white;
            cursor: pointer;
        }
    }


    @media (min-width: 768px) {
        .filter {
            > label {
                text-align: start;
            }

            .priority-container {
                flex-direction: row;
                align-items: center;
    
                legend {
                    text-align: start;
                }
            }
    
            .priority-container label {
                gap: 0.25rem;
            }
    
            .new-alert-button {
                width: auto;
            }
        }
    }
</style>

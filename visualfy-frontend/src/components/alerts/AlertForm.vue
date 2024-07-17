<template>
    <form @submit.prevent="submitForm" aria-labelledby="form-title">
        
        <label for="type">Tipo:</label>
        <input
            type="text"
            id="type"
            name="type"
            placeholder="Tipo de alerta"
            v-model="formData.type"
            required
        />
        
        <label for="title">Nombre:</label>
        <input
            type="text"
            id="title"
            name="title"
            placeholder="Nombre de alerta"
            v-model="formData.title"
            required
        />
        
        <label for="priority">Prioridad:</label>
        <select
            id="priority"
            name="priority"
            v-model="formData.priority"
            required
        >
            <option value="" disabled hidden>Selecciona una prioridad</option>
            <option v-for="priority in priorityOptions" :key="priority" :value="priority">{{ priority }}</option>
        </select>
        
        <label for="image">Imagen:</label>
        <input
            type="file"
            id="image"
            name="image"
            @change="handleFileChange"
            accept=".jpg, .jpeg, .png"
        />
        <div class="buttons">
            <button type="button" @click="cancelForm" class="cancel" aria-label="Cancelar nueva alerta">Cancelar</button>
            <button type="submit" aria-label="Guardar nueva alerta">Guardar</button>
        </div>
    </form>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { useAlertsStore } from '@/stores/alerts.store'

const alertsStore = useAlertsStore()
const priorityOptions = [1, 2, 3, 4, 5]
const emits = defineEmits(['closeForm']);

// Estado del formulario.
const formData = ref({
    type: '',
    title: '',
    file: null as File | null,
    priority: ''
})

// Manejo de los cambios de ficheros en el input.
const handleFileChange = (event: Event) => {
    const target = event.target
    if (target.files && target.files.length > 0) {
        formData.value.file = target.files[0]
    } else {
        formData.value.file = null
    }
}

// Envio de formulario.
const submitForm = () => {
    alertsStore.createAalert({...formData.value})
    resetForm()
    emits('closeForm')
}

// Reseteo del estado del formulario.
const resetForm = () => {
    formData.value.type = ''
    formData.value.title = ''
    formData.value.file = null
    formData.value.priority = ''
}

// Cancelación del formulario y cierre del mismo
const cancelForm = () => {
    resetForm()
    emits('closeForm')
}

</script>

<style scoped>
    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        label {
            text-align: start;
        }

        input[type="text"], select {
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
            box-sizing: border-box;
        }

        .buttons {
            display: flex;
            justify-content: space-around;
            gap: 1rem;

            button {
                padding: 0.5rem 1rem;
                border: none;
                border-radius: 5px;
                background-color: #566E8D;
                color: white;
                cursor: pointer;
                width: 100%;
            }

            .cancel {
                background-color: #ccc;
                color: #333; 
            }
        }
    }
    

</style>

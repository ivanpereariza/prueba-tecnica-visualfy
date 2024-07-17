<template>
    <div class="chart">
        <Pie :data="chartData" :options="chartOptions" v-if="alertsStore.getHintsAlerts.length >= 1"/>
        <p class="no-data" v-else> No hay datos </p>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { useAlertsStore } from '@/stores/alerts.store';
import { getColors } from '@/utils/chart.tools';

Chart.register(ArcElement, Tooltip, Legend);

const alertsStore = useAlertsStore();

// Función para generar los datos necesarios para el chart
const getChartData = () => {
    return {
        labels: alertsStore.getHintsAlerts?.map((elm) => elm.title),
        datasets: [
            {
                backgroundColor: getColors(alertsStore.getHintsAlerts.length),
                data: alertsStore.getHintsAlerts?.map((elm) => elm.last_month_hits)
            }
        ] 
    };
}

// Opciones del chart
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
};

// Estado de los datos del chart
const chartData = ref(getChartData());

// Observamos cambios en el estado de los datos para generar de nuevo el chart
watch(() => alertsStore.getHintsAlerts, () => {
    chartData.value = getChartData();
});
</script>

<style scoped>
.chart {
    margin: 0 auto; 
    padding: 20px; 

    .no-data {
        color: red;
        font-style: bold;
        text-align: center;
        font-size: 1.5rem; 
    }
}
</style>

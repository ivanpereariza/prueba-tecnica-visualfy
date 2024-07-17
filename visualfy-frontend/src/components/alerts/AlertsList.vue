<template>
    <ul class="alert-list" role="list" aria-label="Lista de alertas">
        <AlertCard v-for="( alert, index ) in alertsStore.alerts" :key="index" :alert="alert" />
    </ul>
</template>

<script lang="ts" setup>
import AlertCard from '@/components/alerts/AlertCard.vue'
import { useAlertsStore } from '@/stores/alerts.store'

const alertsStore = useAlertsStore()
</script>

<style scoped>
    .alert-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;

        .card {
            flex: 1 1 calc(100% / 1.5);
            max-width: 300px;
            box-sizing: border-box;
        }
    }


    @media (min-width: 768px) {
        .alert-list .card {
        flex: 1 1 calc(100% / 3);
        }
    }

    @media (min-width: 1024px) {
        .alert-list .card {
        flex: 1 1 calc(100% / 4);
        }
    }
</style>

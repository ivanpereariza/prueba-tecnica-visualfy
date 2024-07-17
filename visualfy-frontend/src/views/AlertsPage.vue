<template>
    <div class="alerts-page" role="main" aria-label="Página de Alertas">
        <AlertFilter :show-new-alert-button="true"/>
        <AlertsList/>
    </div>
</template>

<script lang="ts" setup>
import AlertFilter from '@/components/alerts/AlertFilter.vue'
import AlertsList from '@/components/alerts/AlertsList.vue'
</script>

<style scoped>
.alerts-page{
    margin: 15px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>

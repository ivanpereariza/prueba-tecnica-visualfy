<template>
    <div class="stats-page">
        <AlertFilter :show-new-alert-button="false"/>
        <ChartHints />
    </div>
</template>

<script lang="ts" setup>
import AlertFilter from '@/components/alerts/AlertFilter.vue'
import ChartHints from '@/components/stats/ChartHints.vue'
</script>

<style scoped>
.stats-page{
    margin: 15px;
}
</style>

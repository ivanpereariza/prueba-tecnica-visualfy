<template>
    <li class="card" role="listitem" tabindex="0">
        <p>{{ alert.title }}</p>
        <img
            v-if="alert.image"
            :src="alert.image"
            :alt="`Imagen ${alert.title}`"
            role="img"
            :aria-label="`Imagen de ${alert.title}`"
            class="card-image"
        />
    </li>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from 'vue'
import { Alert } from '@/interfaces/alerts.interface'

const props = defineProps<{ alert: Alert }>()
const { alert } = toRefs(props)
</script>

<style scoped>
    .card {
        background-color: #F9F9F9;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
        overflow: hidden;
        p {
            font-size: 1.2rem;
            font-weight: bold;
            text-align: center
        }

        .card-image {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 5px;
            filter: drop-shadow(0px 0px 1px black);
        }
    }

    .card:hover, :focus {
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }


    @media (min-width: 768px) {
        .card {
            width: 300px;
        }
    }
</style>

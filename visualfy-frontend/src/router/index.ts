import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AlertsPage from '@/views/AlertsPage.vue'
import Stats from '@/views/StatsPage.vue'
import Docs from '@/views/DocsPage.vue'


const routes: Array<RouteRecordRaw> = [
  { 
    path: '/',
    name: 'Alerts',
    component: AlertsPage
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
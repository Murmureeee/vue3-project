import { createRouter, createWebHistory } from 'vue-router'
import { constantRouterMap } from './baseRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouterMap
})

export default router

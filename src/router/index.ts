import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bootstrap',
    name: 'bootstrap',
    component: () => import('../views/Bootstrap.vue')
  },
  {
    path: '/props',
    name: 'props',
    component: () => import('../views/Props.vue')
  },
  {
    path: '/emit',
    name: 'emit',
    component: () => import('../views/Emit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LegalView from '@/views/LegalView.vue'
import SpecificView from '@/views/SpecificView.vue'
import CreateStep1 from '@/views/CreateStep1.vue'
import CreateStep2 from '@/views/CreateStep2.vue'
import CreateStep0 from '@/views/CreateStep0.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/dashboard/:id',
      name: 'specificView',
      component: SpecificView
    },
    {
      path: '/dashboard/create/plan',
      name: 'selectPlan',
      component: CreateStep0
    },
    {
      path: '/dashboard/create/info',
      name: 'provideInfo',
      component: CreateStep1
    },
    {
      path: '/dashboard/create/verify',
      name: 'verifyOwnDomain',
      component: CreateStep2
    },
    {
      path: '/legal',
      name: 'legal',
      component: LegalView
    }
  ]
})

export default router

import GameView from '@/pages/GameView.vue'
import HomeView from '@/pages/HomeView.vue'
import NotFoundView from '@/pages/NotFoundView.vue'
import StatisticsView from '@/pages/StatisticsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/game',
    name: 'game',
    component: GameView
  },
  {
    path: '/stats',
    name: 'statistics',
    component: StatisticsView
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior:'smooth',
      }
    }
    return { top: 0,behavior:'smooth' }
  }
})

export default router

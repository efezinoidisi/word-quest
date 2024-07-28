import GameView from '@/pages/GameView.vue'
import HomeView from '@/pages/HomeView.vue'
import NotFoundView from '@/pages/NotFoundView.vue'
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
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

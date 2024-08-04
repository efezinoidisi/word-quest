import './assets/base.css'

import 'primeicons/primeicons.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(createPinia())

app.use(Vue3Toastify, {
  autoClose: 4000,
  limit: 1
} as ToastContainerOptions)

app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

createApp(App).use(createPinia()).use(router).mount('#app')

if (firebase.auth().currentUser) {
  router.push('/dashboard')
} else {
  router.push('/')
}

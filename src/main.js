import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './app.vue'
import store from './store'
import router from './router'

sync(store, router)

new Vue({
  store,
  router,
  ...App
}).$mount('#app')

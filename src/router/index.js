import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../containers/home'
import Hello from '../containers/hello'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/hello',
    component: Hello
  }]
})

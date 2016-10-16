import Vue from 'vue'
import Vuex from 'vuex'

import hello from './modules/hello'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    hello
  }
})

// vue-router 热加载会移除所有的comtainer
// 目前还不知道为何
if (module.hot) {
  module.hot.accept(['./modules/hello'], () => {
    const newModuleHello = require('./modules/hello').default
    store.hotUpdate({
      modules: {
        hello: newModuleHello
      }
    })
  })
}

export default store

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import 'material-design-icons/iconfont/material-icons.css'
import { store } from './store'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'

Vue.use(Vuetify, {
  theme: {
    primary: '#004D40',
    secondary: '#1DE9B6',
    accent: '#FF7043',
    error: '#F44336',
    warning: '#ffeb3b',
    info: '#2196F3',
    success: '#00C853'
  }
})
Vue.config.productionTip = false

// production address = '#/'
// Vue.use(VueSocketio, process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : '#/')
Vue.use(VueSocketio, '#/')

// remove for production
store.commit('isAuthenticated', {
  auth: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },

  beforeMount: () => {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    let isAuthValid = (new Date().getTime() < (expiresAt))
    if (isAuthValid) {
      store.commit('isAuthenticated', {
        auth: true
      })
    } else {
      store.commit('isAuthenticated', {
        auth: false
      })
    }
  }
})

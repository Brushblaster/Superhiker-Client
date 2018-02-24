// This is the global Store from vuex. It is holding the State defined and underlying Modules

import Vue from 'vue'
import Vuex from 'vuex'
import auth from './vuex/modules/auth/store'
import motionSettings from './vuex/modules/config/store'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    auth,
    motionSettings
  },
  state: {
    isConnected: false,
    authenticated: false,
    loading: false,
    error: null
  },
  getters: {
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
  }
})

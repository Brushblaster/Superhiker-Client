// Inside here the state, getters, mutations and actions for the Authentification service are stored

export default {
  // defining witch state to hold
  state: {
    rigiSpeed: 10,
    rigiAccel: 10,
    pilatusSpeed: 10,
    pilatusAccel: 10,
    rigiTimeout: 5,
    pilatusTimeout: 5,
    pilatusSteps: 9500,
    rigiSteps: 10000
  },
  getters: {
    rigiSpeed: state => {
      return state.rigiSpeed
    },
    rigiAccel: state => {
      return state.rigiAccel
    },
    pilatusSpeed: state => {
      return state.pilatusSpeed
    },
    pilatusAccel: state => {
      return state.pilatusAccel
    },
    rigiTimeout: state => {
      return state.rigiTimeout
    },
    pilatusTimeout: state => {
      return state.pilatusTimeout
    },
    pilatusSteps: state => {
      return state.pilatusSteps
    },
    rigiSteps: state => {
      return state.rigiSteps
    }
  },
  mutations: {
    changeSettings (newState) {
      this.state.rigiSpeed = newState.rigiSpeed
      this.state.rigiAccel = newState.rigiAccel
      this.state.pilatusSpeed = newState.pilatusSpeed
      this.state.pilatusAccel = newState.pilatusAccel
      this.state.rigiTimeout = newState.rigiTimeout
      this.state.pilatusTimeout = newState.pilatusTimeout
      this.state.pilatusSteps = newState.pilatusSteps
      this.state.rigiSteps = newState.rigiSteps
    }
  },
  actions: {
    changeSettingsAc ({ commit }, newState) {
      console.log(newState)
      commit('changeSettings', newState)
    }
  }
}

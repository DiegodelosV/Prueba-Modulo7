import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0
  },
  mutations: {
    incrementar(state, payload) {
      state.contador += payload
    },
    decrementar(state, payload) {
      if (state.contador > 0) {
        state.contador -= payload
      }
    }
  },
  actions: {
    incrementar({ commit }) {
      commit('incrementar', 1)
    },
    decrementar({ commit }) {
      if (this.state.contador > 0) {
        commit('decrementar', 1) // condicional if para el decremento sea mayor a 0
      }
    }
  },
  modules: {}
})

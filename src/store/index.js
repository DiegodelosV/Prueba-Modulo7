import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0
  },
  mutations: {
    incrementar(state) {
      state.contador += 1
    },
    decrementar(state) {
      if (state.contador > 0) {
        state.contador -= 1 // si el contador es mayor a 0, disminuirlo.
      }
    }
  },
  actions: {
    incrementar({ commit }) {
      commit('incrementar')
    },
    decrementar({ commit }) {
      if (this.state.contador > 0) {
        commit('decrementar')
      }
    }
  },
  modules: {}
})

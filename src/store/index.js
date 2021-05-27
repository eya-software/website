import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    mobile: false
  },
  mutations: {
    mobile: function(state, value) {
      state.mobile = value;
    }
  },
  actions: {
  },
  modules: {
  }
});

function resize() {
  const mobile = window.innerWidth <= 900 || window.innerHeight <= 600;
  store.commit('mobile', mobile);
}

window.addEventListener('resize', resize);
resize();

export default store;

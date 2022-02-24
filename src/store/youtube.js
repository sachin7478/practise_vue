import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProducts:[]
  },
  getters: {
    soldProductCount(state) {
      return state.allProducts.filter( prod => {
          return prod.sold == true;
      } ).length;
    },
 
  },
  mutations: {
    GET_USERS(state) {
      
    },

  },
  actions: {
    getAllUser( {commit} ) {
      commit( 'GET_USERS' )
    },


  },
  modules: {
  }
})

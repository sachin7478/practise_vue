import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProducts:[
      {name:'iphon','price':'100000',sold:false},
      {name:'Samsung','price':'50000',sold:false}]
  },
  getters: {
    soldProductCount(state) {
      return state.allProducts.filter( prod => {
          return prod.sold == true;
      } ).length;
    },
    pendingProductCount(state) {
      return state.allProducts.filter( prod => {
          return prod.sold == false;
      } ).length;
    }
  },
  mutations: {
    INSERT_PRODUCT(state, payload) {
      state.allProducts = [...state.allProducts,payload];
    },
    REMOVE_PRODUCT( state, prodId ) {
      state.allProducts.splice( prodId, 1 );
    },
    TOGGLE_SOLD(state, prodId) {
      console.log('d');
        state.allProducts[prodId].sold = !state.allProducts[prodId].sold;
    }
  },
  actions: {
    insertNewProduct( {commit}, newProduct ) {
      commit( 'INSERT_PRODUCT', newProduct )
    },
    removeProduct({commit},prodId) {
      commit('REMOVE_PRODUCT', prodId);
    },
    toggleSoldItem({commit},prodId) {
      commit('TOGGLE_SOLD',prodId);
    }

  },
  modules: {
  }
})

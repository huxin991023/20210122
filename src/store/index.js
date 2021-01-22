import Vue from "vue";
import Vuex from "vuex";
import products from "./products.js";
import cart from "./cart.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      username: "胡鑫"
    },
    products:{
      id:`$store.state.id`
    }
  },
  modules: {
    products,
    cart
  }
});

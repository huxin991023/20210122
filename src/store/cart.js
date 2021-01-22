const state = {
  items: [],
  checkoutStatus: null
};

// getters
const getters = {};

// actions
const actions = {
  addProductToCard({ commit }, product) {
    if (product.inventory > 0) {
      commit(
        "products/deleteProductInventory",
        { id: product.id,title:product.title,price:product.price},
        { root: true },
      );
    }
  }
};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

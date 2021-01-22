import shop from "../api/shop";

// initial state
const state = {
  all: [],
  id:"华为 Mate 20*0",
  xiaomi:"小米 9*0",
  oppo:"OPPO R17*0",
  id1:1,
  id2:1,
  id3:1,
  price:0,
};

// getters
const getters = {};

const mutations = {
  setAll(state, products) {
    state.all = products;
  },
  id(state,product){
    state.id = product;
  },
  deleteProductInventory(state, {id}) {
    const pruduct = state.all.find(product => product.id === id);
    if(pruduct.id===1){
      state.id = pruduct.title +"*" + state.id1;
      pruduct.inventory--;
      state.id1++;
      state.price+=3999;
    }else if(pruduct.id===2){
      state.xiaomi = pruduct.title +"*" + state.id2;
      pruduct.inventory--;
      state.id2++;
      state.price+=2999;
    }
    if(pruduct.id===3){
      state.oppo = pruduct.title +"*" + state.id3;
      pruduct.inventory--;
      state.id3++;
      state.price+=2999;
    }
  },
};

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit("setAll", products);
    })
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations 
};

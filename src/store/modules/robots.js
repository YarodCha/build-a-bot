// import axios from 'axios';

import partsData from '../../data/parts';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      commit('updateParts', partsData);
      // axios.get('/api/parts')
      //   .then((result) => commit('updateParts', result.data))
      // .then(() => this.$router.push('/cart'));
      //   .catch(console.error);
    },
    addRobotToCart({ commit }, robot) {
      // const cart = [...state.cart, robot];
      commit('addRobotToCart', robot);
      // return axios.post('/api/cart', cart)
      //   .then(() => commit('addRobotToCart', robot));
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
};

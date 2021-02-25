import axios from "@/axios-common";

const state = {
  category: []
};

const getters = {
  getCategory: (state) => {
    return state.category
  }
};

const actions = {
  async fetchCategory({ commit }) {
    const response = await axios.get("category?page=1&filters[slug][]=view-all-pranks&filters[slug][]=new-prank-calls&filters[slug][]=food-restaurant-prank-calls");
    commit('setCategory', response.data.data);
  }
}

const mutations = {
  setCategory: (state, category) => state.category = category,
};

export default {
  state,
  getters,
  actions,
  mutations
};

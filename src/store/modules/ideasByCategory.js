import axios from "@/axios-common";

const state = {
  pranksCategory: []
};

const getters = {
  getIdeasPranksCategory: (state) => {
    return state.pranksCategory
  }
};

const actions = {
  async fetchIdeasPranksCategory({ commit }, params) {
    const response = await axios.get(`prank-idea/${params.slug}`, { params: {page: params.page, limit: 5}});
    commit('setIdeasPranksCategory', response.data);
  }
}

const mutations = {
  setIdeasPranksCategory: (state, pranks) => state.pranksCategory = pranks,

};

export default {
  state,
  getters,
  actions,
  mutations
};

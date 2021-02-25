import axios from "@/axios-common";

const state = {
  pranks: []
};

const getters = {
  getIdeasPranks: (state) => {
    return state.pranks
  }
};

const actions = {
  async fetchIdeasPranks({ commit }, params) {
    const response = await axios.get(`prank-idea`, { params: {page: params.page, limit: params.count, 'filters[category]': params.category}} );
    commit('setIdeasPranks', response.data);
  }
}

const mutations = {
  setIdeasPranks: (state, pranks) => state.pranks = pranks,

};

export default {
  state,
  getters,
  actions,
  mutations
};

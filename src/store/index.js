import Vuex from 'vuex';
import Vue from 'vue';
import categories from './modules/categories';
import ideas from './modules/ideasPranks';
import ideasCategory from './modules/ideasByCategory';

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    categories,
    ideas,
    ideasCategory
  }
});

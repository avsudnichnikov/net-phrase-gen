import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import units from "./modules/units";
import dictionaries from "./modules/dictionaries";

export default new Vuex.Store({
  modules: {
    units,
    dictionaries,
  },
  state: {},
  getters: {},
  actions: {},
  mutations: {},
});

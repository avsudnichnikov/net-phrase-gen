const state = {
  all: JSON.parse(localStorage.getItem('state-units')) || [
    {
      id: 1,
      title: 'Интеграция систем и документирование API',
      need: 3,
      count: 4,
      work: true,
      lessons: 'Интеграции ИС;Методы интеграции-протоколы;REST API;Нотация OpenAPI;Swagger ч.1;Swagger ч.2',
    },
    {
      id: 2,
      title: 'Тестирование и развертывание ПО',
      need: 3,
      count: 3,
      work: false,
      lessons: 'Тестирование - I;Тестирование - II;Принципы и инструменты DevOps',
    },
  ],
  current: undefined,
};

const getters = {
  all() {
    return state.all;
  },
  current() {
    if(state.current){
      return state.current;
    }
    const length = state.all.length;
    const id = (state.all.length) ? state.all[length - 1].id + 1 : 1;
    return {
      id,
      title: '',
      need: 1,
      count: 1,
      work: false,
      lessons: '',
    };
  },
};

const actions = {
  async create({commit, rootGetters}, unit) {
    const units = state.all;
    units.push(unit);
    commit('SET_ALL', units);
  },
  async remove({commit, rootGetters}, id) {
    const units = state.all;
    const index = units.findIndex((item) => item.id === id);
    units.splice(index, 1);
    localStorage.setItem('state-units', JSON.stringify(units));
    commit('SET_ALL', units);
  },
};

const mutations = {
  SET_ALL(state, units) {
    state.all = units;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

import randInt from "@/utils/randInt";

const state = {
  all: JSON.parse(localStorage.getItem('dictionaries')) || {
    greetings: [
      'Здравствуйте!',
      'Здравствуйте, коллеги!',
      'Всем доброго утра!',
    ],
    goodbyes: [
      'Удачи всем!',
    ],
    emojis: [
      55357, 56613,
      10024,
      55356, 57119,
      55357, 56842,
      55358, 56617,
      55357, 56846,
      55357, 56960,
      55356, 57225,
    ],
  },
};


const getters = {
  greetings() {
    return state.all.greetings;
  },
  emojis() {
    const emojis = state.all.emojis;
    const result = [];

    for (let i = 0; i <= emojis.length - 1; i += 1) {
      if (emojis[i] >= 0xD800 && emojis[i] <= 0xdbff) {
        result.push(String.fromCodePoint((emojis[i])) + String.fromCodePoint(emojis[i + 1]));
        i += 1;
      } else {
        result.push(String.fromCodePoint(emojis[i]));
      }
    }
    return result;
  },
  goodbyes() {
    return state.all.goodbyes;
  },
  rand() {
    return {
      greeting: state.all.greetings[randInt(state.all.greetings.length - 1)],
      goodbye: state.all.goodbyes[randInt(state.all.goodbyes.length - 1)],
    };
  },
};


const actions = {
  async save({commit, rootGetters}, data) {
    const dictionaries = {
      greetings: data.greetings.split(';').map((item) => item.trim()),
      emojis: data.emojis.split('').map((item) => item.trim().codePointAt()),
      goodbyes: data.goodbyes.split(';').map((item) => item.trim()),
    }
    localStorage.setItem('dictionaries', JSON.stringify(dictionaries));
    commit('SET_ALL', dictionaries);
  },
};

const mutations = {
  SET_ALL(state, dictionaries) {
    state.all = dictionaries;
  },
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

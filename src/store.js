import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: "性別が選択されていません",
    firstQ: '未回答です',
    secondQ: '未回答です',
    thirdQ: '未回答です',
    consultationTxt: '未記入',
    year: '',
    month: '',
    day: '',
  },
  getters: {
    gender: state => state.gender,
    firstQ: state => state.firstQ,
    secondQ: state => state.secondQ,
    thirdQ: state => state.thirdQ,
    consultationTxt: state => state.consultationTxt,
    year: state => state.year,
    month: state => state.month,
    day: state => state.day,
  },
  mutations: {
    getGender(state, gender) {
      state.gender = gender;
    },
    getFirstQ(state, firstQ) {
      state.firstQ = firstQ;
    },
    getSecondQ(state, secondQ) {
      state.secondQ = secondQ;
    },
    getThirdQ(state, thirdQ) {
      state.thirdQ = thirdQ;
    },
    getTxt(state, consultationTxt) {
      state.consultationTxt = consultationTxt;
    },
    getYear(state, year) {
      state.year = year;
    },
    getMonth(state, month) {
      state.month = month;
    },
    getDay(state, day) {
      state.day = day;
    },
  },
  actions: {
    getGender({ commit }, gender) {
      commit("getGender", gender)
    },
    getFirstQ({ commit }, firstQ) {
      commit("getFirstQ", firstQ)
    },
    getSecondQ({ commit }, secondQ) {
      commit("getSecondQ", secondQ)
    },
    getThirdQ({ commit }, thirdQ) {
      commit("getThirdQ", thirdQ)
    },
    getTxt({ commit }, consultationTxt) {
      commit("getTxt", consultationTxt)
    },
    getYear({ commit }, year) {
      commit("getYear", year)
    },
    getMonth({ commit }, month) {
      commit("getMonth", month)
    },
    getDay({ commit }, day) {
      commit("getDay", day)
    },
  }
});
import Vue from 'vue'
import Vuex from 'vuex'
import { Services } from "../service";
var serv = new Services();


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: '',
    books: '',
    web:'',
    kits:''

  },

  actions: {
    getEvents({ commit }) {
      // eslint-disable-next-line no-console
      console.log("this should work")
      serv.getRequest("eve/allEve").then(response => {
        // JSON responses are automatically parsed.
        let events = response.data.result.length;
        commit("SET_Events", events)
        // eslint-disable-next-line no-console
        console.log(response.data.result, "are the response");
      });

    },
    getBooks({ commit }) {
      // eslint-disable-next-line no-console
      console.log("this should work")
      serv.getRequest("books/allBooks").then(response => {
        // JSON responses are automatically parsed.
        let books = response.data.result.length;
        commit("SET_Books", books)
        // eslint-disable-next-line no-console
        console.log(response.data.result, "are the response");
      });

    },
    getWeb({ commit }) {
      // eslint-disable-next-line no-console
      console.log("this should work")
      serv.getRequest("web/allWeb").then(response => {
        // JSON responses are automatically parsed.
        let web = response.data.result.length;
        commit("SET_Webs", web)
        // eslint-disable-next-line no-console
        console.log(response.data.result, "are the response");
      });

    },
    getKits({ commit }) {
      // eslint-disable-next-line no-console
      console.log("this should work")
      serv.getRequest("diy/allDiys").then(response => {
        // JSON responses are automatically parsed.
        let kits = response.data.result.length;
        commit("SET_Kits", kits)
        // eslint-disable-next-line no-console
        console.log(response.data.result, "are the response");
      });

    }
  },
  mutations: {
    SET_Events(state, data) {
      state.events = data
    },
    SET_Books(state, data) {
      state.books = data
    },
    SET_Web(state, data) {
      state.web = data
    },
    SET_Kits(state, data) {
      state.kits = data
    }
  },
  modules: {
  }
})

import { createStore } from 'vuex';
import {  
  fetchNews,
  fetchAsk,
  fetchJobs,
  fetchItem,
  fetchUser,
} from '../api/index.js';

export default createStore({
  state: {
    news:[],
    ask: [],
    jobs: [],
    item: {},
    user: {},
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNews()
      .then( response => context.commit('SET_NEWS', response.data))
      .catch( error => console.log(error) )
    },
    FETCH_ASK(context) {
      fetchAsk()
        .then( response => context.commit('SET_ASK', response.data))
        .catch( error => console.log(error));
    },
    FETCH_JOBS(context) {
      fetchJobs()
        .then( response => context.commit('SET_JOBS', response.data))
        .catch( error => console.log(error) );
    },
    FETCH_ITEM(context, userId) {
      fetchItem(userId)
        .then( res =>context.commit('SET_ITEM', res.data) )
        .catch( error => console.log(error) );
    },
    FETCH_USER(context, userId) {
      fetchUser(userId)
      .then( res =>context.commit('SET_User', res.data) )
      .catch( error => console.log(error) );
    }
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs){
      state.jobs = jobs;
    },
    SET_ITEM(state, item) {
      state.item = item;
    },
    SET_User(state, user) {
      state.user = user;
    }
  }
});
 
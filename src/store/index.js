import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    articles: []
  },
  getters: {
  },
  mutations: {
    loadNews (state, articles) {
      console.log(articles)
      state.articles = articles
    }
  },
  actions: {
    loadNews ({ commit }) {
      axios
        .get('https://api.spaceflightnewsapi.net/v3/articles')
        .then(response => {
          commit('loadNews', response.data)
        })
    }
  },
  modules: {
  }
})

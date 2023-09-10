import { createStore } from 'vuex'

export default createStore({
  //類似vue檔裡面的data
  state: {
    count: 10000,
    color: 'dark',
    loginToggle: false
  },
  getters: {
    // 類似vue檔裡面的cmoputed
  },
  //類似vue檔裡面的methods
  mutations: {
    // 不支援非同步
    increment (state) {
      state.count++
    },
    updateColor (state, value) {
      state.color = value
    }
  },
  actions: {
    // fetch, 計時器
  },
  modules: {
  }
})

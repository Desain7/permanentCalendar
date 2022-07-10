// import { createStore } from 'vuex'
import { reqGetDailyInform, reqGetRecentlyInform, reqGetYearInform } from '@/api'


// export default createStore({
let state = {
  dailyInform: {},
  recentlyInform: {},
  yearInform: {},
}
let mutations = {
  DAILYINFORM(state, dailyInform) {
    state.dailyInform = dailyInform
    localStorage.setItem(`dailyInform`, JSON.stringify(dailyInform)); // 缓存数据
    localStorage.setItem(`dailyTimestamp`, Date.now()); // 记录时间
  },
  RECENTLYINFORM(state, recentlyInform) {
    state.recentlyInform = recentlyInform
    localStorage.setItem(`recentlyInform`, JSON.stringify(recentlyInform)); 
    localStorage.setItem(`recentlyTimestamp`, Date.now()); 
  },
  YEARINFORM(state, yearInform) {
    state.yearInform = yearInform
    localStorage.setItem(`yearInform`, JSON.stringify(yearInform)); 
    localStorage.setItem(`yearTimestamp`, Date.now()); 
  }
}
let actions = {
  async getDailyInform({ commit }, searchInform) {
    let result = await reqGetDailyInform(searchInform)
    if (result.error_code == 0) {
      console.log(111)
      commit("DAILYINFORM", result.result.data)
    }
  },
  async getRecentlyInform({ commit }, searchInform) {
    let result = await reqGetRecentlyInform(searchInform)
    if (result.error_code == 0) {
      commit("RECENTLYINFORM", result.result.data)
    }
  },
  async getYearInform({ commit }, searchInform) {
    let result = await reqGetYearInform(searchInform)
    if (result.error_code == 0) {
      commit("YEARINFORM", result.result.data)
    }
  },
}
export default {
  state,
  mutations,
  actions
}
  // })

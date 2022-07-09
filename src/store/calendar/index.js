// import { createStore } from 'vuex'
import {reqGetDailyInform, reqGetRecentlyInform, reqGetYearInform} from '@/api'
 

// export default createStore({
    let state = {
        dailyInform:{},
        recentlyInform:{},
        yearInform:{},
    }
    let mutations= {
      DAILYINFORM(state, dailyInform) {
        state.dailyInform = dailyInform
      },
      RECENTLYINFORM(state, recentlyInform) {
        state.recentlyInform = recentlyInform
      },
      YEARINFORM(state, yearInform) {
        state.yearInform = yearInform
      }
    }
    let actions = {
      async getDailyInform({commit}, searchInform) {
        let result = await reqGetDailyInform(searchInform)
        if (result.code == 200) {
            commit("DAILYINFROM", result.data)
        }
    },
      async getRecentlyInform({commit},searchInform) {
        let result = await reqGetRecentlyInform( searchInform)
        if (result.code == 200) {
            commit("RECENTLYINFROM", result.data)
        }
    },
      async getYearInform({commit}, searchInform) {
        let result = await reqGetYearInform( searchInform)
        if (result.code == 200) {
            commit("YEARINFROM", result.data)
        }
    },
    }
    export default {
      state,
      mutations,
      actions
    }
  // })
  
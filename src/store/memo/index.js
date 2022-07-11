let state = {
    memo:{
        memoContent: [],
        memoSum:0
    }

}
let mutations = {
    COMMITMEMO(state, memoContent) {
        state.memo.memoContent.push(memoContent)
        state.memo.memoSum++
        localStorage.setItem(`memo`, JSON.stringify(state.memo)); 
    },
    CHANGEMEMO(state, memoContent) {
        state.memo.memoContent[memoContent.id].memoTitle = memoContent.memoTitle
        state.memo.memoContent[memoContent.id].memoContent= memoContent.memoContent
        state.memo.memoContent[memoContent.id].updatedTime= memoContent.updatedTime
        localStorage.setItem(`memo`, JSON.stringify(state.memo)); 
    },
    DELETEMEMO(state, id) {
        state.memo.memoContent.splice(id, 1)
        state.memo.memoSum--
        state.memo.memoContent.slice(id, state.memo.memoSum).forEach(item => {
            item.id--
        });
        localStorage.setItem(`memo`, JSON.stringify(state.memo)); 
    }

}
let actions = {
    commitMemo({commit}, memoContent) {
        commit('COMMITMEMO', memoContent)
    },
    changeMemo({commit}, memoContent) {
        commit('CHANGEMEMO', memoContent)
    },
    deleteMemo({commit}, id) {
        commit('DELETEMEMO', id)
    }
 }
export default {
  state,
  mutations,
  actions
}


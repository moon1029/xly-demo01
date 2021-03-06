import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavShow:true
  },
  mutations: {  //改变状态
    //显示
    SHOWNAV(state){
      state.isNavShow
    },
    //隐藏
    HIDENAV(state){

    },
  },
  actions: {  //管理、提交mutations
    HIDENAV({commit}){
      commit('HIDENAV')
    },
    SHOWNAV({commit}){
      commit('SHOWNAV')
    }
  },
  modules: {  
  }
})

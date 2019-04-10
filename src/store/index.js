import Vue from 'vue'
import Vuex from 'vuex'
import getters from './modules/getters'
import mutations from './modules/mutations'
import actions from './modules/actions'
import state from './modules/state'
Vue.use(Vuex)


export default new Vuex.Store({
  // hahaha:{
    state,
    getters,
    mutations,
    actions,
    // hhh: "This is hhh."
  // }

})

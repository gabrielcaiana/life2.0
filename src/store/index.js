import Vue from 'vue'
import Vuex from 'vuex'

import * as authentication from './modules/authentication'
import * as snackbar from './modules/snackbar'
import * as loading from './modules/loading'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication,
    snackbar,
    loading
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

import * as drawer from './modules/drawer'
import * as authentication from './modules/authentication'
import * as snackbar from './modules/snackbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
		drawer,
    authentication,
    snackbar
  }
})

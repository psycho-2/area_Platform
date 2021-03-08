/**
 * Created by xiaoxudoo on 2017/1/5.
 */
require('core-js/fn/promise')
// To polyfill the global environment
require('es6-promise').polyfill();
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import ebank from './modules/ebank.js'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
    ebank
	},
	state: {

	},
	getters:{

	},
	actions:{

	},
	mutations: {

	}
})

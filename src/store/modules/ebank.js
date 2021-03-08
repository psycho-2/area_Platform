/**
 * Created by  on 2017/1/5.
 */
import * as types from '../mutation-types'

const	state = {
  status: 0,
  agree:0,
  slide:0,//0进去 1退出


}

const	getters = {
  status: state => state.status,
  agree: state => state.agree,
  slide:  state => state.slide,

}

const	actions = {
	setStatus ({ commit }, params) {
		commit(types.SET_STATUS, params)
  },
  setAgree ({ commit }, params) {
		commit(types.SET_AGREE, params)
	},
  setSlide ({ commit }, params) {
		commit(types.SET_SLIDE, params)
  },


}

const	mutations = {
	[types.SET_STATUS] (state, params) {
		state.status = params
  },
  [types.SET_AGREE] (state, params) {
		state.agree = params
  },
  [types.SET_SLIDE] (state, params) {
		state.slide = params
  }

}

export default {
    state,
    getters,
    actions,
    mutations
}

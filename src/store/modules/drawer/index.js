export const namespaced = true

export const state = { 
	drawer: null
}

export const mutations = {
	SET_DRAWER(state, payload) {
		state.drawer = payload
	}
}

export const actions = {
	openOrCloseDrawer( {commit}, payload) {
		commit('SET_DRAWER', payload)
	}
}

export const getters = {
	drawer: (state) => {
		return state.drawer
	}
}
import http from "@/services/http";
import router from "@/router";

export const namespaced = true;

export const state = {
  token: localStorage.getItem('token') || '',
  user: JSON.parse(localStorage.getItem('user'))
};

export const mutations = {
  DEFINE_USER_LOGIN(state, { token, user }) {
    state.token = token;
    state.user = user
  },

  DEFINE_LOGOUT(state) {
    state.token = null,
    state.user = null,
    localStorage.removeItem("token"),
    localStorage.removeItem("user")
  },
};

export const actions = {
  async login({ commit, dispatch }, user) {
    try {
      dispatch('loading/setLoading', true, {root: true})
      const { data } = await http.post("auth/login", user);
        
      const dataUser = {
        id: data.user.id,
        date: data.user.date,
        email: data.user.email,
        height: data.user.height,
        gender: data.user.gender
    }

      commit("DEFINE_USER_LOGIN", {
        token: data.access_token,
        user: dataUser
      });
      localStorage.setItem("token", data.access_token)
      localStorage.setItem('user', JSON.stringify(data.user))
      dispatch('snackbar/setSnackBar', {msg: 'Login Efetuado com sucesso!'}, {root: true})
      return router.push({ name: "dashboard" });
    } catch (err) {
        dispatch('snackbar/setSnackBar', {msg: 'Email ou senha incorretos', success: false}, {root: true})
    } finally {
      dispatch('loading/setLoading', false, {root: true})
    }
  },

  async logout({ commit }) {
    try {
      commit("DEFINE_LOGOUT")
      return router.push({name: "login"})
    } catch {
      console.log("Falha ao efetuar o logout")
    }
  }
};

export const getters = {
  user: (state) => {
    return state.user
  }
};

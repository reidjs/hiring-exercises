export default {
  setUser: function (state, payload) {
    state.user = payload.data
    window.localStorage.setItem("token", payload.data.tokens.access.token)
  },
}

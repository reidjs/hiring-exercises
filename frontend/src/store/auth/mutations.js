export default {
  setUser: function (state, payload) {
    state.user = payload
    window.localStorage.setItem("token", payload.tokens.access.token)
  },
}

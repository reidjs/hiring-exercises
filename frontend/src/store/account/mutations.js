export default {
  setAccount: function (state, payload) {
    state.account = payload.data
  },
  setTransactions: function (state, payload) {
    state.transactions = payload.data
  },
}

import axios from "axios"

export default {
  async account({ commit, dispatch }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        // NOTE: Not secure, anyone can retrieve anyone's account.
        // was having auth issues on backend for this route.
        const response = await axios.post(`${import.meta.env.VITE_API_URI}/v1/account`, { userId: payload.userId })
        commit("setAccount", response.data)
        resolve(response.data)
      } catch (err) {
        reject(err)
      }
    })
  },
  async transactions({ commit, dispatch }, payload) {
    console.log('payload', payload)
    return new Promise(async (resolve, reject) => {
      try {
        // TODO: Not secure, anyone can retrieve anyone's account.
        // was having auth issues on backend for this route.
        const response = await axios.post(`${import.meta.env.VITE_API_URI}/v1/account/transactions`, { accountId: payload.accountId })
        commit("setTransactions", response.data)
        resolve(response.data)
      } catch (err) {
        reject(err)
      }
    })
  },
  
}

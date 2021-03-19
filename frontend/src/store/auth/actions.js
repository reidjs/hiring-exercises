import axios from "axios"

export default {
  async login({ commit, dispatch }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URI}/v1/auth/login`, payload)
        commit("setUser", response.data)
        resolve(response.data)
      } catch (err) {
        reject(err)
      }
    })
  },
}

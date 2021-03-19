import axios from "axios"

export default {
  async account({ commit, dispatch }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URI}/v1/account`)
        commit("setAccount", response.data)
        resolve(response.data)
      } catch (err) {
        reject(err)
      }
    })
  },
  
}

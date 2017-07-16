import axios from 'axios'

const baseURL = 'https://teambuilder-3513e.firebaseio.com/'

export const generateCode = (payload, token) => {
  return axios.post(`${baseURL}/shareCodes.json?auth=${token}`, payload)
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw error
    })
}

export const loadShareCode = code => {
  return axios.get(`${baseURL}/shareCodes/${code}.json`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw error
    })
}

export const getPlayersByUserId = userId => {
  return axios.get(`${baseURL}/players.json?orderBy="userId"&equalTo="${userId}"`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw error
    })
}

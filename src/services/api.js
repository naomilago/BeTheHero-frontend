import axios from 'axios'

const api = axios.create({
  baseURL: 'https://bethegoodhero.herokuapp.com',
})

export default api
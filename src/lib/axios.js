import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://backend-a28.onrender.com',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true
})

export default axios

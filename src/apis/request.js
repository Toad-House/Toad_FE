import axios from 'axios'
const SERVER_URL = 'http://13.209.31.54:8080/'

const request = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default request

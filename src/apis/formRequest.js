import axios from 'axios'
const SERVER_URL = 'http://13.209.31.54:8080/'

const formRequest = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

export default formRequest

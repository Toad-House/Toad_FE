import axios from 'axios'
const SERVER_URL = 'http://13.209.31.54:8080/'

export const request = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
})


export const form_request = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

export default request

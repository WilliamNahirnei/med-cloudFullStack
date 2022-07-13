import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const get = async (path, params = {}) => {
  path = process.env.REACT_APP_API_URL + path
  return api.get(path, { params })
}
const show = async (path, params = {}) => {
  path = process.env.REACT_APP_API_URL + path
  return api.get(path, { params })
}
const post = async (path, params = {}) => {
  path = process.env.REACT_APP_API_URL + path
  return api.post(path, params)
}
const put = async (path, params = {}) => {
  path = process.env.REACT_APP_API_URL + path
  return api.put(path, params)
}
const destroy = async (path, params = {}) => {
  path = process.env.REACT_APP_API_URL + path
  return api.delete(path, { params })
}

export { axios, get, show, post, put, destroy }

export { api }

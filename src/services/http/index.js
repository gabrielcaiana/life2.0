import axios from "axios";
import { state } from "../../store/modules/authentication"
import { API_URL } from '/public/config/config.json'

const http = axios.create({
  baseURL: API_URL,
  headers: {
		"Accept": "application/json",
		"Content": "application/json"
  }
})

http.interceptors.request.use(
  config => {
    const token = state.token
    if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}

    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default http

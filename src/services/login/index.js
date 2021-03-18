import Axios from 'axios'
import { API_URL } from '/public/config/config.json'

export const postLogin = (user) => Axios.post(`${API_URL}auth/login`, user)
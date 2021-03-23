import Axios from 'axios'
import { API_URL } from '/public/config/config.json'

export const postRegister = (register) => Axios.post(`${API_URL}auth/register`, register)
import axios from 'axios'
import { BASE_URL } from '../assets/constant'
const service = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})

export default service
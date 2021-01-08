import axios from 'axios'

const BASE_URL = 'https://serverproducts-backend.herokuapp.com'
export const EXPIRED_SESSION_URL = BASE_URL
export const INTERNAL_SERVER_ERROR = 'Error Interno del Servidor'
export const SERVICE_UNAVAILABLE_MESSAGE = 'Servicio no disponible'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
  withCredentials: true,
})

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const errorMessage = JSON.parse(JSON.stringify(error))
    return Promise.reject(errorMessage)
  },
)
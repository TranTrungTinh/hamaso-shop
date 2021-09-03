
import axios from 'axios'
import API_CONFIG from '@/config/api.config'

const HTTPStatus = {
  Error: 400,
  Success: 200
}

// const HTTPResult = {
//   status: HTTPStatus.Success,
//   message: '',
//   result: {}
// }

const hamaso = axios.create({
  baseURL: API_CONFIG.API_PROXY_URL,
})

hamaso.interceptors.response.use(
  response => response.status === HTTPStatus.Success ? response.data : Promise.reject(response.data),
  error => {
    const errorJSON = error.toJSON()
    const messageText = error.response?.data?.message || 'Error'
    const errorText = error.response?.data?.error || error.response?.statusText || errorJSON.message
    const errorInfo = {
      ...errorJSON,
      config: error.config,
      request: error.request,
      response: error.response,
      code: error.code || error.response?.status || 400,
      message: messageText + ': ' + errorText
    }
    console.debug('axios error:', errorInfo)
    return Promise.reject(errorInfo)
  }
)

const service = {
  $: hamaso,
  request: (...args) => hamaso.request(...args),
  get: (...args) => hamaso.get(...args),
  delete: (...args) => hamaso.delete(...args),
  head: (...args) => hamaso.head(...args),
  options: (...args) => hamaso.options(...args),
  post: (...args) => hamaso.post(...args),
  put: (...args) => hamaso.put(...args),
  patch: (...args) => hamaso.patch(...args),
}

export default service

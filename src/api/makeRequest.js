import axios from 'axios'
import { BASE_URL } from '../constans'
console.log('BASE_URL', BASE_URL)

axios.defaults.baseURL = BASE_URL ? BASE_URL : 'http://localhost:1337'
const JWT = JSON.parse(localStorage.getItem('userInfo')).jwt
console.log('JWT Make request', JWT)

if (JWT) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + JWT
}

axios.defaults.headers.common['Authorization'] = 'Bearer TEST TEST TEST'

export default ({
  url = '/',
  method = 'get',
  params = {},
  data = {},
  headers = {},
}) => {
  return axios({
    url,
    method,
    headers: { ...headers },
    params,
    data,
  }).catch(error => {
    console.log(error)
  })
}

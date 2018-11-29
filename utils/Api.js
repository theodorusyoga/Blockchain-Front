import axios from 'axios';
import CryptoJS from 'crypto-js'
import { readToken } from '../middleware/authenticated';

const BASE_URL = process.env.VUE_APP_BASE_URL
const token = readToken()
const header = {
  'Content-type': 'application/json',
  'Authorization': token
}

export const login = payload => {
  const encrypted = CryptoJS.AES.encrypt(payload.password, process.env.VUE_APP_SECRET).toString();
  const data = {
    username: payload.username,
    password: encrypted
  }
  return axios.post(`${BASE_URL}/users/login`, data)
}

export const getDataBalance = id => {
  const config = {
    url: `${BASE_URL}/users/balance?username=${id}`,
    method: 'get',
    headers: header
  }
  return axios(config)
}

export const getDataBalances = (limit, page) => {
  const config = {
    method: 'get',
    headers: header,
    params: {
      limit,
      page
    }
  }
  return axios.get(`${BASE_URL}/users/balances`, config)
}

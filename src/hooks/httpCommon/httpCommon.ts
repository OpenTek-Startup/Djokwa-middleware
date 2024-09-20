import axios from 'axios';
import { BASE_URL } from '../../utils/env_variable';
// i think when will are in devevlopment mode every can have his/her dev link to the backend
// so i will make the baseUrl dynamic

export const HttpCommon = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  //  flag to accept cookies
  headers: {
    'Content-type': 'application/json',
  },
});

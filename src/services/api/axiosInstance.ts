import axios from 'axios';
import { envs } from '../../config/envs';

const axiosInstance = axios.create({
  baseURL: envs.BASE_URL,
  timeout: 10000,
});

//axiosInstance.interceptors.request.use(
//  (config) => {
//    const token = localStorage.getItem('authToken');
//    if (token) {
//      config.headers['Authorization'] = `Bearer ${token}`;
//    }

//    return config;
//  },
//  (error) => {
 //   return Promise.reject(error);
//  }
//);

export default axiosInstance;

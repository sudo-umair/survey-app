import axios from 'axios';
import { API_URL } from '@common/constants';

const axiosClient = axios.create({
  baseURL: API_URL.dev,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;

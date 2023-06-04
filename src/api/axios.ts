import axios from 'axios';
import { API_URL } from '@common/constants';

const getBaseUrl = () => {
  return API_URL.prod ?? API_URL.dev;
};

const axiosClient = axios.create({
  baseURL: getBaseUrl(),
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;

// PV0gcJ0lz8jAI3E4
// mongodb+srv://sieapmobile:<password>@cluster0.9e8nj3g.mongodb.net/?retryWrites=true&w=majority

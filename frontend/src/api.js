import axios from 'axios';
import store from './store';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: '',
  timeout: 10000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for modifying requests before they are sent
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify config here before returning it
    const token = store.getters.accessToken; // Assuming using localStorage for access token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response interceptor for handling responses
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify response data here before returning it
    return response.data;
  },
  (error) => {
    // Handle response errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

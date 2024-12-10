import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Point to the backend server
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

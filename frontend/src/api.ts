import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reactspringbootshop-backend.run.goorm.io/api',
});

export default api;

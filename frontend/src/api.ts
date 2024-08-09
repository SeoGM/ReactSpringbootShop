import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reactspringbootshop-backend.run.goorm.io/api',
});

const userApi = axios.create({
  baseURL: 'https://reactspringbootshop-backend.run.goorm.io/api/users',
});

export { api, userApi };

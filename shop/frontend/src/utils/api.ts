import axios from 'axios';

// Axios 기본 설정
const api = axios.create({
  baseURL: 'https://8080-seogm-reactspringboots-hos3g00mnmd.ws-us116.gitpod.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('API 호출 중 에러 발생:', error);
    throw error;
  }
};

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('API 호출 중 에러 발생:', error);
    throw error;
  }
};

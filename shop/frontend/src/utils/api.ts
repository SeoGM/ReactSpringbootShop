import axios from 'axios';

// Axios 기본 설정
const api = axios.create({
  baseURL: 'https://8080-seogm-reactspringboots-j8zw85ej8dh.ws-us116.gitpod.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // AxiosError 객체일 경우 추가 정보 사용 가능
      console.error('Axios 에러:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      // 일반적인 Error 객체
      console.error('일반 에러:', error.message);
    } else {
      // 알 수 없는 에러
      console.error('알 수 없는 에러:', error);
    }
    throw error;
  }
};

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // AxiosError 객체일 경우 추가 정보 사용 가능
      console.error('Axios 에러:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      // 일반적인 Error 객체
      console.error('일반 에러:', error.message);
    } else {
      // 알 수 없는 에러
      console.error('알 수 없는 에러:', error);
    }
    throw error;
  }
};

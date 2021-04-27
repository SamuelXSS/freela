import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://192.168.0.108:3333/',
});

api.interceptors.request.use(
  async (config) => {
    // const token = await AsyncStorage.getItem('token');
    config.headers = {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE5NDczODI5LCJleHAiOjE2MjIwNjU4Mjl9.egOC1BEGS-8Dd6YoLOOSZ691rMmw3d2cmDX30CdvT6k',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;

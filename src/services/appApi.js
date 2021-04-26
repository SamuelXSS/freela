import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: "https://app-dot-gestao-bov.uc.r.appspot.com",
});

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    config.headers = {
      'Authorization': `Bearer ${JSON.parse(token)}`
    }
    return config;
  },
  error => {
    Promise.reject(error);
  });

export default api;
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Popup} from '../../components';
import {getUser} from '../../services/ApiMethods/User';

import authApi from '../../services/authApi';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [logging, setLogging] = useState(false);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function loadStorageData() {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('userId');

      if (token) {
        authApi.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        setAuthenticated(true);
        setUserId(id);
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function handleLogin(email, password) {
    setLogging(true);
    await authApi
      .post('/login', {
        email,
        password,
      })
      .then(async (response) => {
        const {token, userId: id} = response.data;
        const message = response.data.message;

        await AsyncStorage.setItem('token', JSON.stringify(token));
        await AsyncStorage.setItem('userId', id);
        authApi.defaults.headers.Authorization = `Bearer ${token}`;

        const {name} = await getUser(id);
        setUserId(id);
        setAuthenticated(true);
        setUserName(name);

        Popup(message, 'success');
      })
      .catch((err) => {
        const message = err.response.data.message;

        Popup(message, 'error');
      });
    setLogging(false);
  }

  async function handleLogout() {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userId');
    authApi.defaults.headers.Authorization = undefined;
    setAuthenticated(false);
    setUserId('');
    setUserName('');
  }

  return {
    authenticated,
    userId,
    userName,
    loading,
    logging,
    handleLogin,
    handleLogout,
  };
}

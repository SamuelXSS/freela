import axios from 'axios';

const authApi = axios.create({
  baseURL: "https://auth-dot-gestao-bov.uc.r.appspot.com",
});


export default authApi;
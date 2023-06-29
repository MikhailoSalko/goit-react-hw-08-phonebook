import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const registerUser = async body => {
  const { data } = await instance.post('/users/signup', body);
  setToken(data.token);
  return data;
};

export const loginUser = async body => {
  const { data } = await instance.post('/users/login', body);
  setToken(data.token);
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    clearToken();
    throw error;
  }
};

export const logOutUser = async () => {
  const { data } = await instance.post('/users/logout');
  clearToken();
  return data;
};

export default instance;

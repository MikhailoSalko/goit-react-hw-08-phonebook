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
  console.log(body);
  const { data } = await instance.post('/users/signup', body);
  console.log(data);
  setToken(data.token);
  return data;
};
export const loginUser = async body => {
  const { data } = await instance.post('/users/login', body);
  setToken(data.token);
  return data;
};
export const getCurrent = async () => {
  const { data } = await instance.post('/users/current');
  return data;
};
export const logOutUser = async () => {
  const { data } = await instance.post('/users/logout');
  clearToken();
  return data;
};

export default instance;

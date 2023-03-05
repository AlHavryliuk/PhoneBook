import { $privateHost, $publicHost } from './hosts';

export const register = async credential => {
  const { data } = await $publicHost.post('/users/signup', credential);
  return data;
};

export const login = async credential => {
  const { data } = await $publicHost.post('/users/login', credential);
  return data;
};

export const logout = async () => {
  const { data } = await $privateHost.post('/users/logout');
  return data;
};

export const getCurrentUser = async credential => {
  const { data } = await $privateHost.post('/users/current', credential);
  return data;
};

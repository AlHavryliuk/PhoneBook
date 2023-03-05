import axios from 'axios';
import apiData from 'configuration/config';

export const $publicHost = axios.create({
  baseURL: apiData.BASE_URL,
});

export const $privateHost = axios.create({
  baseURL: apiData.BASE_URL,
});

export const token = {
  set: token => {
    $privateHost.defaults.headers.common.Authorization = token;
  },
  unSet: () => {
    $privateHost.defaults.headers.common.Authorization = ``;
  },
};

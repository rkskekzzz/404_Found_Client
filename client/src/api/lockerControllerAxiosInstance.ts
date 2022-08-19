import axios, { AxiosRequestConfig } from 'axios';
import { axiosInstanceWrapper } from './axiosInstanceWrapper';

const lockerControllerAxiosInnerInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: parseInt(process.env.REACT_APP_API_TIMEOUT, 10),
});

lockerControllerAxiosInnerInstance.interceptors.request.use(
  (request) => {
    request.headers.accept = 'application/json';
    return request;
  },
  (error) => Promise.reject(error)
);

lockerControllerAxiosInnerInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

const lockerControllerAxiosInstance = <T>(config: AxiosRequestConfig) =>
  axiosInstanceWrapper<T>(config, lockerControllerAxiosInnerInstance);

export default lockerControllerAxiosInstance;

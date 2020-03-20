import axios, { AxiosRequestConfig } from "axios";
import { getEnv } from "../config/env";

const apiBaseUrl = getEnv();

export const request = {
  get: (path: string, config?: AxiosRequestConfig) =>
    axios.get(apiBaseUrl + path, {
      ...config,
      withCredentials: true
    }),
  post: (path: string, body?: any, config?: AxiosRequestConfig) =>
    axios.post(apiBaseUrl + path, body, {
      ...config,
      withCredentials: true
    }),
  put: (path: string, body?: any, config?: AxiosRequestConfig) =>
    axios.post(apiBaseUrl + path, body, {
      ...config,
      withCredentials: true
    })
};

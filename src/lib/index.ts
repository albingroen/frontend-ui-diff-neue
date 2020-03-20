import axios from "axios";
import { getEnv } from "../config/env";

const apiBaseUrl = getEnv();

const tokens = {
  "x-token": localStorage.getItem("token"),
  "x-refresh-token": localStorage.getItem("refreshToken")
};

export const request = {
  get: (path: string) =>
    axios.get(apiBaseUrl + path, {
      headers: { ...tokens }
    }),
  post: (path: string, body: any) =>
    axios.post(apiBaseUrl + path, body, {
      headers: {
        ...tokens
      },
    }),
  put: (path: string, body: any) =>
    axios.post(apiBaseUrl + path, body, {
      headers: {
        ...tokens
      }
    })
};

import axios from "axios";
import { getEnv } from "../config/env";

const apiBaseUrl = getEnv();

export const request = {
  get: (path: string) =>
    axios.get(apiBaseUrl + path, {
      headers: { "x-token": localStorage.getItem("token") }
    }),
  post: (path: string, body: any) =>
    axios.post(apiBaseUrl + path, body, {
      headers: {
        "x-token": localStorage.getItem("token")
      }
    }),
  put: (path: string, body: any) =>
    axios.post(apiBaseUrl + path, body, {
      headers: {
        "x-token": localStorage.getItem("token")
      }
    })
};

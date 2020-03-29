import social from "./social";
import email from "./email";
import { request } from "..";

export const loggedIn =
  document.cookie.includes("x-token") &&
  document.cookie.includes("x-refresh-token");

export const login = async () => {
  window.location.href = "/";
};

export const logout = async () => {
  await request.post("/auth/logout");
  window.location.href = "/";
};

const auth = {
  login,
  logout,
  loggedIn,
  social,
  email,
};

export default auth;

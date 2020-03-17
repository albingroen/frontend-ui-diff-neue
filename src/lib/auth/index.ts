import github from './github'
import gitlab from './gitlab'
import google from './google'

export const loggedIn =
  window.localStorage.getItem("userId") && window.localStorage.getItem("token");

export const login = async (userId: string, token: string) => {
  window.localStorage.setItem("userId", userId);
  window.localStorage.setItem("token", token);
  window.location.href = "/"
};

export const logout = async () => {
  window.localStorage.removeItem("userId");
  window.localStorage.removeItem("token");
  window.location.href = "/"
};

const auth = {
  login,
  logout,
  loggedIn,
  github,
  gitlab,
  google
}

export default auth
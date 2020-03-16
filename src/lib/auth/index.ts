import github from './github'

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
  github
}

export default auth
import social from './social'

export const loggedIn =
  window.localStorage.getItem("userId") && window.localStorage.getItem("token");

export const login = async (userId: string, token: string, refreshToken: string) => {
  window.localStorage.setItem("userId", userId);
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("refreshToken", refreshToken);
  window.location.href = "/"
};

export const logout = async () => {
  window.localStorage.removeItem("userId");
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("refreshToken");
  window.location.href = "/"
};

const auth = {
  login,
  logout,
  loggedIn,
  social
}

export default auth
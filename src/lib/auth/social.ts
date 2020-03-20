import { request } from "..";
import { login } from ".";

export const getAuthUrl = async (method: string) => {
  const authUrl = await request.get(`/login/${method}`);
  return authUrl?.data?.url || null;
};

export const signup = async (method: string, code?: string) => {
  if (code) {
    let data;

    try {
      const signupResult = await request.post(`/auth/${method}`, { code });
      data = signupResult.data;
    } catch (err) {
      return new Error("Could not sign up");
    }

    if (data) {
      login();
    }
  } else {
    const ghAuthUrl = await getAuthUrl(method);
    if (ghAuthUrl) window.location.href = ghAuthUrl || "";
  }
};

export default {
  signup,
  getAuthUrl
};

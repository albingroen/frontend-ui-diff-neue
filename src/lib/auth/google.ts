import { request } from "..";
import { login } from ".";

export const getAuthUrl = async () => {
  const authUrl = await request.get("/login/google");
  return authUrl?.data?.url || null;
};

export const signup = async (code?: string) => {
  if (code) {
    let data;

    try {
      const signupResult = await request.post("/auth/google", { code });
      data = signupResult.data;
    } catch (err) {
      return new Error("Could not sign up");
    }

    if (data) {
      login(data?.user?._id, data?.token);
    }
  } else {
    const authUrl = await getAuthUrl();
    if (authUrl) window.location.href = authUrl || "";
  }
};

export default {
  signup,
  getAuthUrl
};

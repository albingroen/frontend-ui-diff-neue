import { createContext } from "react";

export type IUserContext = {
  userId: string | null;
  token: string | null
};

export const UserContext = createContext<IUserContext>({
  userId: null,
  token: null
});

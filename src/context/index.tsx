import React, { useState } from "react";
import { createContext } from "react";

export interface IAppContext {
  loggedIn: boolean;
  user: {};
  logIn: () => void;
  logOut: () => void;
}

export interface IAppContextState {
  loggedIn: boolean;
  user: {};
}

export const initialContextValues: IAppContext = {
  loggedIn: Boolean(localStorage.getItem("token")),
  user: {},
  logIn: () => {},
  logOut: () => {}
};

export const AppContext = createContext<IAppContext>(initialContextValues);

interface IAppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<IAppContextProviderProps> = ({
  children
}) => {
  const [state, setState] = useState<IAppContextState>(initialContextValues);

  return (
    <AppContext.Provider
      value={{
        ...state,
        logIn: () => {
          localStorage.setItem("token", "123");
          window.location.reload();
        },
        logOut: () => {
          localStorage.removeItem("token");
          window.location.reload();
        }
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

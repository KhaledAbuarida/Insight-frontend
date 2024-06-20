import { FC, PropsWithChildren, useState } from "react";
import { authContext } from "./AuthContext";

// localStorage keys
const TOKEN_KEY = "token";
const USERNAME_KEY = "username";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  // states
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(TOKEN_KEY)
  );
  const [userName, setUserName] = useState<string | null>(
    localStorage.getItem(USERNAME_KEY)
  );

  const isAuthenticated = !!token;

  const login = (token: string, userName: string) => {
    setToken(token);
    setUserName(userName);
    localStorage.setItem(USERNAME_KEY, userName);
    localStorage.setItem(TOKEN_KEY, token);
  };

  return (
    <authContext.Provider value={{ token, userName, isAuthenticated, login }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

import { FC, PropsWithChildren, useState } from "react";
import { authContext } from "./AuthContext";

// localStorage keys
const TOKEN_KEY = "token";
const USERNAME_KEY = "username";
const USEREMAIL_KEY = "userEmail";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  // states
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(TOKEN_KEY)
  );
  const [userName, setUserName] = useState<string | null>(
    localStorage.getItem(USERNAME_KEY)
  );

  const [userEmail, setUserEmail] = useState<string | null>(
    localStorage.getItem(USEREMAIL_KEY)
  );

  const isAuthenticated = !!token;

  const login = (token: string, userName: string, userEmail: string) => {
    setToken(token);
    setUserName(userName);
    setUserEmail(userEmail);
    localStorage.setItem(USERNAME_KEY, userName);
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USEREMAIL_KEY, userEmail);
  };

  const logout = () => {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USEREMAIL_KEY);
    setUserName(null);
    setToken(null);
    setUserEmail(null);
  };

  return (
    <authContext.Provider
      value={{ token, userName, userEmail, isAuthenticated, login, logout }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

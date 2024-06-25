import { createContext, useContext } from "react";

interface authContextType {
  token: string | null;
  userName: string | null;
  userEmail: string | null;
  isAuthenticated: boolean;
  login: (token: string, userName: string, userEmail: string) => void;
  logout: () => void;
}

export const authContext = createContext<authContextType>({
  token: null,
  userName: null,
  userEmail: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(authContext);

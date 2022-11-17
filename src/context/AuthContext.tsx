import { toast } from "react-toastify";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../service/api";

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  onSubmitLogin: (username: string, password: string) => Promise<any>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setIsAuthenticated(true)
    }
  });

  async function onSubmitLogin(username: string, password: string) {
    try {
      const response = await api.post("/authenticateUser", {
        headers: {
          "Content-Type": "application/json",
        },
        username,
        password,
      });
 
      const token = response.data;
      localStorage.setItem("token", JSON.stringify(token));
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      toast.error("Login ou senha inválida", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
  }

  return (
    <AuthContext.Provider value={{ onSubmitLogin, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

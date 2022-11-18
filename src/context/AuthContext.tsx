import { toast } from "react-toastify";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../service/api";

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  onSubmitLogin: (username: string, password: string) => Promise<any>;
  onLogout: ()=>void;
  isAuthenticated: boolean;
  balance: number;
  username: string;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [balance, setBalance] = useState(0);
  const [username, setUsername] = useState(" ");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const balance = localStorage.getItem("balance");
    const name = localStorage.getItem("name");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setIsAuthenticated(true);
      setBalance(Number(balance));
      setUsername(String(name));
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

      const token = response.data.token;
      const balance = response.data.account.balance;
      const name = response.data.username;
      console.log(name)

      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("balance", JSON.stringify(balance));
      localStorage.setItem("name", (name));

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      api.defaults.headers.common["Authorization"] = `Bearer ${balance}`;
      api.defaults.headers.common["Authorization"] = `Bearer ${name}`;

      setIsAuthenticated(true);
      navigate("/MyAccount");
    } catch (err) {
      toast.error("Login ou senha inválida", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
  }

  function onLogout(){
    localStorage.clear()
  }

  return (
    <AuthContext.Provider
      value={{ onSubmitLogin, isAuthenticated, balance, username, onLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

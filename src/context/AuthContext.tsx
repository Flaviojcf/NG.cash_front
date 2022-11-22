import { toast } from "react-toastify";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../service/api";

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  onSubmitLogin: (username: string, password: string) => Promise<any>;
  onLogout: () => void;
  isAuthenticated: boolean;
  username: string;
  idUser: string;
  balance: number;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [idUser, setIdUser] = useState("");
  const [balance, setBalance] = useState(0);
  const [username, setUsername] = useState(" ");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setIsAuthenticated(true);
      setUsername(String(name));
      setIdUser(String(id));
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
      const name = response.data.username;
      const id = response.data.account.id;

      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("name", name);
      localStorage.setItem("id", id);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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

  function onLogout() {
    localStorage.clear();
  }

  useEffect(() => {
    async function getUserBalance() {
      const response = await api.get("/getUserBalance");
      setBalance(response.data);
    }
    getUserBalance();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        onSubmitLogin,
        isAuthenticated,
        username,
        onLogout,
        idUser,
        balance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

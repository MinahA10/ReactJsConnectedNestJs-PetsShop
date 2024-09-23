import React, { createContext, useEffect, useState } from "react";
import { userLogin, UserProfile, userRegister } from "../models/User";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { loginAPI, registerAPI } from "../app/action/userAction";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  loginUser: (username: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: () => boolean;
  loading: boolean;
  error: string | null;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    user: loggedInUser,
    newUser: newUserSave,
    loading,
    error,
  } = useSelector((state: RootState) => state.user);

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser) as UserProfile);
      setToken(storedToken);
      axios.defaults.headers.common["Authorization"] = "Bearer " + storedToken;
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem("token", loggedInUser.token);
      const userObj: UserProfile = {
        username: loggedInUser.name,
      };

      localStorage.setItem("user", JSON.stringify(userObj));
      setToken(loggedInUser.token);
      setUser(userObj);
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  useEffect(() => {
    if (newUserSave) {
      navigate("/signin");
    }
  }, [newUserSave, navigate]);

  const loginUser = async (username: string, password: string) => {
    const userData: userLogin = {
      username,
      password,
    };

    try {
      await dispatch(loginAPI(userData));
    } catch (e) {
      console.error(e);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    const userData: userRegister = {
      name,
      email,
      password,
    };

    try {
      await dispatch(registerAPI(userData));
    } catch (e: any) {
      console.error(e);
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/signin");
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        loginUser,
        logout,
        register,
        token,
        user,
        loading,
        error,
      }}
    >
      {isReady ? (
        loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          children
        )
      ) : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
};

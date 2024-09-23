import axios from "axios";
import API_PATHS from "../../config/api";
import { jwtDecode } from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "../../models/User";

interface CustomJwtPayload {
  name: string;
  sub: string;
  iat: number;
  exp: number;
}

export const loginAPI = createAsyncThunk(
  "user/login",
  async (user: userLogin, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_PATHS.LOGIN, {
        username: user.username,
        password: user.password,
      });

      const token = response.data.token;
      const jwtData = jwtDecode<CustomJwtPayload>(token);

      return {
        name: jwtData.name,
        token: token,
      };
    } catch (error) {
      return rejectWithValue("Failed to fetch data");
    }
  }
);

export const registerAPI = createAsyncThunk(
  "user/register",
  async (user: userRegister, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_PATHS.REGISTER, {
        name: user.name,
        email: user.email,
        password: user.password,
      });

      return response.data.name;
    } catch (error) {
      return rejectWithValue("Failed to fetch data");
    }
  }
);

import { createSlice } from "@reduxjs/toolkit";
import { UserProfile, UserProfileToken } from "../../models/User";
import { loginAPI, registerAPI } from "../action/userAction";

interface UserState {
  user: UserProfileToken | null;
  newUser: UserProfile | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  newUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(registerAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.newUser = action.payload;
      })
      .addCase(registerAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const userReducer = userSlice.reducer;

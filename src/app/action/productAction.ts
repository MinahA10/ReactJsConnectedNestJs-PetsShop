import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_PATHS from "../../config/api";

export const fetchData = createAsyncThunk(
  "product/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_PATHS.PRODUCTS);
      return response.data;
    } catch (err) {
      return rejectWithValue("Failed to fetch data");
    }
  }
);

export const getDetailProduct = createAsyncThunk(
  "product/getDetailProduct",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_PATHS.PRODUCTS}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue("Failed to fetch data");
    }
  }
);

import { fetchData, getDetailProduct } from "../action/productAction";
import { createSlice } from "@reduxjs/toolkit";
import { defaultProduct, Product } from "../../models/Product";

interface DataState {
  data: Product[];
  selectedProduct: Product;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  selectedProduct: defaultProduct,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetSelectedProduct: (state) => {
      state.selectedProduct = defaultProduct;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(getDetailProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { resetSelectedProduct } = dataSlice.actions;
export const productReducer = dataSlice.reducer;

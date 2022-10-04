import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/fetchProductsStatus",
  async (params) => {
    const { sortBy, category, order, search, currentPage } = params;
    const { data } = await axios.get(
      `https://63370fc865d1e8ef26793518.mockapi.io/products?page=${currentPage}&limit=10&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchAllProductStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAllProductSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchAllProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAllProductStart,
  fetchAllProductSuccess,
  fetchAllProductFailure,
} = productsSlice.actions;

export default productsSlice.reducer;

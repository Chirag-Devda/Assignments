import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  loading: false,
  error: null,
};

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    fetchSingleProductStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSingleProductSuccess(state, action) {
      state.loading = false;
      state.product = action.payload.data;
      state.image = action.payload.image;
    },
    fetchSingleProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSingleProductFailure,
  fetchSingleProductStart,
  fetchSingleProductSuccess,
} = singleProductSlice.actions;

export default singleProductSlice.reducer;

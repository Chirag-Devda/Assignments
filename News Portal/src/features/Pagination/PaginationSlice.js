import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    next: (state) => {
      state.currentPage += 1;
    },
    previous: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
  },
});

export const { next, previous } = paginationSlice.actions;

export default paginationSlice.reducer;

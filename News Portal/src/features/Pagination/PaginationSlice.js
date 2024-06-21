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
    reset: (state, action) => {
      state.currentPage = action.payload;
      console.log("page reseted");
    },
  },
});

export const { next, previous, reset } = paginationSlice.actions;

export default paginationSlice.reducer;

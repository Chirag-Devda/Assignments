import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQuery: "daily",
};
export const querySlice = createSlice({
  name: "Query",
  initialState,
  reducers: {
    updateQuery: (state, action) => {
      state.currentQuery = action.payload;
      console.log(state.currentQuery);
    },
  },
});

export const { updateQuery } = querySlice.actions;

export default querySlice.reducer;
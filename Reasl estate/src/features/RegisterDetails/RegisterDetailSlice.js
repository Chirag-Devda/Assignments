import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: null,
};

export const registerDetailSlice = createSlice({
  name: "registerDetails",
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFormData } = registerDetailSlice.actions;

export default registerDetailSlice.reducer;

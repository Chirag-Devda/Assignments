import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationData: {
    societyname: "",
    areaname: "",
    cityname: "",
    streetname: "",
  },
};

export const locationDetailSlice = createSlice({
  name: "locationDetails",
  initialState,
  reducers: {
    handleLocationData: (state, action) => {
      const { name, value } = action.payload;
      state.locationData = { ...state.locationData, [name]: value };
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleLocationData } = locationDetailSlice.actions;

export default locationDetailSlice.reducer;

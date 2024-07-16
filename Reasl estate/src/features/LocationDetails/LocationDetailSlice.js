import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationData: {
    societyname: "",
    areaname: "",
    cityname: "",
    streetname: "",
    location: { lng: 0, lat: 0 },
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
    setLocationData: (state, action) => {
      state.locationData = action.payload;
    },
    updateLocation: (state, action) => {
      state.locationData = { ...state.locationData, location: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleLocationData, setLocationData, updateLocation } =
  locationDetailSlice.actions;

export default locationDetailSlice.reducer;

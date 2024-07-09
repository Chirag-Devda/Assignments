import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    propertyFor: "",
    propertType: "",
    propertyDetails: [],
  },
};

export const PropertyDetailSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    pushPropertyDetail: (state, action) => {
      state.formData.propertyDetails.push(action.payload);
    },
    removePropertyDetails: (state, action) => {
      const { detail } = action.payload;
      const filterDetails = state.formData.propertyDetails.filter(
        (property) => {
          return property !== detail;
        },
      );
      state.formData.propertyDetails = filterDetails;
    },
    resetProperyDetail: (state, action) => {
      state.formData.propertyDetails = [];
    },
    handleChangeData: (state, action) => {
      const { name, value } = action.payload;
      state.formData = { ...state.formData, [name]: value };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  handleChangeData,
  pushPropertyDetail,
  removePropertyDetails,
  resetProperyDetail,
} = PropertyDetailSlice.actions;

export default PropertyDetailSlice.reducer;

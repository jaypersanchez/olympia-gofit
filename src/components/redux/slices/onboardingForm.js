import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const onboardingFormSlice = createSlice({
  name: "onboardingForm",
  initialState: initialState,
  reducers: {
    addField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateForm: (state, action) => {
      const updatedData = action.payload;
      Object.assign(state, updatedData);
    },
    resetForm: () => {
      return initialState;
    },
  },
});

export const { addField, resetForm, updateForm } = onboardingFormSlice.actions;

export default onboardingFormSlice.reducer;

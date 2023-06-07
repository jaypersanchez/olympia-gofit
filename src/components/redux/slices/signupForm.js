import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const signupFormSlice = createSlice({
  name: "signupForm",
  initialState: initialState,
  reducers: {
    addField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: () => {
      return initialState;
    },
  },
});

export const { addField, resetForm } = signupFormSlice.actions;

export default signupFormSlice.reducer;

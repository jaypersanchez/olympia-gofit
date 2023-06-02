import { createSlice } from "@reduxjs/toolkit";

export const signupFormSlice = createSlice({
  name: "signupForm",
  initialState: {},
  reducers: {
    addField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addField } = signupFormSlice.actions;

export default signupFormSlice.reducer;

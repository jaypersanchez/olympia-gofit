import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "react-native-config";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const onboardUser = createAsyncThunk(
  "onboardUser/onboardUser",
  async (params) => {
    try {
      const response = await axios.put(
        `${Config.API_URL}/users/update`,
        params
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const onboardingSlice = createSlice({
  name: "oboarding",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(onboardUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(onboardUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(onboardUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default onboardingSlice.reducer;

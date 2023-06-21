import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "react-native-config";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const postNewUser = createAsyncThunk(
  "signupUser/postNewUser",
  async (params) => {
    try {
      const response = await axios.post(`${Config.API_URL}/users/new`, params);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const signupUserSlice = createSlice({
  name: "signupUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postNewUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postNewUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postNewUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default signupUserSlice.reducer;

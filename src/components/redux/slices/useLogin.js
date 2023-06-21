import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "react-native-config";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const postLoginUser = createAsyncThunk(
  "loginUser/postLoginUser",
  async (params) => {
    try {
      const response = await axios.post(
        `${Config.API_URL}/users/login`,
        params
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const loginUserSlice = createSlice({
  name: "loginUserS",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postLoginUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postLoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postLoginUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default loginUserSlice.reducer;

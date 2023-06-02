import { configureStore } from "@reduxjs/toolkit";
import signupForm from "./slices/signupForm";

const store = configureStore({
  reducer: {
    onboarding: signupForm,
  },
});

export default store;

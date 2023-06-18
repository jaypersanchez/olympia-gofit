import { configureStore } from "@reduxjs/toolkit";
import signupForm from "./slices/signupForm";
import workoutList from "./slices/useWorkoutList";

const store = configureStore({
  reducer: {
    onboarding: signupForm,
    dailyWorkouts: workoutList,
  },
});

export default store;

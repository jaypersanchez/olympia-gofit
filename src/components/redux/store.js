import { configureStore } from "@reduxjs/toolkit";
import onboardingForm from "./slices/onboardingForm";
import useLogin from "./slices/useLogin";
import useSignup from "./slices/useSignup";
import useOnboardUser from "./slices/useOnboardUser";
import useGeneratePlan from "./slices/useGeneratePlan";

import workoutList from "./slices/useWorkoutList";

const store = configureStore({
  reducer: {
    onboardingForm: onboardingForm,
    login: useLogin,
    signup: useSignup,
    onboarding: useOnboardUser,
    generatePlan: useGeneratePlan,
    dailyWorkouts: workoutList,
  },
});

export default store;

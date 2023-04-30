import { useReducer } from "react";

const useSignUpFormStepper = (signUpFormLength) => {
  const [step, setSteps] = useReducer(
    (state, newState) => {
      const nextStep = state.active + newState.active;
      if (nextStep < 0 || nextStep > signUpFormLength) {
        return state;
      }
      return { ...state, ...newState, active: nextStep };
    },
    { active: 0 }
  );

  return [step, setSteps];
};

export default useSignUpFormStepper;

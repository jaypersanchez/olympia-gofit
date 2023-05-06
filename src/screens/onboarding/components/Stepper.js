import { View, Text } from "react-native";
import React from "react";
import ProgressBarStepper from "../../../components/customs/ProgressBarStepper";

const Stepper = ({ steps, activeSteps, height }) => {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <ProgressBarStepper
        steps={steps} // Total number of steps
        activeSteps={activeSteps} // Current active step
        height={height ? height : 10}
      />
    </View>
  );
};

export default Stepper;

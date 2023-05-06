import { StyleSheet, View } from "react-native";
import React from "react";

const ProgressBarStepper = ({ steps, activeSteps, height }) => {
  const totalSteps = 100 / steps;
  const progressWidth = Math.min(activeSteps * totalSteps, 100);

  return (
    <View
      style={[
        styles.progressBarContainer,
        {
          display: activeSteps > 0 ? "flex" : "none",
        },
      ]}
    >
      <View
        style={[
          styles.progressActive,
          {
            height: height,
            width: progressWidth + "%",
            borderTopRightRadius: steps === activeSteps ? 0 : 100,
            borderBottomRightRadius: steps === activeSteps ? 0 : 100,
          },
        ]}
      />
    </View>
  );
};
export default ProgressBarStepper;

const styles = StyleSheet.create({
  progressBarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#E0E0E0",
  },
  progressActive: {
    backgroundColor: "#6842FF",
  },
});

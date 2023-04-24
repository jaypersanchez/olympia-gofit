import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Stepper = ({ length, step }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: length }, (_, index) => (
        <View key={index}>
          {step === index ? (
            <LinearGradient
              colors={["#6842FF", "#896BFF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.activeStep}
            />
          ) : (
            <View style={styles.inactiveStep} />
          )}
        </View>
      ))}
    </View>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  activeStep: {
    height: 8,
    width: 32,
    borderRadius: 100,
  },
  inactiveStep: {
    height: 8,
    width: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 100,
  },
});

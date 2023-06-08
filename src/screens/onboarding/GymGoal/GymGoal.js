import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextItem from "../../../components/customs/TextItem";
import Button from "../../../components/customs/Button";
import Stepper from "../components/Stepper";
import CheckboxButton from "../components/CheckboxButton";
import { useDispatch } from "react-redux";
import { addField } from "../../../components/redux/slices/signupForm";

const GymGoal = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { activeStep, stepsLength } = route.params;
  const [gymGoal, setGymGoal] = useState([]);

  const goals = [
    { label: "Build Strength" },
    { label: "Size" },
    { label: "Get Ripped" },
    { label: "Overall Fitness" },
  ];

  const handleSelectionChange = (selectedItems) => {
    setGymGoal(selectedItems.map((index) => goals[index].label.toLowerCase()));
  };

  const handleNext = () => {
    dispatch(addField({ field: "gymGoal", value: JSON.stringify(gymGoal) }));
    navigation.navigate("WorkoutPlace", {
      stepsLength,
      activeStep: activeStep + 1,
    });
  };

  return (
    <View style={styles.container}>
      <Stepper steps={stepsLength} activeSteps={activeStep} />
      <View style={styles.contents}>
        <View style={{ display: "flex", gap: 19 }}>
          <TextItem type="h3" style={{ textAlign: "center", marginTop: 10 }}>
            What is Your Gym Goal?
          </TextItem>
          <TextItem
            type="body_xl"
            style={{
              textAlign: "center",
              fontSize: 21,
              lineHeight: 25.2,
            }}
          >
            You can choose more than one gym goal.
          </TextItem>
        </View>

        <View style={{ gap: 24, width: "100%" }}>
          <CheckboxButton
            data={goals}
            onSelectionChange={handleSelectionChange}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            columnGap: 12,
          }}
        >
          <Button
            label="Back"
            style={{ width: "50%" }}
            btnColor="#F0ECFF"
            btnTextColor="#6842FF"
            onPress={() => navigation.goBack()}
          />
          <Button
            label="Continue"
            style={{ width: "50%" }}
            onPress={handleNext}
            disabled={gymGoal.length === 0}
          />
        </View>
      </View>
    </View>
  );
};

export default GymGoal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  contents: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextItem from "../../../components/customs/TextItem";
import Button from "../../../components/customs/Button";
import Stepper from "../components/Stepper";
import SelectorButton from "../components/SelectorButton";

const WorkoutPlace = ({ navigation, route }) => {
  const { activeStep, stepsLength } = route.params;

  return (
    <View style={styles.container}>
      <Stepper steps={stepsLength} activeSteps={activeStep} />
      <View style={styles.contents}>
        <View style={{ display: "flex", gap: 19 }}>
          <TextItem type="h3" style={{ textAlign: "center", marginTop: 10 }}>
            Where do you currently workout?
          </TextItem>
          <TextItem
            type="body_xl"
            style={{
              textAlign: "center",
              fontSize: 21,
              lineHeight: 25.2,
            }}
          >
            Select your current workout location to help us personalize your
            fitness plan.
          </TextItem>
        </View>

        <View style={{ gap: 24, width: "100%" }}>
          <SelectorButton
            labels={[
              "Small  Gym",
              "Home Gym",
              "Commercial Gym",
              "Crossfit Style Gym",
            ]}
            onLabelSelect={(label) => console.log(`Selected label: ${label}`)}
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
            onPress={() =>
              navigation.navigate("DailyProgram", {
                stepsLength,
                activeStep: activeStep + 1,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default WorkoutPlace;

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

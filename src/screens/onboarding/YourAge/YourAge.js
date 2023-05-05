import { StyleSheet, View } from "react-native";
import React from "react";
import TextItem from "../../../components/customs/TextItem";
import Button from "../../../components/customs/Button";
import BirthdayPicker from "./components/BirthdayPicker";
import Stepper from "../components/Stepper";

const YourAge = ({ navigation, route }) => {
  const { activeStep, stepsLength } = route.params;

  return (
    <View style={styles.container}>
      <Stepper steps={stepsLength} activeSteps={activeStep} />
      <View style={styles.contents}>
        <View style={{ display: "flex", gap: 19 }}>
          <TextItem type="h3" style={{ textAlign: "center", marginTop: 10 }}>
            How Old Are You?
          </TextItem>
          <TextItem
            type="body_xl"
            style={{
              textAlign: "center",
              fontSize: 21,
              lineHeight: 25.2,
            }}
          >
            Age in years. This will help us to personalize an exercise program
            plan that suits you.
          </TextItem>
        </View>

        <View style={{ gap: 24, width: "100%" }}>
          <BirthdayPicker />
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
              navigation.navigate("Weight", {
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

export default YourAge;

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

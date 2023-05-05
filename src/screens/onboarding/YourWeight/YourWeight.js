import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import TextItem from "../../../components/customs/TextItem";
import Button from "../../../components/customs/Button";
import Stepper from "../components/Stepper";
import WeightInput from "./components/WeightInput";

const YourWeight = ({ navigation, route }) => {
  const { activeStep, stepsLength } = route.params;
  const [weight, setWeight] = useState({});

  console.log({ weight });
  return (
    <View style={styles.container}>
      <Stepper steps={stepsLength} activeSteps={activeStep} />
      <View style={styles.contents}>
        <View style={{ display: "flex", gap: 19 }}>
          <TextItem type="h3" style={{ textAlign: "center", marginTop: 10 }}>
            What is Your Weight?
          </TextItem>
          <TextItem
            type="body_xl"
            style={{
              textAlign: "center",
              fontSize: 21,
              lineHeight: 25.2,
            }}
          >
            Weight in kg/lbs. Don't worry, you can always change it later.
          </TextItem>
        </View>

        <View style={{ gap: 24, width: "100%" }}>
          <WeightInput setWeight={setWeight} />
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
              navigation.navigate("Height", {
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

export default YourWeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
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

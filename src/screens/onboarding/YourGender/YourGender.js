import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GenderButton from "./components/GenderButton";
import TextItem from "../../../components/customs/TextItem";
import Button from "../../../components/customs/Button";
import Stepper from "../components/Stepper";

const YourGender = ({ navigation: { navigate } }) => {
  const stepsLength = 10;
  const activeStep = 1;
  const [gender, setGender] = useState(null);

  return (
    <View style={styles.container}>
      <Stepper steps={stepsLength} activeSteps={activeStep} />
      <View style={styles.contents}>
        <View style={{ gap: 19 }}>
          <TextItem type="h3" style={{ textAlign: "center", marginTop: 10 }}>
            Tell Us About Yourself
          </TextItem>
          <TextItem
            type="body_xl"
            style={{ textAlign: "center", fontSize: 21, lineHeight: 25.2 }}
          >
            To give you a better experience and results we need to know your
            gender.
          </TextItem>
        </View>
        <View style={{ gap: 24, width: "100%" }}>
          <GenderButton
            label="Male"
            active={gender === "Male"}
            onPress={() => setGender("Male")}
          />
          <GenderButton
            label="Female"
            active={gender === "Female"}
            onPress={() => setGender("Female")}
          />
        </View>
        <Button
          label="Continue"
          style={{ width: "100%" }}
          onPress={() =>
            navigate("Age", { stepsLength, activeStep: activeStep + 1 })
          }
        />
      </View>
    </View>
  );
};

export default YourGender;

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

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextItem from "../../../components/customs/TextItem";
import Button from "../../../components/customs/Button";
import Stepper from "../components/Stepper";
import HeightInput from "./components/HeightInput";
import { useDispatch } from "react-redux";
import { addField } from "../../../components/redux/slices/signupForm";

const YourHeight = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { activeStep, stepsLength } = route.params;
  const [height, setHeight] = useState({});

  const handleNext = () => {
    dispatch(addField({ field: "height", value: height.value + height.type }));
    navigation.navigate("ActivityLevel", {
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
            What is Your Height?
          </TextItem>
          <TextItem
            type="body_xl"
            style={{
              textAlign: "center",
              fontSize: 21,
              lineHeight: 25.2,
            }}
          >
            Height in inch/cm. Don't worry, you can always change it later.
          </TextItem>
        </View>

        <View style={{ gap: 24, width: "100%" }}>
          <HeightInput setHeight={setHeight} />
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
            disabled={height?.value === undefined}
          />
        </View>
      </View>
    </View>
  );
};

export default YourHeight;

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

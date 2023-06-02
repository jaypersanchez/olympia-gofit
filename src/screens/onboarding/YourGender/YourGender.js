import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BackHandler } from "react-native";
import GenderButton from "./components/GenderButton";
import TextItem from "../../../components/customs/TextItem";
import Button from "../../../components/customs/Button";
import Stepper from "../components/Stepper";
import { useDispatch } from "react-redux";
import { addField } from "../../../components/redux/slices/signupForm";

const YourGender = ({ navigation }) => {
  const stepsLength = 10;
  const activeStep = 1;
  const [gender, setGender] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const handleNext = () => {
    dispatch(addField({ field: "gender", value: gender }));
    navigation.navigate("Age", {
      stepsLength,
      activeStep: activeStep + 1,
    });
  };

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
            active={gender === "male"}
            onPress={() => setGender("male")}
          />
          <GenderButton
            label="Female"
            active={gender === "female"}
            onPress={() => setGender("female")}
          />
        </View>
        <Button
          label="Continue"
          style={{ width: "100%" }}
          onPress={handleNext}
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

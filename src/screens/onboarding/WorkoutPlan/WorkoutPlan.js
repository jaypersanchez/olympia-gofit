import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import TextItem from "../../../components/customs/TextItem";
import Button from "../../../components/customs/Button";
import Stepper from "../components/Stepper";
import Checkbox from "../components/Checkbox";

const WorkoutPlan = ({ navigation, route }) => {
  const { activeStep, stepsLength } = route.params;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = (value) => {
    setIsChecked(value);
  };

  const handleGeneratePlan = () => {
    // navigation.navigate('PaymentPlan');
    console.log("Generate workout plan button pressed");
  };

  return (
    <View style={styles.container}>
      <Stepper steps={stepsLength} activeSteps={activeStep} height={4} />
      <View style={styles.contents}>
        <View style={{ gap: 48 }}>
          <View>
            <TextItem style={styles.headerTitle}>Great!</TextItem>
            <TextItem style={styles.headerTitle}>Let's Workout</TextItem>
          </View>
          <View style={{ width: "100%" }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Checkbox isChecked={isChecked} onPress={handleCheckboxPress} />
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <TextItem type="body_xl" font="semibold" style={styles.text}>
                  I agree to the
                </TextItem>
                <TouchableOpacity
                  activeOpacity={0.55}
                  onPress={() => console.log("terms and condition was clicked")}
                >
                  <TextItem
                    type="body_xl"
                    font="semibold"
                    style={[styles.text, { color: "#6842FF" }]}
                  >
                    terms and conditions
                  </TextItem>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <Button
          label="Generate Workout Plan"
          style={{ width: "100%" }}
          onPress={handleGeneratePlan}
        />
      </View>
    </View>
  );
};

export default WorkoutPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  contents: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 48,
    paddingHorizontal: 24,
    gap: 16,
  },
  headerTitle: {
    color: "#6842FF",
    fontSize: 52,
    fontFamily: "Urbanist_700Bold",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 21,
    lineHeight: 25.2,
  },
});

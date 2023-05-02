import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextItem from "../../components/customs/TextItem";
import Button from "../../components/customs/Button";
import MultipleCheckBox from "./components/MultipleCheckBox";
const data = [
  {
    label: "7 Days Trial",
    description: "Pay once, cancel any time",
    amount: "Free",
  },
  {
    label: "Monthly",
    description: "Pay once, cancel any time",
    amount: "$19.99/m",
  },
  {
    label: "Yearly",
    description: "Pay once, cancel any time",
    amount: "$99.99/m",
  },
];
const YourPaymentPlan = ({ navigation }) => {
  const handleSelectionChange = (selectedItems) => {
    console.log("Selected items:", selectedItems);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            gap: 19,
          }}
        >
          <TextItem
            type="h3"
            style={{
              textAlign: "center",
              marginTop: 10,
              paddingHorizontal: 24,
            }}
          >
            Choose your payment plan
          </TextItem>
          <TextItem
            type="body_xl"
            style={{ textAlign: "center", fontSize: 21, lineHeight: 25.2 }}
          >
            Enjoy workout access without ads and restrictions.
          </TextItem>
        </View>
        <View style={{ flex: 1, gap: 36, width: "100%", paddingVertical: 34 }}>
          <MultipleCheckBox
            data={data}
            onSelectionChange={handleSelectionChange}
          />
        </View>
      </View>
      <Button
        label="Continue and Pay"
        style={{ width: "100%" }}
        btnColor="#6842FF"
        btnTextColor="#F0ECFF"
        onPress={() => navigation.navigate("DailyWorkout")}
      />
    </SafeAreaProvider>
  );
};

export default YourPaymentPlan;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    gap: 24,
  },
});

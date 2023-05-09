import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextItem from "../../../components/customs/TextItem";
import Button from "../../../components/customs/Button";
import RadioboxButton from "../components/RadioboxButton";

const PaymentPlan = ({ navigation: { navigate }, route }) => {
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

  const handleSelectionChange = (selectedItems) => {
    console.log("Selected items:", selectedItems);
  };
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: "center", gap: 48 }}>
            <View
              style={{
                gap: 19,
                width: "100%",
                alignItems: "center",
              }}
            >
              <TextItem
                type="h2"
                style={{ textAlign: "center", marginTop: 10 }}
              >
                Choose your payment plan
              </TextItem>
              <TextItem
                type="body_xl"
                style={{
                  textAlign: "center",
                  fontSize: 21,
                  lineHeight: 25.2,
                }}
              >
                Enjoy workout access without ads and restrictions.
              </TextItem>
            </View>

            <View style={{ gap: 24, width: "100%" }}>
              <RadioboxButton
                data={data}
                onSelectionChange={handleSelectionChange}
              />
            </View>
          </View>
        </View>

        <Button
          label="Continue and Pay"
          style={{ width: "100%" }}
          onPress={() => navigate("BottomNav", { screen: "Home" })}
        />
      </View>
    </View>
  );
};

export default PaymentPlan;

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

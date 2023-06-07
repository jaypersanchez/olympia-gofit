import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextItem from "../../../components/customs/TextItem";
import Button from "../../../components/customs/Button";
import RadioboxButton from "../components/RadioboxButton";
import { addField } from "../../../components/redux/slices/signupForm";
import { useDispatch } from "react-redux";

const PaymentPlan = ({ navigation: { navigate }, route }) => {
  const dispatch = useDispatch();
  const [paymentSchedule, setPaymentSchedule] = useState(null);

  const data = [
    {
      label: "7 Days Trial",
      description: "Pay once, cancel any time",
      amount: "Free",
      paysched: "trial",
    },
    {
      label: "Monthly",
      description: "Pay once, cancel any time",
      amount: "$19.99/m",
      paysched: "month",
    },
    {
      label: "Yearly",
      description: "Pay once, cancel any time",
      amount: "$99.99/m",
      paysched: "year",
    },
  ];

  const handleChange = (val) => {
    setPaymentSchedule(data[val].paysched);
  };

  const handleNext = () => {
    dispatch(addField({ field: "paymentSchedule", value: paymentSchedule }));
    navigate("BottomNav", { screen: "Home" });

    //call api to save data
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
              <RadioboxButton data={data} onSelectionChange={handleChange} />
            </View>
          </View>
        </View>

        <Button
          label="Continue and Pay"
          style={{ width: "100%" }}
          onPress={handleNext}
          disabled={paymentSchedule === null}
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

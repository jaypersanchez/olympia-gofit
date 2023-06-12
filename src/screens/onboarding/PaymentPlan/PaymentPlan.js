import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TextItem from "../../../components/customs/TextItem";
import Button from "../../../components/customs/Button";
import RadioboxButton from "../components/RadioboxButton";
import { addField } from "../../../components/redux/slices/signupForm";
import { useDispatch, useSelector } from "react-redux";
import useSignup from "../../../components/api/useSignup";
import Config from "react-native-config";
import axios from "axios";
import useWorkoutPlan from "../../../components/api/useWorkoutPlan";

const PaymentPlan = ({ navigation: { navigate }, route }) => {
  const dispatch = useDispatch();
  const signupForm = useSelector((state) => state.onboarding);
  const { error, loading, postUser } = useSignup();
  const { postPlan } = useWorkoutPlan();
  const [paymentSchedule, setPaymentSchedule] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const payment = [
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
    setPaymentSchedule(payment[val].paysched);
  };

  const form = {
    ...signupForm,
    age: new Date(JSON.parse(signupForm.age)),
    paymentSchedule,
  };

  const handleNext = async () => {
    setSubmitting(true);
    const res = await postUser(form);
    //const plan_res = await postPlan(form)
    setSubmitting(false);

    if (res && !error && !submitting) {
      navigate("BottomNav", { screen: "Home" });
    }
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
              <RadioboxButton data={payment} onSelectionChange={handleChange} />
            </View>
          </View>
        </View>

        <Button
          label="Continue and Pay"
          style={{ width: "100%" }}
          onPress={handleNext}
          disabled={paymentSchedule === null || submitting}
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

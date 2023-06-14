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
import { GooglePay } from 'react-native-google-pay'

const PaymentPlan = ({ navigation: { navigate }, route }) => {
  const dispatch = useDispatch();
  const signupForm = useSelector((state) => state.onboarding);
  const { error, loading, postUser } = useSignup();
  const { postPlan } = useWorkoutPlan();
  const [paymentSchedule, setPaymentSchedule] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [isreadytopay, setIsReadyToPay] = useState();

  useEffect(() => {
    // Initialize Google Pay
    //GooglePay.inialinitializeGooglePay();
  }, []);

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

  const handleChange = async (val) => {
    setPaymentSchedule(payment[val].paysched);
    console.log(`Google Pay`)
    const baseRequest = {
      apiVersion: 2,
      apiVersionMinor: 0
    };
    const tokenizationSpecification = {
      type: 'PAYMENT_GATEWAY',
      parameters: {
        'gateway': 'appco',
        'gatewayMerchantId': 'exampleGatewayMerchantId'
      }
    };
    const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];
    const allowedCardNetworks = ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"];
    const baseCardPaymentMethod = {
      type: 'CARD',
      parameters: {
        allowedAuthMethods: allowedCardAuthMethods,
        allowedCardNetworks: allowedCardNetworks
      }
    };
    const cardPaymentMethod = Object.assign(
      {tokenizationSpecification: tokenizationSpecification},
      baseCardPaymentMethod
    );
    const paymentsClient = new GooglePay.payment.api.PaymentsClient({environment: 'TEST'});
    
    const paymentDataRequest = Object.assign({}, baseRequest);
    paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];
    paymentDataRequest.transactionInfo = {
      totalPriceStatus: 'FINAL',
      totalPrice: '123.45',
      currencyCode: 'USD',
      countryCode: 'US'
    };
    paymentDataRequest.merchantInfo = {
      merchantName: 'Example Merchant',
      merchantId: '12345678901234567890'
    };
    
    try {
      const paymentData = await paymentsClient.loadPaymentData(paymentDataRequest);
      // if using gateway tokenization, pass this token without modification
      paymentToken = paymentData.paymentMethodData.tokenizationData.token;
    } catch (err) {
        // show error in developer console for debugging
        console.error(err);
    }   
    ///paymentsClient.loadPaymentData(paymentDataRequest).then(function(paymentData){
      // if using gateway tokenization, pass this token without modification
      //paymentToken = paymentData.paymentMethodData.tokenizationData.token;
    //}).catch(function(err){
      // show error in developer console for debugging
      //console.error(err);
    //});*/

  }

  const form = {
    ...signupForm,
    age: new Date(JSON.parse(signupForm.age)),
    paymentSchedule,
  };

  const handleNext = async () => {
    setSubmitting(true);
    console.log(`Calling postUser`)
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

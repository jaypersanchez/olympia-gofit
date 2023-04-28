import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "../../components/customs/Button";
import TextItem from "../../components/customs/TextItem";

const Payment = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={{ paddingTop: 250 }}>
      <TextItem type="h1" font="bold">Be Premium</TextItem>
      <TextItem type="h3" font="bold">Get Unlimited Access</TextItem>
      <TextItem type="body_m" font="medium">Enjoy workout access without ads and restrictions</TextItem>

      <Button label="Subscribe" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default Payment;

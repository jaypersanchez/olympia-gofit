import React, { useState } from "react";

import { Button, StyleSheet, Text, View } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";

import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";

export default function BirthdayPicker() {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(value) {
    console.log("va", value);
    // setDate(value);
    setDatePicker(false);
  }
  const dateOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  console.log("dat", date?.toLocaleDateString("en-GB", dateOptions));

  return (
    <View style={styles.container}>
      <DatePicker
        modal
        theme="auto"
        open={datePicker}
        date={date}
        mode="date"
        title="Select Birthdate"
        format="DD-MM-YYYY"
        maxDate="2023-12-31"
        textColor="#6842FF"
        onConfirm={(date) => {
          setDatePicker(false);
          setDate(date);
        }}
        onCancel={() => {
          setDatePicker(false);
        }}
      />

      {!datePicker && (
        <TouchableOpacity style={styles.button} onPress={showDatePicker}>
          <Text style={styles.buttonText}>
            {date?.toLocaleDateString("en-GB", dateOptions)}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 40,
    fontWeight: "500",
    color: "#6842FF",
    padding: 3,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#6842FF",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
});

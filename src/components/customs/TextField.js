import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import EyeCloseIcon from "../../../assets/EyeCloseIcon.svg";

const TextField = ({ style, icon, placeholder, type }) => {
  const [isFocused, setIsFocused] = useState();

  return (
    <View style={{ ...style, position: "relative" }}>
      <View style={{ position: "absolute", top: 23, left: 15, zIndex: 1 }}>
        {icon}
      </View>
      {type === "password" ? (
        <View style={{ position: "absolute", top: 23, right: 23, zIndex: 1 }}>
          <EyeCloseIcon style={{ color: "#B0B2B3" }} />
        </View>
      ) : (
        ""
      )}
      <TextInput
        style={[
          styles.input,
          {
            borderColor: isFocused ? "#6842FF" : "#EEEEEE",
            backgroundColor: isFocused ? "rgba(104, 66, 255, 0.08)" : "#EEEEEE",
          },
        ]}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={type === "password" ?? true}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#FAFAFA",
    paddingLeft: 45,
    borderColor: "#FAFAFA",
    borderWidth: 2,
  },
});

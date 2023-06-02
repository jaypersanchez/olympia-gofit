import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";

import EyeCloseIcon from "../../../assets/icons/EyeCloseIcon.svg";

const TextField = ({
  style,
  icon,
  placeholder,
  type,
  onFieldFocus,
  onFieldBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState();
  const [isPassShown, setPassShown] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFieldFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFieldBlur();
  };
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
            borderColor: isFocused
              ? "#6842FF"
              : props.error
              ? "#F44336"
              : "#EEEEEE",
            backgroundColor: isFocused ? "rgba(104, 66, 255, 0.08)" : "#EEEEEE",
            paddingLeft: icon ? 45 : 26,
            paddingRight: icon ? 0 : 26,
          },
        ]}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={type === "password" ?? true}
        {...props}
      />
      {props.error ? (
        <Text style={{ fontSize: 14, padding: 4, color: "#F44336" }}>
          {props.error}
        </Text>
      ) : null}
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
    borderColor: "#FAFAFA",
    borderWidth: 2,
  },
});

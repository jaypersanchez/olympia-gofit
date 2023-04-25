import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SignInButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SignInButton;

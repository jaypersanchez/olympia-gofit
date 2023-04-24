import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ onPress, label, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={{ ...styles.container, ...style }}
    >
      <LinearGradient
        colors={["#6842FF", "#896BFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.textButton}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6842FF",
    padding: 10,
    borderRadius: 100,
    paddingVertical: 18,
    paddingHorizontal: 16,
    height: 58,
    boxShadow: "4px 8px 24px rgba(104, 66, 255, 0.25)",
  },
  textButton: {
    color: "#ffffff",
    fontFamily: "Urbanist_700Bold",
    fontSize: 18,
    lineHeight: 25.2,
  },
});

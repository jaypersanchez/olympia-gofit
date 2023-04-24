import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import TextItem from "../../../components/customs/TextItem";
import { FemaleIcons, MaleIcons } from "../../../components/Icons";
import { LinearGradient } from "expo-linear-gradient";

const GenderButton = ({ label, onPress, active }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={styles.container}
    >
      {active ? (
        <LinearGradient
          colors={["#6842FF", "#896BFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.box}
        >
          {label === "Male" && <MaleIcons />}
          {label === "Female" && <FemaleIcons />}
          <TextItem type="h4" style={styles.label}>
            {label}
          </TextItem>
        </LinearGradient>
      ) : (
        <View style={styles.box}>
          {label === "Male" && <MaleIcons />}
          {label === "Female" && <FemaleIcons />}
          <TextItem type="h4" style={styles.label}>
            {label}
          </TextItem>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default GenderButton;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: "#BDBDBD",
    borderRadius: 100,
  },
  label: {
    textAlign: "center",
    color: "#ffffff",
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 19,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

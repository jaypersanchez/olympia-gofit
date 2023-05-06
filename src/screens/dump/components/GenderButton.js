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
          style={styles.linearContainer}
        >
          <View style={styles.box}>
            {label === "Male" && <MaleIcons size={32} />}
            {label === "Female" && <FemaleIcons size={32} />}
            <TextItem type="h4" style={styles.label}>
              {label}
            </TextItem>
          </View>
        </LinearGradient>
      ) : (
        <View style={styles.box}>
          {label === "Male" && <MaleIcons size={32} />}
          {label === "Female" && <FemaleIcons size={32} />}
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
    height: 80,
    backgroundColor: "#BDBDBD",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  label: {
    textAlign: "center",
    color: "#ffffff",
  },
  box: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  linearContainer: {
    width: 200,
    height: 80,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 8,
  },
});

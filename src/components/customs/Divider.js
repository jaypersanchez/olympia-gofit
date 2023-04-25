import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextItem from "./TextItem";

const Divider = ({ label, style }) => {
  return (
    <View style={styles.divider}>
      <TextItem type="body_l" font="semibold" style={styles.dividerText}>
        {label}
      </TextItem>
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    position: "relative",
    alignItems: "center",
    marginVertical: 42,
    width: "90%",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  dividerText: {
    position: "absolute",
    left: "45%",
    top: -12,
    backgroundColor: "white",
    width: 40,
    textAlign: "center",
  },
});

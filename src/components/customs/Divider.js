import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextItem from "./TextItem";

const Divider = ({ label, color }) => {
  return (
    <View style={styles.divider}>
      <View style={{ ...styles.line, backgroundColor: color }} />
      <View style={styles.textContainer}>
        <TextItem type="body_xl" font="semibold" style={{ color: "#616161" }}>
          {label}
        </TextItem>
      </View>
      <View style={{ ...styles.line, backgroundColor: color }} />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  line: {
    flex: 1,
    width: "100%",
    height: 1,
  },
  textContainer: {
    marginHorizontal: 16,
  },
});

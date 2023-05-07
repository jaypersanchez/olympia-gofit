import { StyleSheet, Text, View } from "react-native";
import React from "react";

import TextItem from "../../../components/customs/TextItem";

const Streak = () => {
  return (
    <View style={styles.container}>
      <TextItem type="h4" font="bold" style={{ color: "#212121" }}>
        Streak
      </TextItem>
      <View
        style={{
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "space-between",
        }}
      >
        <TextItem
          type="h5"
          font="bold"
          style={{ textAlign: "center", color: "#212121" }}
        >
          3:39 PM
        </TextItem>

        <TextItem
          type="h5"
          font="bold"
          style={{ textAlign: "center", color: "#212121" }}
        >
          September 31
        </TextItem>
      </View>
    </View>
  );
};

export default Streak;

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#6842FF",
    flex: 1,
    justifyContent: "center",
    gap: 8,
  },
});

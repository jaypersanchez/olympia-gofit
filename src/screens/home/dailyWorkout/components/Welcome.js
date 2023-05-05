import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Avatar from "../../../../../assets/icons/Avatar.svg";
const Welcome = ({ name }) => {
  return (
    <View style={styles.container}>
      <Avatar />
      <Text style={styles.text}>Hi, {name}!</Text>
    </View>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 12,
    fontSize: 32,
    fontWeight: "bold",
    color: "#212121",
    textAlign: "center",
    justifyContent: "center",
  },
});

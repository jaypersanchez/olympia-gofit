import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import TextItem from "../../../../components/customs/TextItem";

const SiginButton = ({ title, onPress, color, icon }) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          },
        ]}
        onPress={onPress}
      >
        {icon}
        <TextItem style={styles.buttonText} type="h6" font="semibold">
          {title}
        </TextItem>
      </TouchableOpacity>
    </View>
  );
};

export default SiginButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    width: 350,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  buttonText: {
    fontSize: 16,
    color: "black",
    fontWeight: 600,
  },
});

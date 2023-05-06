import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CheckIcon from "../../../../assets/icons/CheckIcon.svg";
import FilledBoxIcon from "../../../../assets/icons/FilledBoxIcon.svg";
import { BoxIcon } from "../../../components/Icons";

const CheckBox = ({ isChecked, onPress }) => {
  const handlePress = () => {
    onPress && onPress(!isChecked);
  };

  const handleCheckboxPress = (event) => {
    event.stopPropagation();
    handlePress();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handlePress}
          style={styles.checkboxContainer}
        >
          {isChecked && (
            <View style={styles.filledBoxIconContainer}>
              <FilledBoxIcon style={styles.filledBoxIcon} />
              <CheckIcon style={styles.checkIcon} />
            </View>
          )}
          {!isChecked && <BoxIcon size={30} color="#6842FF" />}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  checkboxContainer: {
    position: "relative",
    width: 40,
    height: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    position: "absolute",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    borderRadius: 8,
  },
  boxIcon: {
    boxSizing: "border-box",
    position: "relative",
    borderWidth: 3,
    borderRadius: 8,
  },
  filledBoxIconContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: 10,
    backgroundColor: "#6842FF",
    borderWidth: 3,
    borderColor: "#6842FF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  filledBoxIcon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
  label: {
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 22.4,
    color: "#000",
  },
});
export default CheckBox;

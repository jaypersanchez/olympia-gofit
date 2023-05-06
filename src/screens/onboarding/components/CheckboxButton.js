import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CheckIcon from "../../../../assets/icons/CheckIcon.svg";
import FilledBoxIcon from "../../../../assets/icons/FilledBoxIcon.svg";
import { BoxIcon } from "../../../components/Icons";

const Checkbox = ({ label, active, isChecked, onPress }) => {
  const handlePress = () => {
    onPress && onPress(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          active ? styles.active : styles.inactive,
          isChecked && styles.checked,
        ]}
      >
        <View style={styles.labelContainer}>
          <Text
            style={[styles.label, { color: active ? "#6842FF" : "#9E9E9E" }]}
          >
            {label}
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          {isChecked && (
            <View style={styles.filledBoxIconContainer}>
              <FilledBoxIcon style={styles.filledBoxIcon} />
              <CheckIcon style={styles.checkIcon} />
            </View>
          )}
          {!isChecked && <BoxIcon size={20} color="#BDBDBD" />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CheckboxButton = ({ data, onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectionChange = (itemIndex, isChecked) => {
    let updatedSelectedItems = [...selectedItems];
    if (isChecked) {
      updatedSelectedItems.push(itemIndex);
    } else {
      updatedSelectedItems = updatedSelectedItems.filter(
        (index) => index !== itemIndex
      );
    }
    setSelectedItems(updatedSelectedItems);
    onSelectionChange && onSelectionChange(updatedSelectedItems);
  };

  return (
    <View style={{ gap: 14 }}>
      {data.map((item, index) => (
        <Checkbox
          key={index}
          label={item.label}
          active={selectedItems.includes(index)}
          isChecked={selectedItems.includes(index)}
          onPress={(isChecked) => handleSelectionChange(index, isChecked)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "#A6A6A6",
    borderRadius: 16,
  },
  active: {
    borderColor: "#6842FF",
  },
  inactive: {
    borderColor: "#EEEEEE",
  },
  checked: {
    borderColor: "#6842FF",
  },
  labelContainer: {
    flex: 1,
  },
  checkboxContainer: {
    position: "relative",
    marginLeft: 12,
  },
  checkIcon: {
    position: "absolute",
    left: "25%",
    top: "30%",
    width: "50%",
    height: "50%",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    borderRadius: 8,
  },
  boxIcon: {
    // boxSizing: "border-box",
    // position: "relative",
    // borderWidth: 3,
    // borderColor: "#6842FF",
    // borderRadius: 8,
    stroke: "black",
    strokeWidth: 2,
  },
  label: {
    fontFamily: "Urbanist_700Bold",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22.4,
  },
});
export default CheckboxButton;

import React, { Fragment, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InnerRadioIcon from "../../../../assets/icons/InnerRadioIcon.svg";
import { RadioIcon } from "../../../components/Icons";

const Checkbox = ({
  label,
  description,
  amount,
  active,
  isChecked,
  onPress,
}) => {
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
        <View style={styles.checkboxContainer}>
          {isChecked && (
            <View style={styles.radioIconContainer}>
              <RadioIcon size={20} color="#6842FF" />
              <InnerRadioIcon style={styles.innerRadioIcon} />
            </View>
          )}
          {!isChecked && <RadioIcon size={20} color="#BDBDBD" />}
        </View>
        <View style={[styles.labelContainer]}>
          <Text
            style={[styles.label, { color: active ? "#6842FF" : "#9E9E9E" }]}
          >
            {label}
          </Text>
          <Text
            style={[
              styles.description,
              { color: active ? "#6842FF" : "#9E9E9E" },
            ]}
          >
            {description}
          </Text>
        </View>
        <Text
          style={[styles.amount, { color: active ? "#6842FF" : "#9E9E9E" }]}
        >
          {amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const RadioboxButton = ({ data, onSelectionChange }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectionChange = (itemIndex) => {
    if (selectedItem !== itemIndex) {
      setSelectedItem(itemIndex);
      onSelectionChange && onSelectionChange(itemIndex);
    }
  };

  const getContainerStyle = (index) => {
    if (index === selectedItem) {
      return styles.selectedContainer;
    } else {
      return styles.container;
    }
  };

  return (
    <View style={{ gap: 12 }}>
      {data.map((item, index) => (
        <Checkbox
          key={index}
          label={item.label}
          description={item.description}
          amount={item.amount}
          active={selectedItem === index}
          isChecked={selectedItem === index}
          onPress={() => handleSelectionChange(index)}
          style={getContainerStyle(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "#A6A6A6",
    borderRadius: 16,
  },
  active: {
    borderWidth: 2,
    borderColor: "#6842FF",
    backgroundColor: "#F0ECFF",
  },
  inactive: {
    borderColor: "#EEEEEE",
  },
  checkboxContainer: {
    position: "relative",
    marginRight: 12,
  },
  radioIconContainer: {
    position: "relative",
    borderWidth: 2,
    borderColor: "#6842FF",
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  radioIcon: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  innerRadioIcon: {
    position: "absolute",
    width: "50%",
    height: "50%",
  },
  label: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 16,
    lineHeight: 22.4,
  },
  description: {
    fontFamily: "Urbanist_400Regular",
    fontSize: 12,
    lineHeight: 16.8,
    color: "#616161",
    marginTop: 2,
  },
  amount: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 16,
    lineHeight: 22.4,
    color: "#212121",
    marginLeft: "auto",
  },
});
export default RadioboxButton;

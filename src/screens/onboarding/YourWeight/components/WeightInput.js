import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TextItem from "../../../../components/customs/TextItem";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

const WeightInput = ({ setWeight }) => {
  const [isFocused, setIsFocused] = useState();
  const [weightType, setWeightType] = useState("kg");

  const handleInputChange = (value) => {
    if (weightType) {
      setWeight((prev) => ({ ...prev, value }));
    } else {
      setWeight({ value });
    }
  };

  useEffect(() => {
    if (weightType) {
      setWeight((prev) => ({ ...prev, type: weightType }));
    }
  }, [weightType]);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: isFocused ? "#6842FF" : "#EEEEEE",
            backgroundColor: isFocused ? "rgba(104, 66, 255, 0.08)" : "#EEEEEE",
          },
        ]}
      >
        <TextInput
          placeholder="00"
          placeholderTextColor="#E0E0E0"
          style={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          keyboardType="numeric"
          onChangeText={handleInputChange}
        />
      </View>
      <View style={styles.switchBtn}>
        <TouchableOpacity
          style={[
            styles.btn,
            {
              borderBottomLeftRadius: 10,
              borderColor: weightType === "kg" ? "#6842FF" : "#F0ECFF",
            },
          ]}
          activeOpacity={0.75}
          onPress={() => setWeightType("kg")}
        >
          <TextItem
            type="body_xl"
            font="bold"
            style={[
              styles.btnText,
              { color: weightType === "kg" ? "#6842FF" : "#9E9E9E" },
            ]}
          >
            KG
          </TextItem>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            {
              borderBottomRightRadius: 10,
              borderColor: weightType === "lbs" ? "#6842FF" : "#F0ECFF",
            },
          ]}
          activeOpacity={0.75}
          onPress={() => setWeightType("lbs")}
        >
          <TextItem
            type="body_xl"
            font="bold"
            style={[
              styles.btnText,
              { color: weightType === "lbs" ? "#6842FF" : "#9E9E9E" },
            ]}
          >
            LBS
          </TextItem>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WeightInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    width: "100%",
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: "50%",
    height: "100%",
    justifyContent: "center",
    borderBottomWidth: 2,
  },
  btnText: {
    textAlign: "center",
  },
  switchBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0ECFF",
    borderRadius: 10,
    height: 60,
  },
  input: {
    paddingHorizontal: 6,
    fontSize: 24,
    lineHeight: 28.8,
    fontFamily: "Urbanist_700Bold",
    textAlign: "center",
    width: "100%",
  },
  inputContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 2,
    borderRadius: 10,
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});

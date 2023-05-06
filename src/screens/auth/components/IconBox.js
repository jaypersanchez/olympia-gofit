import { View } from "react-native";
import React from "react";

const IconBox = ({ icon }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 16,
        borderColor: "#EEEEEE",
        borderWidth: 1,
      }}
    >
      {icon}
    </View>
  );
};

export default IconBox;

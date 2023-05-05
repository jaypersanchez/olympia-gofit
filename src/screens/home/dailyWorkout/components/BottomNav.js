import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import HomeNavIcon from "../../../../../assets/icons/HomeNavIcon.svg";
import ChartNavIcon from "../../../../../assets/icons/ChartNavIcon.svg";
import WalkNavIcon from "../../../../../assets/icons/WalkNavIcon.svg";
import DumbellNavIcon from "../../../../../assets/icons/DumbellNavIcon.svg";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const getButtonTextColor = (tab) => {
    return activeTab === tab ? "#6842FF" : "#A8A8A8";
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleTabPress("home")}
      >
        <HomeNavIcon
          width={24}
          height={24}
          fill={activeTab === "home" ? "#6842FF" : "#A8A8A8"}
        />
        <Text style={{ color: getButtonTextColor("home") }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleTabPress("workout")}
      >
        <DumbellNavIcon
          width={24}
          height={24}
          fill={activeTab === "workout" ? "#6842FF" : "#A8A8A8"}
        />
        <Text style={{ color: getButtonTextColor("workout") }}>Workout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleTabPress("stepCounter")}
      >
        <WalkNavIcon
          width={24}
          height={24}
          fill={activeTab === "stepCounter" ? "#6842FF" : "#A8A8A8"}
        />
        <Text style={{ color: getButtonTextColor("stepCounter") }}>
          Step Counter
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleTabPress("stats")}
      >
        <ChartNavIcon
          width={24}
          height={24}
          fill={activeTab === "stats" ? "#6842FF" : "#A8A8A8"}
        />
        <Text style={{ color: getButtonTextColor("stats") }}>Stats</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 65,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 12,
  },
  button: {
    alignItems: "center",
  },
});
export default BottomNav;

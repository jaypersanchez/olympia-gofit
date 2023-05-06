import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeIcon,
  WorkoutIcon,
  WalkIcon,
  ChartIcon,
} from "../components/Icons";

import Home from "../screens/home/Home";

const Nav = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Nav.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        gestureEnabled: true,
        animation: "fade",
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let IconName;
          let color;
          let lableName;
          if (route.name === "Home") {
            IconName = HomeIcon;
            color = focused ? "#6842FF" : "#A8A8A8";
            lableName = "Home";
          } else if (route.name === "Workout") {
            IconName = WorkoutIcon;
            color = focused ? "#6842FF" : "#A8A8A8";
            lableName = "Workout";
          } else if (route.name === "Steps") {
            IconName = WalkIcon;
            color = focused ? "#6842FF" : "#A8A8A8";
            lableName = "Step Counter";
          } else if (route.name === "Stats") {
            IconName = ChartIcon;
            color = focused ? "#6842FF" : "#A8A8A8";
            lableName = "Stats";
          }
          return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderTopWidth: 0,
                borderTopColor: "transparent",
              }}
            >
              <IconName size={24} color={color} />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "700",
                  color: color,
                  marginTop: 2,
                }}
              >
                {lableName}
              </Text>
            </View>
          );
        },
      })}
      initialRouteName="Home"
    >
      <Nav.Screen name="Home" component={Home} />
      <Nav.Screen name="Workout" component={Home} />
      <Nav.Screen name="Steps" component={Home} />
      <Nav.Screen name="Stats" component={Home} />
    </Nav.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 65,
    borderTopWidth: 0,
    borderTopColor: "transparent",
    backgroundColor: "#ffffff",
    elevation: 0,
  },
});

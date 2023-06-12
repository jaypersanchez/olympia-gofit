import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  WorkoutIcon,
  WalkIcon,
  ChartIcon,
  SearchIcon,
  HomeFilledIcon,
  HomeOutlineIcon,
} from "../components/Icons";
import Logo from "../../assets/image/FitSpace-black.png";

import Home from "../screens/home/Home";
import ShowExcercise from "./ShowExercise";

const Nav = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Nav.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        gestureEnabled: true,
        animation: "fade",
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let IconName;
          let color;
          let lableName;
          if (route.name === "Home") {
            IconName = focused ? HomeFilledIcon : HomeOutlineIcon;
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
              <Text style={[styles.label, { color: color }]}>{lableName}</Text>
            </View>
          );
        },
      })}
      initialRouteName="Home"
    >
      <Nav.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => null,
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <View style={styles.logoContainer}>
                <Image source={Logo} style={styles.logo} />
              </View>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                activeOpacity={0.65}
                style={{ marginTop: 12, marginRight: 24 }}
                onPress={() => console.log("Search is Clicked")}
              >
                <SearchIcon color="#212121" size={24} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Nav.Screen name="Workout" component={ShowExcercise} />
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
  label: {
    fontSize: 12,
    fontWeight: "700",
    marginTop: 2,
  },
  logoContainer: {
    width: 150,
    height: 175,
    flex: 1,
    marginTop: 12,
    marginLeft: 14,
  },
  logo: {
    height: "65%",
    width: "65%",
    alignSelf: "flex-start",
    flex: 1,
  },
});

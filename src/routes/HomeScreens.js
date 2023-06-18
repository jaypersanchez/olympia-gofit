import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

const Page = createNativeStackNavigator();

import Home from "../screens/home/Home";
import Workouts from "../screens/home/workouts/Workouts";
import { SearchIcon } from "../components/Icons";

const HomeScreens = () => {
  return (
    <Page.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: "fade",
      }}
      initialRouteName="Home"
    >
      <Page.Screen name="Home" component={Home} />
      <Page.Screen
        name="Workouts"
        component={Workouts}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        }}
      />
    </Page.Navigator>
  );
};

export default HomeScreens;

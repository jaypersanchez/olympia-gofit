import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/introduction/Welcome/Welcome";

const Page = createNativeStackNavigator();

const Introduction = () => {
  return (
    <Page.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        animation: "fade_from_bottom",
      }}
      initialRouteName="Welome"
    >
      <Page.Screen name="Welcome" component={Welcome} />
    </Page.Navigator>
  );
};

export default Introduction;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Introduction from "./src/routes/Introduction";
import Onboarding from "./src/routes/Onboarding";
import Auth from "./src/routes/Auth";
import BottomNav from "./src/routes/BottomNav";

const Page = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Page.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: "fade",
      }}
      initialRouteName="Introduction"
    >
      <Page.Screen name="Introduction" component={Introduction} />
      <Page.Screen name="Auth" component={Auth} />
      <Page.Screen name="Onboarding" component={Onboarding} />
      <Page.Screen name="BottomNav" component={BottomNav} />
    </Page.Navigator>
  );
};

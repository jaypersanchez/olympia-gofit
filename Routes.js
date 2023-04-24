import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import WelcomeScreen from "./src/screens/onboarding/WelcomeScreen";
import IntroScreen from "./src/screens/onboarding/IntroScreen";
import AboutYourself from "./src/screens/accountSetup/AboutYourself";

const Page = createNativeStackNavigator();

const Onboarding = () => {
  return (
    <Page.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welome"
    >
      <Page.Screen name="Welcome" component={WelcomeScreen} />
      <Page.Screen name="Intro" component={IntroScreen} />
    </Page.Navigator>
  );
};

const AccountSetup = () => {
  return (
    <Page.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AboutYourself"
    >
      <Page.Screen name="AboutYourself" component={AboutYourself} />
    </Page.Navigator>
  );
};

export const Routes = () => {
  return (
    <Page.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Onboarding"
    >
      <Page.Screen name="Onboarding" component={Onboarding} />
      <Page.Screen name="AccountSetup" component={AccountSetup} />
    </Page.Navigator>
  );
};

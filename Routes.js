import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import WelcomeScreen from "./src/screens/onboarding/WelcomeScreen";
import IntroScreen from "./src/screens/onboarding/IntroScreen";

import AboutYourself from "./src/screens/accountSetup/AboutYourself";
import YourAge from "./src/screens/accountSetup/YourAge";
import YourHeight from "./src/screens/accountSetup/YourHeight";
import YourWeight from "./src/screens/accountSetup/YourWeight";
import YourGoal from "./src/screens/accountSetup/YourGoal";
import ActivityLevel from "./src/screens/accountSetup/ActivityLevel";
import YourProfile from "./src/screens/accountSetup/YourProfile";

import EntryScreen from "./src/screens/Entry/EntryScreen";
import SignUpScreen from "./src/screens/Entry/signUp/SignUpScreen";
import SignInScreen from "./src/screens/Entry/signIn/SignInScreen";

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
      initialRouteName="About You"
    >
      <Page.Screen name="About You" component={AboutYourself} />
      <Page.Screen name="Age" component={YourAge} />
      <Page.Screen name="Weight" component={YourWeight} />
      <Page.Screen name="Height" component={YourHeight} />
      <Page.Screen name="Goal" component={YourGoal} />
      <Page.Screen name="Actvity Level" component={ActivityLevel} />
      <Page.Screen name="Profile" component={YourProfile} />
    </Page.Navigator>
  );
};

const Auth = () => {
  return (
    <Page.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Entry"
    >
      <Page.Screen name="Entry" component={EntryScreen} />
      <Page.Screen name="Signin" component={SignInScreen} />
      <Page.Screen name="Signup" component={SignUpScreen} />
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
      <Page.Screen name="Auth" component={Auth} />
    </Page.Navigator>
  );
};

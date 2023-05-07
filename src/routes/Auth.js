import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BackIcon } from "../components/Icons";

import WelcomeAuth from "../screens/auth/WelcomeAuth/WelcomeAuth";
import Signup from "../screens/auth/Signup/Signup";
import Login from "../screens/auth/Login/Login";

const Page = createNativeStackNavigator();

const Auth = () => {
  const navigation = useNavigation();
  return (
    <Page.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        animation: "slide_from_right",
      }}
      initialRouteName="Entry"
    >
      <Page.Screen name="WelcomeAuth" component={WelcomeAuth} />
      <Page.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: true,
          headerTitle: () => null,
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation?.navigate("WelcomeAuth")}
                style={{ marginLeft: 2 }}
              >
                <BackIcon color="#212121" size={28} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Page.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerTitle: () => null,
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation?.navigate("WelcomeAuth")}
                style={{ marginLeft: 2 }}
              >
                <BackIcon color="#212121" size={28} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Page.Navigator>
  );
};

export default Auth;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import WelcomeScreen from './src/screens/onboarding/WelcomeScreen';
// import IntroScreen from "./src/screens/onboarding/IntroScreen";

import AboutYourself from './src/screens/accountSetup/AboutYourself';
import YourAge from './src/screens/accountSetup/YourAge';
import YourHeight from './src/screens/accountSetup/YourHeight';
import YourWeight from './src/screens/accountSetup/YourWeight';
import YourGoal from './src/screens/accountSetup/YourGoal';
import ActivityLevel from './src/screens/accountSetup/ActivityLevel';
import YourProfile from './src/screens/accountSetup/YourProfile';
import YourExperience from './src/screens/accountSetup/YourExperience';
import YourWeightTraining from './src/screens/accountSetup/YourWeightTraining';
import EntryScreen from './src/screens/Entry/EntryScreen';
import SignUpScreen from './src/screens/Entry/signUp/SignUpScreen_v1';
import SignInScreen from './src/screens/Entry/signIn/SignInScreen';
import SignUp from './src/screens/Entry/signUp/SignUp';
import { Text, TouchableOpacity } from 'react-native';
import { BackIcon } from './src/components/Icons';
import YourLocation from './src/screens/accountSetup/YourLocation';
import YourProgram from './src/screens/accountSetup/YourProgram';
import GetStarted from './src/screens/accountSetup/GetStarted';
import DailyWorkout from './src/screens/home/dailyWorkout/DailyWorkout';

const Page = createNativeStackNavigator();

const Onboarding = () => {
  return (
    <Page.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welome"
    >
      <Page.Screen name="Welcome" component={WelcomeScreen} />
      {/* <Page.Screen name="Intro" component={IntroScreen} /> */}
    </Page.Navigator>
  );
};

const AccountSetup = () => {
  return (
    <Page.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AboutYou"
    >
      <Page.Screen name="AboutYou" component={AboutYourself} />
      <Page.Screen name="Age" component={YourAge} />
      <Page.Screen name="Weight" component={YourWeight} />
      <Page.Screen name="Height" component={YourHeight} />
      <Page.Screen name="ActvityLevel" component={ActivityLevel} />
      <Page.Screen name="Profile" component={YourProfile} />
      <Page.Screen name="Experience" component={YourExperience} />
      <Page.Screen name="WeightTraining" component={YourWeightTraining} />
      <Page.Screen name="Goal" component={YourGoal} />
      <Page.Screen name="Location" component={YourLocation} />
      <Page.Screen name="Program" component={YourProgram} />
      <Page.Screen name="GetStarted" component={GetStarted} />
      <Page.Screen name="DailyWorkout" component={DailyWorkout} />
    </Page.Navigator>
  );
};

const Auth = () => {
  const navigation = useNavigation();
  return (
    <Page.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Entry"
    >
      <Page.Screen name="Entry" component={EntryScreen} />
      <Page.Screen name="Signin" component={SignInScreen} />
      <Page.Screen
        name="Signup"
        component={SignUp}
        options={{
          headerShown: true,
          headerTitle: () => null,
          headerShadowVisible: false, // applied here
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation?.navigate('Auth', { screen: 'Entry' })
                }
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

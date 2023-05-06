import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import YourGender from "../screens/onboarding/YourGender/YourGender";
import YourAge from "../screens/onboarding/YourAge/YourAge";
import YourWeight from "../screens/onboarding/YourWeight/YourWeight";
import YourHeight from "../screens/onboarding/YourHeight/YourHeight";
import WeightTraining from "../screens/onboarding/WeightTraining/WeightTraining";
import ActivityLevel from "../screens/onboarding/ActivityLevel/ActivityLevel";
import GymGoal from "../screens/onboarding/GymGoal/GymGoal";
import WorkoutPlace from "../screens/onboarding/WorkoutPlace/WorkoutPlace";
import DailyProgram from "../screens/onboarding/DailyProgram/DailyProgram";
import WorkoutPlan from "../screens/onboarding/WorkoutPlan/WorkoutPlan";

const Page = createNativeStackNavigator();

const Onboarding = () => {
  return (
    <Page.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: "fade",
      }}
      initialRouteName="Gender"
    >
      <Page.Screen name="Gender" component={YourGender} />
      <Page.Screen name="Age" component={YourAge} />
      <Page.Screen name="Weight" component={YourWeight} />
      <Page.Screen name="Height" component={YourHeight} />
      <Page.Screen name="ActivityLevel" component={ActivityLevel} />
      <Page.Screen name="WeightTraining" component={WeightTraining} />
      <Page.Screen name="GymGoal" component={GymGoal} />
      <Page.Screen name="WorkoutPlace" component={WorkoutPlace} />
      <Page.Screen name="DailyProgram" component={DailyProgram} />
      <Page.Screen
        name="WorkoutPlan"
        component={WorkoutPlan}
        options={{
          headerShown: true,
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />
      {/* <Page.Screen name="PaymentPlan" component={YourPaymentPlan} /> */}
      {/* <Page.Screen name="DailyWorkout" component={DailyWorkout} /> */}
      {/* <Page.Screen name="ActvityLevel" component={ActivityLevel} /> */}
      {/* <Page.Screen name="Profile" component={YourProfile} /> */}
    </Page.Navigator>
  );
};

export default Onboarding;

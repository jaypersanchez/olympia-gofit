import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
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
import HomeScreens from "./HomeScreens";
import Workouts from "../screens/home/workouts/Workouts";

const Nav = createBottomTabNavigator();

const BottomNav = () => {
  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

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
          if (route.name === "HomeScreens") {
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
        name="HomeScreens"
        component={HomeScreens}
        options={({ navigation, route }) => {
          const showHomeNav =
            route.params === undefined || route.params?.screen === "Home";
          console.log({ showHomeNav, route: route.params });
          return {
            headerTitle: () => null,
            headerShown: showHomeNav ? true : false,
            headerShadowVisible: false,
            ...(showHomeNav ? {} : { tabBarStyle: { display: "none" } }),
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
            tabBarButton: (props) => (
              <TouchableOpacity
                activeOpacity={0.95}
                onPress={() =>
                  navigation?.navigate("HomeScreens", { screen: "Home" })
                }
                style={[styles.btn]}
              >
                {props.children}
              </TouchableOpacity>
            ),
          };
        }}
      />
      <Nav.Screen name="Workout" component={Workouts} />
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
  btn: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

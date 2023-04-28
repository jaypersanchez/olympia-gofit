import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Urbanist_100Thin,
  Urbanist_200ExtraLight,
  Urbanist_300Light,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
  Urbanist_800ExtraBold,
  Urbanist_900Black,
  Urbanist_100Thin_Italic,
  Urbanist_200ExtraLight_Italic,
  Urbanist_300Light_Italic,
  Urbanist_400Regular_Italic,
  Urbanist_500Medium_Italic,
  Urbanist_600SemiBold_Italic,
  Urbanist_700Bold_Italic,
  Urbanist_800ExtraBold_Italic,
  Urbanist_900Black_Italic,
} from "@expo-google-fonts/urbanist";

import SplashScreen from "./src/screens/onboarding/SplashScreen";
import { Routes } from "./Routes";
import { SafeAreaView } from "react-native";

export default function App() {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);
  const [fontsLoaded] = useFonts({
    Urbanist_100Thin,
    Urbanist_200ExtraLight,
    Urbanist_300Light,
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
    Urbanist_800ExtraBold,
    Urbanist_900Black,
    Urbanist_100Thin_Italic,
    Urbanist_200ExtraLight_Italic,
    Urbanist_300Light_Italic,
    Urbanist_400Regular_Italic,
    Urbanist_500Medium_Italic,
    Urbanist_600SemiBold_Italic,
    Urbanist_700Bold_Italic,
    Urbanist_800ExtraBold_Italic,
    Urbanist_900Black_Italic,
  });

  useEffect(() => {
    setTimeout(() => {
      if (fontsLoaded) {
        console.log("loaded");
        setIsSplashScreenVisible(false);
      } else {
        console.log("loaded failed");
        setIsSplashScreenVisible(true);
      }
    }, 2000);
  }, [fontsLoaded]);

  if (isSplashScreenVisible) {
    return <SplashScreen />;
  } else {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  }
}

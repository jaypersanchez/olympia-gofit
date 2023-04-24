import {
  Alert,
  BackHandler,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeScreen = ({ navigation }) => {
  const handleScreenTouch = () => {
    navigation?.navigate("Onboarding", { screen: "Intro" });
  };

  useFocusEffect(
    useCallback(() => {
      const nextScreen = setTimeout(() => {
        navigation?.navigate("Onboarding", { screen: "Intro" });
      }, 4000);

      return () => clearTimeout(nextScreen);
    }, [])
  );

  return (
    <TouchableHighlight style={styles.container} onPress={handleScreenTouch}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/image/screens/welcome.png")}
      >
        <View style={styles.textContianer}>
          <Text style={styles.headerTitle}>Welcome to 👋</Text>
          <Text style={styles.title}>Gofit</Text>
          <Text style={styles.subtitle}>
            The best fitness app in this century to accompany your sports.
          </Text>
        </View>
        <LinearGradient
          colors={["transparent", "#2C2C2C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.8 }}
          style={styles.mask}
        />
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mask: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 550,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "flex-start",
    position: "relative",
  },
  textContianer: {
    position: "relative",
    marginLeft: 34,
    marginBottom: 52,
    width: 332,
    zIndex: 25,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 48,
    lineHeight: 52.8,
    marginBottom: 12,
    fontFamily: "Urbanist_700Bold",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 96,
    lineHeight: 105.6,
    marginBottom: 24,
    fontFamily: "Urbanist_900Black",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 25.2,
    fontFamily: "Urbanist_600SemiBold",
  },
});

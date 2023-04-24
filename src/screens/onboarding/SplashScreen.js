import { Animated, Easing, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const rotate = () => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  };

  useEffect(() => {
    rotate();
  }, []);

  const rotateAnimStyle = {
    transform: [
      {
        rotate: rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  return (
    <LinearGradient
      colors={["#6842FF", "#896BFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Image
        source={require("../../../assets/image/Gofit-icon.png")}
        style={{ width: 200, height: 100 }}
      />
      <View style={styles.spinnerContianer}>
        <Animated.Image
          source={require("../../../assets/image/spinner.png")}
          style={[rotateAnimStyle, styles.spinner]}
        />
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    height: 45,
    width: 45,
  },
  spinnerContianer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 115,
    alignItems: "center",
  },
});

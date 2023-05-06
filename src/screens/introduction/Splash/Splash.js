import { Animated, Easing, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import Logo from "../../../../assets/image/FitSpace-black.png";
import Spinner from "../../../../assets/image/spinner.png";

const Splash = () => {
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
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.spinnerContianer}>
        <Animated.Image
          source={Spinner}
          style={[rotateAnimStyle, styles.spinner]}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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
  logoContainer: { width: "100%", height: 175 },
  logo: { width: "65%", height: "65%", alignSelf: "center", flex: 1 },
});

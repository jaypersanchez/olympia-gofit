import { Image, ImageBackground, StyleSheet, View } from "react-native";
import React, { useEffect, useReducer } from "react";

import Stepper from "./components/Stepper";
import Button from "../../components/customs/Button";
import TextItem from "../../components/customs/TextItem";
import { LinearGradient } from "expo-linear-gradient";

const IntroScreen = ({ navigation }) => {
  const data = [
    {
      step: 0,
      img: require("../../../assets/image/screens/intro_one.png"),
      title: "Find the right workout for what you need",
    },
    {
      step: 1,
      img: require("../../../assets/image/screens/intro_two.png"),
      title: "Make suitable workouts and great results",
    },
    {
      step: 2,
      img: require("../../../assets/image/screens/intro_three.png"),
      title: "Let's do a workout and live healthy with us",
    },
  ];

  const [step, setSteps] = useReducer(
    (state, newState) => {
      const nextStep = state.active + newState.active;
      if (nextStep < 0 || nextStep > data.length - 1) {
        return state;
      }
      return { ...state, ...newState, active: nextStep };
    },
    {
      active: 0,
    }
  );

  useEffect(() => {
    if (step.active !== data.length - 1) {
      const nextScreen = setTimeout(() => {
        setSteps({ active: 1 });
      }, 5000);

      return () => clearTimeout(nextScreen);
    } else if (step.active === data.length - 1) {
      const nextScreen = setTimeout(() => {
        setSteps({ active: -2 });
      }, 5000);

      return () => clearTimeout(nextScreen);
    }
  }, [step.active]);

  const handleNextButton = () => {
    if (step.active !== data.length - 1) {
      setSteps({ active: 1 });
    } else {
      navigation?.navigate("AccountSetup");
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "#fff"]}
        start={{ x: 0.45, y: 0.45 }}
        end={{ x: 0.45, y: 0.01 }}
        style={styles.gradient}
      />
      <Image source={data[step?.active]?.img} style={styles.image} />
      <View style={styles.box}>
        <TextItem type="h2" style={styles.title}>
          {data[step?.active]?.title}
        </TextItem>
        <Stepper length={data.length} step={step?.active} />
        <Button
          label="Next"
          style={{ width: "100%" }}
          onPress={handleNextButton}
        />
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  box: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 48,
    flex: 1,
    width: "100%",
    gap: 48,
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 30,
  },
  title: {
    color: "#212121",
    textAlign: "center",
  },
  mask: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 552,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 552,
    zIndex: 5,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 552,
    zIndex: 10,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
});

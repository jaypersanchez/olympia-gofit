import { StyleSheet, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";

import TextItem from "../../components/customs/TextItem";
import images from "./components/images";

import Banner from "./components/Banner";
import ExcerciseCard from "./components/ExcerciseCard";
import Streak from "./components/Streak";
import { useDispatch, useSelector } from "react-redux";
import { updateWorkoutList } from "../../components/redux/slices/useWorkoutList";

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.onboardingForm);

  const handleName = (name) => {
    return name?.charAt(0).toUpperCase() + name?.slice(1);
  };

  const onCardsClick = (item) => {
    console.log({ item });
    dispatch(updateWorkoutList(item));
    navigation.navigate("HomeScreens", { screen: "Workouts", data: item });
  };

  useLayoutEffect(() => {
    if (!user_data) {
      navigation.navigate("Auth", { screen: "Login" });
    }
  }, [user_data]);

  console.log("dailyexcercise", { datda: user_data.data.name });

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            gap: 24,
            justifyContent: "center",
            paddingBottom: 30,
          }}
          decelerationRate="normal"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <TextItem type="h3">
            {"Welcome, "}
            {handleName(user_data?.data?.name)}!
          </TextItem>
          <Banner week={1} day={12} excercise={"Dead Lift 3 sets of 8 reps"} />
          <TextItem type="h5">Daily Excercise</TextItem>
          <View style={{ gap: 16 }}>
            {user_data.workoutPlans?.workouts?.map((item, i) => (
              <ExcerciseCard
                key={item._id}
                day={item.day}
                image={images.data[i].image}
                excercise={item.workoutType}
                onPress={() => onCardsClick(item.exercises)}
              />
            ))}
          </View>

          <Streak />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 24,
  },
});

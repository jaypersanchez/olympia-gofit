import { StyleSheet, ScrollView, View } from "react-native";
import React, { useState } from "react";

import TextItem from "../../components/customs/TextItem";
import { dailyexercise } from "./components/dailyexercise";

import Banner from "./components/Banner";
import ExcerciseCard from "./components/ExcerciseCard";
import Streak from "./components/Streak";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkoutList } from "../../components/redux/slices/useWorkoutList";

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.onboarding);
  const { data } = dailyexercise || [];

  const handleName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const onCardsClick = (item) => {
    console.log({ item });
    dispatch(fetchWorkoutList(item.filter));
    navigation.navigate("HomeScreens", { screen: "Workouts" });
  };

  // console.log("dailyexcercise", datad);

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
            {handleName(user_data.name)}!
          </TextItem>
          <Banner week={1} day={12} excercise={"Dead Lift 3 sets of 8 reps"} />
          <TextItem type="h5">Daily Excercise</TextItem>
          <View style={{ gap: 16 }}>
            {data.slice(0, user_data.frequency).map((item) => (
              <ExcerciseCard
                key={item.id}
                day={item.day}
                excercise={item.name}
                img={item.image}
                onPress={() => onCardsClick(item)}
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

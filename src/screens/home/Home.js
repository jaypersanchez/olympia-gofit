import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";

import TextItem from "../../components/customs/TextItem";
import { dailyexercise } from "./components/dailyexercise";

import Banner from "./components/Banner";
import ExcerciseCard from "./components/ExcerciseCard";
import Streak from "./components/Streak";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { BackHandler } from "react-native";

const Home = ({ navigation, route }) => {
  const user_data = useSelector((state) => state.onboarding);
  const { data } = dailyexercise || [];

  console.log("dailyexcercise", data.slice());
  return (
    <View style={styles.container}>
      <View style={{ gap: 24, width: "100%" }}>
        <TextItem type="h3">
          {"Welcome, "}
          {handleName(user_data.name)}!
        </TextItem>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            gap: 24,
            justifyContent: "center",
            paddingBottom: 30,
          }}
          decelerationRate="normal"
          showsVerticalScrollIndicator={false}
        >
          <Banner week={1} day={12} excercise={"Dead Lift 3 sets of 8 reps"} />
          <TextItem type="h5">Daily Excercise</TextItem>
          <View style={{ gap: 16 }}>
            {data.slice(0, user_data.frequency).map((item) => (
              <ExcerciseCard
                key={item.id}
                day={item.day}
                excercise={item.name}
                img={item.image}
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
    paddingBottom: 48,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
});

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
} from "react-native";
import React, { useState, useLayoutEffect, useEffect } from "react";
import { useSelector } from "react-redux";
import CheckBox from "../../onboarding/components/Checkbox";
import Button from "../../../components/customs/Button";
import TextItem from "../../../components/customs/TextItem";
import { dailyexercise } from "../components/dailyexercise";
import ExcerciseCard from "../components/ExcerciseCard";
import img4a from "../../../../assets/image/excercise/001.jpg";
import HeaderExcercise from "../components/HeaderExcercise";
import WortkoutCard from "../components/WortkoutCard";

const Workouts = ({ navigation, route }) => {
  const user_data = useSelector((state) => state.onboarding);
  const { loading, error, workoutList } = useSelector(
    (state) => state.dailyWorkouts
  );
  const [dailyExercise, setDailyExcercise] = useState([]);

  useLayoutEffect(() => {
    return () => {
      navigation.navigate("HomeScreens", { screen: "Home" });
    };
  }, []);

  const handleSelectedExercise = (item) => {
    const itemIndex = dailyExercise.findIndex(
      (exercise) => exercise._id === item._id
    );

    if (itemIndex === -1) {
      setDailyExcercise((prev) => [...prev, item]);
    } else {
      const updatedExercises = [...dailyExercise];
      updatedExercises.splice(itemIndex, 1);
      setDailyExcercise(updatedExercises);
    }
  };

  console.log({ dailyExercise, user_data });

  // const handleScrollBegin = () => {
  //   console.log("Scrolling started");
  //   navigation.setOptions({
  //     headerShown: false, // Hide the header
  //   });
  // };

  // const handleScrollEnd = () => {
  //   console.log("Scrolling stopped");
  //   navigation.setOptions({
  //     headerShown: true, // Hide the header
  //   });
  // };

  return (
    <View style={styles.container}>
      <HeaderExcercise
        title="Day 1 Workouts"
        subtitle="Beginner"
        selected={
          dailyExercise.length !== 0
            ? `Selected ${dailyExercise.length} workouts`
            : ""
        }
      />
      <View style={styles.header}>
        <TextItem type="h4">Workout Activity</TextItem>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingBottom: 6,
        }}
        decelerationRate="normal"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        // onScrollBeginDrag={handleScrollBegin}
        // onScrollEndDrag={handleScrollEnd}
      >
        <View style={styles.box}>
          <View style={{ gap: 16 }}>
            {workoutList.data.map((item) => (
              <WortkoutCard
                key={item._id}
                title={item.name.toUpperCase()}
                excercise={item.category.toUpperCase()}
                img={img4a}
                onPress={() => handleSelectedExercise(item)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <Button
          label="Set Workouts"
          style={{ width: "100%" }}
          disabled={dailyExercise.length === 0}
        />
      </View>
    </View>
  );
};

export default Workouts;

const styles = StyleSheet.create({
  container: { flex: 1 },
  imgContainer: {
    height: 300,
    borderRadius: 24,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 12,
    flex: 1,
    gap: 12,
    width: "100%",
    flexDirection: "column",
  },
  btn: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexGrow: 1,
  },
});

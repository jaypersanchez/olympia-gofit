import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
} from "react-native";
import React, { useState, useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../../onboarding/components/Checkbox";
import Button from "../../../components/customs/Button";
import TextItem from "../../../components/customs/TextItem";
import ExcerciseCard from "../components/ExcerciseCard";
import images from "../components/images";
import img4a from "../../../../assets/image/excercise/001.jpg";
import HeaderExcercise from "../components/HeaderExcercise";
import WortkoutCard from "../components/WortkoutCard";
import { resetWorkoutList } from "../../../components/redux/slices/useWorkoutList";

const Workouts = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.onboardingForm);
  const dailyWorkouts = useSelector((state) => state.dailyWorkouts);
  const [dailyExercise, setDailyExcercise] = useState([]);

  const getRandomImage = (images) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  useLayoutEffect(() => {
    return () => {
      navigation.navigate("HomeScreens", { screen: "Home" });
      dispatch(resetWorkoutList());
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

  console.log({ user_data, dailyWorkouts });

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
      <HeaderExcercise title="Day 1 Workouts" subtitle="Beginner" />
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
            {dailyWorkouts.map((item, i) => (
              <WortkoutCard
                key={item?._id}
                title={item?.name.toUpperCase()}
                reps={item?.reps}
                sets={item?.sets}
                img={images.data[i].image}
                onPress={() => handleSelectedExercise(item)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Workouts;

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 24 },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
});

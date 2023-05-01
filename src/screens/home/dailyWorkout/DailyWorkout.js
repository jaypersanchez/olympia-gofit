import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopNav from './components/TopNav';
import Welcome from './components/Welcome';
import Banner from './components/Banner';
import ExerciseList from './components/ExerciseList';
import BottomNav from './components/BottomNav';

const weeks = {
  week: 1,
  days: [
    {
      day: 1,
      exercises: [
        {
          id: 1,
          name: 'Bench Press',
          sets: 3,
          reps: 8,
          rest: 60,
        },
        // add more exercises here
      ],
    },
    {
      day: 2,
      exercises: [
        {
          id: 2,
          name: 'Dead Lift',
          sets: 3,
          reps: 8,
          rest: 60,
        },
        // add more exercises here
      ],
    },
    {
      day: 3,
      exercises: [
        {
          id: 3,
          name: 'Overhead Press',
          sets: 3,
          reps: 8,
          rest: 60,
        },
        // add more exercises here
      ],
    },
    {
      day: 4,
      exercises: [
        {
          id: 4,
          name: 'Bent-over Row',
          sets: 3,
          reps: 8,
          rest: 60,
        },
        // add more exercises here
      ],
    },
    {
      day: 5,
      exercises: [
        {
          id: 5,
          name: 'Back Squat',
          sets: 3,
          reps: 8,
          rest: 60,
        },
        // add more exercises here
      ],
    },
    {
      day: 6,
      exercises: [
        {
          id: 6,
          name: 'Pull-Up',
          sets: 3,
          reps: 8,
          rest: 60,
        },
        // add more exercises here
      ],
    },
    // add more days here
  ],
};

const getCurrentDay = (weeks) => {
  const currentDate = new Date();
  const currentWeek = weeks.week;
  const currentDay = currentDate.getDay();
  const exercises = weeks.days[currentDay - 1].exercises;
  return { currentWeek, currentDay, exercises };
};

const { currentWeek, currentDay, exercises } = getCurrentDay(weeks);

const DailyWorkout = ({ navigation }) => {
  const name = 'King';
  return (
    <SafeAreaProvider style={styles.container}>
      <TopNav></TopNav>
      <View style={styles.bottomContainer}>
        <Welcome name={name} />
        <Banner
          currentWeek={currentWeek}
          currentDay={currentDay}
          exercises={exercises}
          style={styles.banner}
        />
        <ExerciseList days={weeks.days} />
        {/* Add other components that you want to align at the bottom here */}
      </View>
      <BottomNav />
    </SafeAreaProvider>
  );
};

export default DailyWorkout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 48,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  banner: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import TopNav from './components/TopNav';
import Welcome from './components/Welcome';
import NextWorkout from './components/NextWorkout';
import WorkoutList from './components/WorkoutList';
import BottomNav from './components/BottomNav';
import { useCallback } from 'react';

const DailyWorkout = ({ navigation }) => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [selectedProgramFrequency, setSelectedProgramFrequency] = useState(5); // default to 5 days
  const name = 'King';

  const baseWorkouts = [
    {
      id: 1,
      day: 'Monday',
      target: 'Core',
      exercises: [
        {
          id: 1,
          name: 'Push-ups',
          target: 'Chest',
          reps: 4,
        },
        {
          id: 2,
          name: 'Burpees',
          target: 'Full Body',
          reps: 4,
        },
      ],
    },
    {
      id: 2,
      day: 'Tuesday',
      target: 'Lower Body',
      exercises: [
        {
          id: 3,
          name: 'Lunges',
          target: 'Legs',
          reps: 4,
        },
        {
          id: 4,
          name: 'Squats',
          target: 'Legs',
          reps: 4,
        },
      ],
    },
    {
      id: 3,
      day: 'Wednesday',
      target: 'Lower Body',
      exercises: [
        {
          id: 3,
          name: 'Lunges',
          target: 'Legs',
          reps: 4,
        },
        {
          id: 4,
          name: 'Squats',
          target: 'Legs',
          reps: 4,
        },
      ],
    },
    {
      id: 4,
      day: 'Thursday',
      target: 'Lower Body',
      exercises: [
        {
          id: 3,
          name: 'Lunges',
          target: 'Legs',
          reps: 4,
        },
        {
          id: 4,
          name: 'Squats',
          target: 'Legs',
          reps: 4,
        },
      ],
    },
    {
      id: 5,
      day: 'Friday',
      target: 'Lower Body',
      exercises: [
        {
          id: 3,
          name: 'Lunges',
          target: 'Legs',
          reps: 4,
        },
        {
          id: 4,
          name: 'Squats',
          target: 'Legs',
          reps: 4,
        },
      ],
    },
  ];
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const updatedWorkouts = baseWorkouts.slice(0, selectedProgramFrequency);
    setWorkouts(updatedWorkouts);
  }, [selectedProgramFrequency]);

  const onPressWorkout = useCallback((workout) => {
    setSelectedWorkout(workout);
  }, []);
  return (
    <SafeAreaProvider style={styles.container}>
      <TopNav></TopNav>
      <View style={styles.bottomContainer}>
        <Welcome name={name} />
        <NextWorkout
          style={styles.banner}
          programFrequency={programFrequency}
          workouts={workouts}
          selectedWorkout={selectedWorkout}
        />

        <WorkoutList
          workouts={workouts}
          onPressWorkout={onPressWorkout}
          selectedWorkout={selectedWorkout}
        />
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

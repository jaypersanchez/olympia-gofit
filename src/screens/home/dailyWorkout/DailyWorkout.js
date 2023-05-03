import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import TopNav from './components/TopNav';
import Welcome from './components/Welcome';
import NextWorkout from './components/NextWorkout';
import WorkoutList from './components/WorkoutList';
import BottomNav from './components/BottomNav';
import ExerciseList from './components/ExerciseList';

const DailyWorkout = ({ navigation }) => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const name = 'King';
  const programFrequency = useSelector((state) => state.programFrequency);
  const workouts = [
    {
      id: 1,
      day: 'Monday',
      exercises: [
        {
          id: 1,
          name: 'Push-ups',
          target: 20,
          reps: 0,
        },
        {
          id: 2,
          name: 'Squats',
          target: 15,
          reps: 0,
        },
      ],
    },
    {
      id: 2,
      day: 'Tuesday',
      exercises: [
        {
          id: 3,
          name: 'Lunges',
          target: 10,
          reps: 0,
        },
        {
          id: 4,
          name: 'Plank',
          target: 30,
          reps: 0,
        },
      ],
    },
  ];
  // const workouts = [
  //   {
  //     id: 1,
  //     exercise: { id: 1, name: 'Running' },
  //     target: 'Run 3 miles in 30 min',
  //     date: '2023-05-03',
  //   },
  //   {
  //     id: 2,
  //     exercise: { id: 2, name: 'Push-ups' },
  //     target: '3 sets of 15 reps',
  //     date: '2023-05-05',
  //   },
  //   {
  //     id: 3,
  //     exercise: { id: 3, name: 'Yoga' },
  //     target: 'Hold tree pose for 30s',
  //     date: '2023-05-08',
  //   },
  // ];
  const onPressWorkout = (workout) => {
    setSelectedWorkout(workout);
  };
  const handleBackPress = () => {
    setSelectedWorkout(null);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <TopNav></TopNav>
      <View style={styles.bottomContainer}>
        <Welcome name={name} />
        <NextWorkout
          style={styles.banner}
          programFrequency={programFrequency}
          workouts={workouts}
        />
        <WorkoutList
          workouts={workouts}
          onPressWorkout={onPressWorkout}
          selectedWorkout={selectedWorkout}
        />
        {selectedWorkout && (
          <ExerciseList
            exercises={selectedWorkout.exercises}
            handleBackPress={handleBackPress}
          />
        )}
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

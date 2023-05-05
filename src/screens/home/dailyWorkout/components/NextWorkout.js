import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WeightLifting from '../../../../../assets/WeightLifting.svg';

const NextWorkout = ({ programFrequency, workouts }) => {
  const today = new Date();
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDay = today.getDay(); // getDay() returns a value between 0-6 (0 is Sunday, 6 is Saturday)
  const filteredWorkouts = workouts.filter(
    (workout) =>
      parseInt(workout.day) >= currentDay &&
      parseInt(workout.day) <=
        currentDay + (7 - daysOfWeek.indexOf(programFrequency))
  );
  const nextWorkout = filteredWorkouts[0];
  const daysUntilNextWorkout = nextWorkout
    ? daysOfWeek.indexOf(nextWorkout.day) -
      currentDay +
      (daysOfWeek.indexOf(nextWorkout.day) <
      daysOfWeek.indexOf(programFrequency)
        ? 7
        : 0) +
      1
    : 0; // set daysUntilNextWorkout to 0 if nextWorkout is undefined

  const weeksUntilNextWorkout = Math.ceil(daysUntilNextWorkout / 7);
  console.log(daysUntilNextWorkout);
  return (
    <View style={styles.container}>
      <WeightLifting width={374} />

      <View style={styles.textContainer}>
        {nextWorkout ? (
          <View>
            <Text style={styles.nextWorkoutText}>
              Next Workout: Week {weeksUntilNextWorkout}, Day{' '}
              {daysOfWeek[(currentDay + daysUntilNextWorkout - 1) % 7]}
            </Text>
            <Text style={styles.nextWorkoutText}>
              Target: {nextWorkout.target}
            </Text>
          </View>
        ) : (
          <Text style={styles.nextWorkoutText}>No upcoming workouts</Text>
        )}
      </View>
    </View>
  );
};

export default NextWorkout;

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  nextWorkoutText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 5,
  },
  exerciseText: {
    fontSize: 162,
    color: '#fff',
    marginBottom: 12,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WeightLifting from '../../../../../assets/WeightLifting.svg';
const Banner = ({ currentWeek, currentDay, exercises }) => {
  return (
    <View style={styles.container}>
      <WeightLifting />
      <View style={styles.textContainer}>
        <Text style={styles.nextWorkoutText}>
          Next Workout: Week {currentWeek} Day {currentDay}
        </Text>
        {exercises.map((exercise) => (
          <Text style={styles.exerciseText} key={exercise.id}>
            {exercise.name} - {exercise.sets} sets of {exercise.reps} reps
          </Text>
        ))}
      </View>
    </View>
  );
};
export default Banner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
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
    fontSize: 16,
    color: '#fff',
    marginBottom: 2,
  },
});

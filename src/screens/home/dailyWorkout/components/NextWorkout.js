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
  const currentDay = daysOfWeek[today.getDay()];
  const filteredWorkouts = workouts.filter(
    (workout) => workout.date >= today.toISOString().slice(0, 10)
  );
  const nextWorkout = filteredWorkouts.find(
    (workout) => workout.date === today.toISOString().slice(0, 10)
  );
  const daysUntilNextWorkout = nextWorkout
    ? 0
    : daysOfWeek.indexOf(currentDay) <= daysOfWeek.indexOf(programFrequency)
    ? daysOfWeek.indexOf(programFrequency) - daysOfWeek.indexOf(currentDay)
    : daysOfWeek.length -
      daysOfWeek.indexOf(currentDay) +
      daysOfWeek.indexOf(programFrequency);

  return (
    <>
      <View style={styles.container}>
        <WeightLifting width={374} />

        <View style={styles.textContainer}>
          <Text style={styles.nextWorkoutText}>
            Next Workout: Week {daysUntilNextWorkout < 7 ? 1 : 2},
            {
              daysOfWeek[
                (daysOfWeek.indexOf(currentDay) + daysUntilNextWorkout) %
                  daysOfWeek.length
              ]
            }
          </Text>
          {nextWorkout ? (
            <Text style={styles.nextWorkoutText}>
              Target: {nextWorkout.target}
            </Text>
          ) : null}
        </View>
      </View>
    </>
  );
};
// return (
//   <View style={styles.container}>
//     <WeightLifting width={374} />
//     <View style={styles.textContainer}>
//       <Text style={styles.nextWorkoutText}>
//         Next Workout: Week {currentWeek} Day {dayOfWeek}
//       </Text>
//       <Text style={styles.nextWorkoutText}>Target: {target}</Text>
//     </View>
//   </View>
// );

export default NextWorkout;

const styles = StyleSheet.create({
  container: {},
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

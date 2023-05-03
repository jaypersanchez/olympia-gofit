import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { FlatList, Text } from 'react-native';

const ExerciseList = ({ exercises }) => {
  console.log(exercises);
  return (
    <View style={styles.container}>
      {exercises.map((exercise) => (
        <TouchableOpacity
          key={exercise.id}
          style={styles.exerciseContainer}
          onPress={() => console.log('Exercise tapped:', exercise.name)}
        >
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text style={styles.exerciseTarget}>{exercise.target}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  exerciseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exerciseTarget: {
    fontSize: 16,
    color: '#999999',
  },
});
export default ExerciseList;

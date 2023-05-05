import React from 'react';
import { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { FlatList, Text } from 'react-native';
import Warior1 from '../../../../../assets/Warior1.svg';
import { View } from 'react-native';
const ExerciseList = ({ exercises }) => {
  const handlePress = useCallback((exercise) => {
    console.log('Exercise tapped:', exercise.name);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.exerciseContainer}
      onPress={() => handlePress(item)}
    >
      <Warior1 width={100} height={100} />
      <View style={styles.textContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseTarget}>{item.target}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={exercises}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  exerciseContainer: {
    backgroundColor: '#F0ECFF',

    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 2,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  exerciseName: {
    fontSize: 18,
    color: '#6842FF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  exerciseTarget: {
    fontSize: 16,
  },
});
export default ExerciseList;

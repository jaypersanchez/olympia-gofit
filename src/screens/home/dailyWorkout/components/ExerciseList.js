import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import WeightLifting from '../../../../../assets/WeightLifting.svg';
import WhiteBookmark from '../../../../../assets/WhiteBookmark.svg';
import { TouchableOpacity } from 'react-native';
const ExerciseList = ({ days }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.75} style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <WeightLifting width={360} />
          <View style={styles.textContainer}>
            <Text style={styles.day}>Day {item.day}</Text>
            <FlatList
              data={item.exercises}
              keyExtractor={(exercise) => exercise.id.toString()}
              renderItem={({ item: exercise }) => (
                <Text style={styles.exerciseName}>
                  {exercise.name} - {exercise.sets} sets of {exercise.reps} reps
                </Text>
              )}
            />
          </View>
          <View style={styles.WhiteBookmarkContainer}>
            <WhiteBookmark width={24} height={24} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={days}
      keyExtractor={(day) => day.day.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 5,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'flex-start',
    width: '100%',
    bottom: 0,
  },
  day: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginLeft: 10,
    marginBottom: 60,
  },
  exerciseName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    marginLeft: 10,
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 8,
    paddingBottom: 10,
  },
  WhiteBookmarkContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 15,
    marginRight: 10,
  },
});
export default ExerciseList;

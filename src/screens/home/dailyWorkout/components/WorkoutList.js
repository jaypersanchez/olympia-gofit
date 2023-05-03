import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import WeightLifting from '../../../../../assets/WeightLifting.svg';
import WhiteBookmark from '../../../../../assets/WhiteBookmark.svg';
import ExerciseList from './ExerciseList';
const WorkoutList = ({ workouts, onPressWorkout, selectedWorkout }) => {
  return (
    <>
      {workouts.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.itemContainer}
          key={index}
          onPress={() => onPressWorkout(item)}
        >
          <View style={styles.imageContainer}>
            <WeightLifting width={374} />
            <View style={styles.textContainer}>
              <Text style={styles.day}>Day {item.id}</Text>
              <Text style={styles.target}> {item.target} </Text>
            </View>
            <View style={styles.WhiteBookmarkContainer}>
              <WhiteBookmark width={24} height={24} />
            </View>
          </View>
          {/* {selectedWorkout && selectedWorkout.id === item.id && (
            <ExerciseList exercises={selectedWorkout.exercises} />
          )} */}
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 5,
    paddingRight: 10,
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
  target: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    marginLeft: 10,
    marginBottom: 20,
  },
  listContainer: {
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
export default WorkoutList;

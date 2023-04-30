import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LeftCheckBox from './components/LeftCheckBox';

const GetStarted = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = (value) => {
    setIsChecked(value);
  };

  const handleButtonPress = () => {
    navigation.navigate('DailyWorkout');
    console.log('Generate workout plan button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Great!</Text>
        <Text style={styles.title}>Let's Workout!</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <LeftCheckBox
          label="I agree to the terms and conditions"
          isChecked={isChecked}
          onPress={handleCheckboxPress}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        disabled={!isChecked}
        onPress={handleButtonPress}
      >
        <Text
          style={[styles.buttonText, !isChecked && styles.buttonTextDisabled]}
        >
          Generate workout plan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#6842FF',
    textAlign: 'center',
  },
  checkboxContainer: {
    marginBottom: 24,
  },
  buttonContainer: {
    backgroundColor: '#6842FF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 22.4,
    color: '#fff',
    textAlign: 'center',
  },
  buttonTextDisabled: {
    opacity: 0.5,
  },
});
export default GetStarted;

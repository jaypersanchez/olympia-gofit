import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const NumberInput = ({ label, initialValue, onValueChange, opt1, opt2 }) => {
  const [value, setValue] = useState(initialValue);
  const [unit, setUnit] = useState(opt1);
  const [weight, setWeight] = useState(' ');

  const handleButtonPress = (selectedUnit) => {
    setUnit(selectedUnit);
    onValueChange(weight, selectedUnit);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        textAlign="center"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            unit === opt1 ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => handleButtonPress(opt1)}
        >
          <Text
            style={[
              styles.buttonText,
              unit === opt1 && styles.selectedButtonText,
            ]}
          >
            {opt1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            unit === opt2 ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => handleButtonPress(opt2)}
        >
          <Text
            style={[
              styles.buttonText,
              unit === opt2 && styles.selectedButtonText,
            ]}
          >
            {opt2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#9E9E9E',
    color: '#6842FF',
    borderRadius: 4,
    padding: 12,
    width: 120,
    height: 68,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 34,
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#6842FF',
    width: '48%',
  },
  selectedButton: {
    borderWidth: 0,
    borderBottomWidth: 4,
    borderBottomColor: '#4D2CAE',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#6842FF',
  },
  unselectedButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#6842FF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  selectedButtonText: {
    color: '#6842FF',
  },
});

export default NumberInput;

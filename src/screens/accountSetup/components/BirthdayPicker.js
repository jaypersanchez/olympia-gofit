import React, { useState } from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';

export default function BirthdayPicker() {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {date.toLocaleDateString(undefined, dateOptions)}
      </Text>
      {datePicker && (
        <RNDateTimePicker
          value={date}
          mode={'date'}
          display={'spinner'}
          is24Hour={true}
          onChange={onDateSelected}
          positiveButton={{ label: 'OK', textColor: '#6842FF' }}
          neutralButton={{ label: 'Cancel', textColor: 'grey' }}
          negativeButton={{ label: '' }}
        />
      )}
      {!datePicker && (
        <TouchableOpacity style={styles.button} onPress={showDatePicker}>
          <Text style={styles.buttonText}>Select Date</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 40,
    fontWeight: '500',
    color: '#6842FF',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6842FF',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
});

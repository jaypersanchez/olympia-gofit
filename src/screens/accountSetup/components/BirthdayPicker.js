import React, { useState } from 'react';

import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

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
    <View style={styles.MainContainer}>
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
        <View style={{ margin: 10 }}>
          <Button
            title="Select Date"
            color="#6842FF"
            onPress={showDatePicker}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
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
});

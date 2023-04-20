import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import YourAge from './YourAge'

const AboutYourself = () => {

  return(
    <View style={styles.container}>
    <Text>Tell Us About Yourself</Text>
    <TouchableOpacity onPress={() => navigation.navigate(<YourAge/>)} >
      <Text>Next</Text>
    </TouchableOpacity>
    </View>
  );
  
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightblue',
  },
});

export default AboutYourself;
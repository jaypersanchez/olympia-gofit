import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const YourAge = () => {
  
  return(
    <>
      <View style={styles.container}>
        <Text>How Old Are You</Text>
      </View>
    </>  
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightblue',
  },
});

export default YourAge;
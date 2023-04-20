import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

/**Account Setup */
import AboutYourself from './AboutYourself'
import PhysicalActivity from './PhysicalActivity'
import YourAge from './YourAge'
import YourGoal from './YourGoal'
import YourHeight  from './YourHeight'
import YourProfile from './YourProfile'
import YourWeigth from './YourWeight'

const Setup = () => {
    const Stack = createNativeStackNavigator()  

    return(
        <>
        <View style={styles.container}>
            <Text>Account Setup</Text>
            <NavigationContainer>
                    <Stack.Navigator initialRouteName="Tell Us About Yourself">
                    <Stack.Screen name="Tell Us About Yourself" component={AboutYourself} />
                    <Stack.Screen name="Your Age" component={YourAge} />
                    <Stack.Screen name="Your Weight" component={YourWeigth} />
                    <Stack.Screen name="Your Height" component={YourHeight} />
                    <Stack.Screen name="Your Goal" component={YourGoal} />
                    <Stack.Screen name="Physical Activity Activity" component={PhysicalActivity} />
                    <Stack.Screen name="Your Profile" component={YourProfile} />
          </Stack.Navigator>
            </NavigationContainer>
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

export default Setup;
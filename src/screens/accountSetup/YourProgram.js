import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import TextItem from '../../components/customs/TextItem';
import Button from '../../components/customs/Button';
import ActiveInactiveButton from './components/ActiveInactiveButton';
const YourProgram = ({ navigation, route }) => {
  // const { activeStep } = route.params;
  console.log('route', route);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ display: 'flex', gap: 19 }}>
        <TextItem type="h3" style={{ textAlign: 'center' }}>
          How often will you commit to program?
        </TextItem>
        <TextItem
          type="body_xl"
          style={{ textAlign: 'center', fontSize: 21, lineHeight: 25.2 }}
        >
          Select how frequently you can commit to the program. This will help us
          tailor a plan that fits your schedule.
        </TextItem>
      </View>
      <View style={{ display: 'flex', gap: 16, width: '100%' }}>
        <ActiveInactiveButton
          labels={['Five Days a Week', 'Four Days a Week', 'Three Days a Week']}
          onLabelSelect={(label) => console.log(`Selected label: ${label}`)}
        />
      </View>
      <View
        style={{ flexDirection: 'row', columnGap: 12, paddingHorizontal: 6 }}
      >
        <Button
          label="Back"
          style={{ width: '50%' }}
          btnColor="#F0ECFF"
          btnTextColor="#6842FF"
          // onPress={() => navigation.goBack()}
        />
        <Button
          label="Continue"
          style={{ width: '50%' }}
          // onPress={() => navigation.navigate('Age')}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourProgram;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeicon: {},
});

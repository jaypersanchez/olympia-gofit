import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import TextItem from '../../components/customs/TextItem';
import Button from '../../components/customs/Button';
import ActiveInactiveButton from './components/ActiveInactiveButton';
import ProgressBarStepper from '../../components/customs/ProgressBarStepper';
const YourWeightTraining = ({ navigation, route }) => {
  // const { activeStep } = route.params;
  console.log('route', route);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
        }}
      >
        <ProgressBarStepper
          steps={10} // Total number of steps
          activeSteps={6} // Current active step
        />
      </View>
      <View style={{ display: 'flex', gap: 19 }}>
        <TextItem type="h3" style={{ textAlign: 'center' }}>
          Physical Weight Training
        </TextItem>
        <TextItem
          type="body_xl"
          style={{ textAlign: 'center', fontSize: 21, lineHeight: 25.2 }}
        >
          When was the last time you weight trained regularly?
        </TextItem>
      </View>
      <View
        style={{
          display: 'flex',
          gap: 16,
          width: '100%',
          paddingHorizontal: 24,
        }}
      >
        <ActiveInactiveButton
          labels={['I Currently Train', 'Months Ago', 'Years Ago']}
          onLabelSelect={(label) => console.log(`Selected label: ${label}`)}
        />
      </View>
      <View
        style={{ flexDirection: 'row', columnGap: 12, paddingHorizontal: 24 }}
      >
        <Button
          label="Back"
          style={{ width: '50%' }}
          btnColor="#F0ECFF"
          btnTextColor="#6842FF"
          onPress={() => navigation.goBack()}
        />
        <Button
          label="Continue"
          style={{ width: '50%' }}
          onPress={() => navigation.navigate('Goal')}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourWeightTraining;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeicon: {},
});

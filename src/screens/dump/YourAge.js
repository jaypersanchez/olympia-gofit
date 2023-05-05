import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import TextItem from '../../components/customs/TextItem';
import Button from '../../components/customs/Button';
import ProgressBarStepper from '../../components/customs/ProgressBarStepper';
import BirthdayPicker from './components/BirthdayPicker';
const YourAge = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
        }}
      >
        <ProgressBarStepper
          steps={10} // Total number of steps
          activeSteps={2} // Current active step
        />
      </View>
      <View style={{ display: 'flex', gap: 19 }}>
        <TextItem type="h3" style={{ textAlign: 'center' }}>
          How Old Are You?
        </TextItem>
        <TextItem
          type="body_xl"
          style={{
            textAlign: 'center',
            fontSize: 21,
            lineHeight: 25.2,
            paddingHorizontal: 24,
          }}
        >
          Age in years. This will help us to personalize an exercise program
          plan that suits you.
        </TextItem>
        <View style={{ paddingVertical: 32 }}>
          <BirthdayPicker />
        </View>
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
          onPress={() => navigation.navigate('Weight')}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourAge;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
});

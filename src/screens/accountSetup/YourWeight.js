import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import TextItem from '../../components/customs/TextItem';
import Button from '../../components/customs/Button';
import { ArrowUpIcons } from '../../components/Icons';
import ProgressBarStepper from '../../components/customs/ProgressBarStepper';
import NumberInput from './components/NumberInput';

const YourWeight = ({ navigation }) => {
  const [weight, setWeight] = useState(70);
  const option = {
    opt1: 'KG',
    opt2: 'LBS',
  };
  const handleWeightChange = (newValue, unit) => {
    setWeight(newValue);
    console.log(`New weight value: ${newValue}${unit}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
        }}
      >
        <ProgressBarStepper
          steps={10} // Total number of steps
          activeSteps={3} // Current active step
        />
      </View>
      <View style={{ display: 'flex', gap: 19 }}>
        <TextItem type="h3" style={{ textAlign: 'center' }}>
          What is Your Weight?
        </TextItem>
        <TextItem
          type="body_xl"
          style={{ textAlign: 'center', fontSize: 21, paddingHorizontal: 24 }}
        >
          Weight in kg. Don't worry, you can always change it later.
        </TextItem>
        <View style={{ alignItems: 'center', marginTop: 32 }}>
          <NumberInput
            initialValue={weight}
            onValueChange={handleWeightChange}
            opt1={option.opt1}
            opt2={option.opt2}
          />
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
          onPress={() => navigation.navigate('Height')}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourWeight;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
});

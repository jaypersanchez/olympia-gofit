import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import TextItem from '../../components/customs/TextItem';
import Button from '../../components/customs/Button';
import ProgressBarStepper from '../../components/customs/ProgressBarStepper';
import NumberInput from './components/NumberInput';

const YourHeight = ({ navigation }) => {
  const [height, setHeight] = useState(70);
  const handleHeightChange = (newValue, unit) => {
    setHeight(newValue);
    console.log(`New height value: ${newValue}${unit}`);
  };
  const option = {
    opt1: 'INCH',
    opt2: 'CM',
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
          activeSteps={4} // Current active step
        />
      </View>
      <View style={{ display: 'flex', gap: 19 }}>
        <TextItem type="h3" style={{ textAlign: 'center' }}>
          What is Your Height?
        </TextItem>
        <TextItem
          type="body_xl"
          style={{ textAlign: 'center', fontSize: 21, lineHeight: 25.2 }}
        >
          Height in cm. Don't worry, you can always change it later.
        </TextItem>
        <View style={{ gap: 20, paddingVertical: 12, marginTop: 32 }}>
          <NumberInput
            initialValue={height}
            onValueChange={handleHeightChange}
            opt1={option.opt1}
            opt2={option.opt2}
          ></NumberInput>
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
          onPress={() => navigation.navigate('Experience')}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourHeight;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
});

import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import TextItem from '../../components/customs/TextItem';
import Button from '../../components/customs/Button';
import ActiveInactiveButton from './components/ActiveInactiveButton';
import ProgressBarStepper from '../../components/customs/ProgressBarStepper';
import { useDispatch } from 'react-redux';
import { selectProgramFrequency } from '../../store/actions';

const YourProgram = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSelectFrequency = (frequency) => {
    dispatch(selectProgramFrequency(frequency));
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
          activeSteps={9} // Current active step
        />
      </View>

      <View style={{ display: 'flex', gap: 19, paddingHorizontal: 24 }}>
        <TextItem type="h3" style={{ textAlign: 'center' }}>
          How often will you commit to program?
        </TextItem>
        <TextItem
          type="body_xl"
          style={{ textAlign: 'center', fontSize: 21, lineHeight: 25.2 }}
        >
          Select how frequently you can commit to the program.
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
          labels={['Five Days a Week', 'Four Days a Week', 'Three Days a Week']}
          onLabelSelect={handleSelectFrequency}
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
          onPress={() => navigation.navigate('GetStarted')}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourProgram;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

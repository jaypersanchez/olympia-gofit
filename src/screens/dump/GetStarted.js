import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LeftCheckBox from './components/LeftCheckBox';
import ProgressBarStepper from '../../components/customs/ProgressBarStepper';

const GetStarted = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = (value) => {
    setIsChecked(value);
  };

  const handleButtonPress = () => {
    navigation.navigate('PaymentPlan');
    console.log('Generate workout plan button pressed');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          width: '100%',
          marginTop: 20,
        }}
      >
        <ProgressBarStepper
          steps={10} // Total number of steps
          activeSteps={10} // Current active step
        />
      </View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Great!</Text>
          <Text style={styles.title}>Let's Workout!</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <LeftCheckBox isChecked={isChecked} onPress={handleCheckboxPress} />
          <Text style={styles.label}>I agree to the </Text>
          <Text style={styles.termsText}>terms and conditions</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            !isChecked && styles.buttonContainerDisabled,
          ]}
          disabled={!isChecked}
          onPress={handleButtonPress}
        >
          <Text
            style={[styles.buttonText, !isChecked && styles.buttonTextDisabled]}
          >
            Generate workout plan
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#6842FF',
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    lineHeight: 22.4,
    color: '#000',
  },
  termsText: {
    color: '#6842FF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    backgroundColor: '#6842FF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  buttonContainerDisabled: {
    backgroundColor: '#F0ECFF',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 22.4,
    color: '#fff',
    textAlign: 'center',
  },
  buttonTextDisabled: {
    color: '#6842FF',
    opacity: 0.5,
  },
});
export default GetStarted;

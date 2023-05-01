import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import TextItem from '../../components/customs/TextItem';
import Button from '../../components/customs/Button';
import CheckboxButton from './components/CheckboxButton';
const data = [
  { label: 'Build Strength' },
  { label: 'Size' },
  { label: 'Get Ripped' },
  { label: 'Overall Fitness' },
];
const YourGoal = ({ navigation }) => {
  const handleSelectionChange = (selectedItems) => {
    console.log('Selected items:', selectedItems);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={{ display: 'flex', gap: 19 }}>
        <TextItem type="h3" style={{ textAlign: 'center' }}>
          What is Your Goal?
        </TextItem>
        <TextItem
          type="body_xl"
          style={{ textAlign: 'center', fontSize: 21, lineHeight: 25.2 }}
        >
          You can choose more than one. Don't worry, you can always change it
          later.
        </TextItem>
      </View>
      <View style={{ display: 'flex', gap: 36, width: '100%' }}>
        <CheckboxButton data={data} onSelectionChange={handleSelectionChange} />
      </View>
      <View
        style={{ flexDirection: 'row', columnGap: 12, paddingHorizontal: 6 }}
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
          onPress={() => navigation.navigate('Location')}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default YourGoal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
});

import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TextItem from '../../components/customs/TextItem';
import Button from '../../components/customs/Button';
import { ArrowUpIcons } from '../../components/Icons';

const YourWeight = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ display: 'flex', gap: 19 }}>
        <TextItem type="h3" style={{ textAlign: 'center' }}>
          What is Your Weight?
        </TextItem>
        <TextItem
          type="body_xl"
          style={{ textAlign: 'center', fontSize: 21, lineHeight: 25.2 }}
        >
          Weight in kg. Don't worry, you can always change it later.
        </TextItem>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            gap: 20,
            paddingVertical: 12,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Text
              textAlign="center"
              style={{
                fontSize: 32,
                color: '#9E9E9E',
                fontFamily: 'Urbanist_700Bold',
              }}
            >
              63
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text
              textAlign="center"
              style={{
                fontSize: 50,
                color: '#616161',
                fontFamily: 'Urbanist_700Bold',
              }}
            >
              64
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text
              textAlign="center"
              style={{
                fontSize: 70,
                color: '#6842FF',
                fontFamily: 'Urbanist_700Bold',
              }}
            >
              65
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text
              textAlign="center"
              style={{
                fontSize: 50,
                color: '#616161',
                fontFamily: 'Urbanist_700Bold',
              }}
            >
              66
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text
              textAlign="center"
              style={{
                fontSize: 32,
                color: '#9E9E9E',
                fontFamily: 'Urbanist_700Bold',
              }}
            >
              67
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 60,
            width: 60,
            justifyContent: 'center',
          }}
        >
          <ArrowUpIcons />
        </View>
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
          onPress={() => navigation.navigate('Height')}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourWeight;

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

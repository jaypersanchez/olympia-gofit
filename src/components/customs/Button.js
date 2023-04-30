import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Button = ({ onPress, label, style, btnColor, btnTextColor }) => {
  const buttonColor = {
    backgroundColor: btnColor ? btnColor : 'yellow',
  };

  const buttonTextColor = {
    color: btnTextColor ? btnTextColor : '#ffffff',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={{ ...style }}
    >
      <LinearGradient
        colors={[
          btnColor ? btnColor : '#6842FF',
          btnColor ? btnColor : '#896BFF',
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ ...styles.button, ...buttonColor }}
      >
        <Text style={{ ...styles.textButton, ...buttonTextColor }}>
          {label}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    paddingVertical: 20,
    paddingHorizontal: 20,
    boxShadow: '4px 8px 24px rgba(104, 66, 255, 0.25)',
  },
  textButton: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 16,
    lineHeight: 22.4,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ActiveInactiveButton = ({
  onPress,
  labels,
  style,
  btnColor,
  btnTextColor,
  onLabelSelect,
}) => {
  const buttonColor = {
    backgroundColor: btnColor ? btnColor : 'yellow',
  };

  const buttonTextColor = {
    color: btnTextColor ? btnTextColor : '#ffffff',
  };
  const [activeLabel, setActiveLabel] = useState(labels[0]);

  const onPressLabel = (label) => {
    setActiveLabel(label);
    onLabelSelect && onLabelSelect(label);
  };

  const renderLabel = (label) => {
    const isActive = activeLabel === label;
    const buttonStyle = {
      backgroundColor: isActive ? '#6842FF' : '#FFF',
      borderColor: '#F5F5F5',
      borderWidth: 1.5,
      borderRadius: 16,
    };
    const textStyle = {
      fontFamily: 'Urbanist_700Bold',
      fontSize: 16,
      lineHeight: 22.4,
      color: isActive ? '#FFFFFF' : '#000',
    };

    return (
      <TouchableOpacity
        key={label}
        onPress={() => onPressLabel(label)}
        activeOpacity={0.75}
      >
        <View style={{ ...styles.button, ...buttonColor, ...buttonStyle }}>
          <Text
            style={{ ...styles.textButton, ...buttonTextColor, ...textStyle }}
          >
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <React.Fragment>{labels.map((label) => renderLabel(label))}</React.Fragment>
  );
};
export default ActiveInactiveButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
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

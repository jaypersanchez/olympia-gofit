import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckIcon from '../../../../assets/CheckIcon.svg';
import BoxIcon from '../../../../assets/BoxIcon.svg';
import FilledBoxIcon from '../../../../assets/FilledBoxIcon.svg';

const LeftCheckBox = ({ isChecked, onPress }) => {
  const handlePress = () => {
    onPress && onPress(!isChecked);
  };

  const handleCheckboxPress = (event) => {
    event.stopPropagation();
    handlePress();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handlePress}
          style={styles.checkboxContainer}
        >
          {isChecked && (
            <View style={styles.filledBoxIconContainer}>
              <FilledBoxIcon style={styles.filledBoxIcon} />
              <CheckIcon style={styles.checkIcon} />
            </View>
          )}
          {!isChecked && <BoxIcon style={styles.boxIcon} />}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkboxContainer: {
    position: 'relative',
    width: 40,
    height: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    position: 'absolute',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 8,
  },
  boxIcon: {
    boxSizing: 'border-box',
    position: 'relative',
    borderWidth: 3,
    borderRadius: 8,
  },
  filledBoxIconContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#6842FF',
    borderWidth: 3,
    borderColor: '#6842FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filledBoxIcon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
  },
  label: {
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 22.4,
    color: '#000',
  },
});
export default LeftCheckBox;

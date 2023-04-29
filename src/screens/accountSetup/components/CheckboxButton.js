import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckIcon from '../../../../assets/CheckIcon.svg';
import BoxIcon from '../../../../assets/BoxIcon.svg';
import FilledBoxIcon from '../../../../assets/FilledBoxIcon.svg';
const Checkbox = ({ label, active, isChecked, onPress }) => {
  const handlePress = () => {
    onPress && onPress(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          active ? styles.active : styles.inactive,
          isChecked && styles.checked,
        ]}
      >
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          {isChecked && (
            <View style={styles.filledBoxIconContainer}>
              <FilledBoxIcon style={styles.filledBoxIcon} />
              <CheckIcon style={styles.checkIcon} />
            </View>
          )}
          {!isChecked && <BoxIcon style={styles.boxIcon} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const CheckboxButton = ({ data, onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectionChange = (itemIndex, isChecked) => {
    let updatedSelectedItems = [...selectedItems];
    if (isChecked) {
      updatedSelectedItems.push(itemIndex);
    } else {
      updatedSelectedItems = updatedSelectedItems.filter(
        (index) => index !== itemIndex
      );
    }
    setSelectedItems(updatedSelectedItems);
    onSelectionChange && onSelectionChange(updatedSelectedItems);
  };

  return (
    <View>
      {data.map((item, index) => (
        <Checkbox
          key={index}
          label={item.label}
          active={selectedItems.includes(index)}
          isChecked={selectedItems.includes(index)}
          onPress={(isChecked) => handleSelectionChange(index, isChecked)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#A6A6A6',
    borderRadius: 4,
    marginBottom: 8,
  },
  active: {
    borderColor: '#6842FF',
  },
  inactive: {
    borderColor: '#A6A6A6',
  },
  checked: {
    borderColor: '#6842FF',
  },
  labelContainer: {
    flex: 1,
  },
  checkboxContainer: {
    position: 'relative',
    marginLeft: 12,
  },
  checkIcon: {
    position: 'absolute',
    left: '25%',
    top: '25%',
    width: '50%',
    height: '50%',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 8,
  },
  boxIcon: {
    boxSizing: 'border-box',
    position: 'relative',
    borderWidth: 3,
    borderColor: '#6842FF',
    borderRadius: 8,
  },
  label: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 16,
    lineHeight: 22.4,
  },
});
export default CheckboxButton;

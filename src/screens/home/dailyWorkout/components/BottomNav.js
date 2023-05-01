import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import HomeNavIcon from '../../../../../assets/HomeNavIcon.svg';
import DiscoverNavIcon from '../../../../../assets/DiscoverNavIcon.svg';
import InsightNavIcon from '../../../../../assets/InsightNavIcon.svg';
import ProfileNavIcon from '../../../../../assets/ProfileNavIcon.svg';
import HomeDefaultIcon from '../../../../../assets/HomeDefaultIcon.svg';
import InsightDefaultIcon from '../../../../../assets/InsightDefaultIcon.svg';
import ProfileDefaultIcon from '../../../../../assets/ProfileDefaultIcon.svg';
import DiscoverDefaultIcon from '../../../../../assets/DiscoverDefaultIcon.svg';

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <HomeNavIcon></HomeNavIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <DiscoverDefaultIcon></DiscoverDefaultIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <InsightDefaultIcon></InsightDefaultIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <ProfileDefaultIcon></ProfileDefaultIcon>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ffff',
  },
  button: {
    alignItems: 'center',
  },
});

export default BottomNav;

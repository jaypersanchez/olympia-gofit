import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import GofitLogo from '../../../../../assets/GofitLogo.svg';
import GofitText from '../../../../../assets/GofitText.svg';
import Notification from '../../../../../assets/Notification.svg';
import Group from '../../../../../assets/Group.svg';
import Search from '../../../../../assets/Search.svg';
const TopNav = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 20,
        width: '100%',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <GofitLogo style={{ width: 50, height: 50 }} />
        {/* <GofitText
          name="menu-outline"
          width={74}
          height={74}
          style={{ marginLeft: 15 }}
        /> */}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ marginRight: 15 }}>
          <Search name="search-outline" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Group name="notifications-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({});

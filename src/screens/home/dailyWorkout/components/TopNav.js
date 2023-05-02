import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import GofitLogo from "../../../../../assets/GofitLogo.svg";
import GofitText from "../../../../../assets/GofitText.svg";
import Notification from "../../../../../assets/Notification.svg";
import Group from "../../../../../assets/Group.svg";
import Search from "../../../../../assets/Search.svg";

import Logo from "../../../../../assets/image/FitSpace-black.png";
const TopNav = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        height: 20,
        width: "100%",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* <GofitLogo style={{ width: 50, height: 50 }} /> */}
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
        </View>
        {/* <GofitText
          name="menu-outline"
          width={74}
          height={74}
          style={{ marginLeft: 15 }}
        /> */}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Search name="search-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  logoContainer: {
    height: 50,
    width: 125,
    position: "relative",
  },
  logo: {
    height: "100%",
    width: "100%",
    position: "absolute",
    right: 18,
    top: 0,
    bottom: 0,
  },
});

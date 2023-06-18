import { StyleSheet, ImageBackground, View } from "react-native";
import React from "react";
import TextItem from "../../../components/customs/TextItem";

import BannerImg from "../../../../assets/image/banner/banner.jpg";
import { LinearGradient } from "expo-linear-gradient";

const HeaderExcercise = ({ title, subtitle, selected }) => {
  return (
    <View style={styles.imgContainer}>
      <ImageBackground source={BannerImg} style={styles.image}>
        <View style={styles.textContianer}>
          <View>
            <TextItem
              type="h3"
              font="bold"
              style={{ textAlign: "center", color: "#fff" }}
            >
              {title}
            </TextItem>
            <TextItem
              type="h5"
              font="bold"
              style={{ textAlign: "center", color: "#fff" }}
            >
              {subtitle}
            </TextItem>
          </View>
          <TextItem
            type="body_m"
            font="medium"
            style={{ textAlign: "center", color: "#fff" }}
          >
            {selected ? selected : ""}
          </TextItem>
        </View>
        <LinearGradient
          colors={[
            "rgba(75, 75, 75, 0)",
            "rgba(68, 68, 68, 0.114356) 17.19%",
            "rgba(64, 64, 64, 0.3) 27.08%",
            "rgba(58, 58, 58, 0.4) 41.67%",
            "rgba(54, 54, 54, 0.5) 52.6%",
            "rgba(47, 47, 47, 0.6) 66.15%",
            "rgba(40, 40, 40, 0.8) 80.21%",
            "rgba(32, 32, 32, 0.9) 100%",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.mask}
        />
      </ImageBackground>
    </View>
  );
};

export default HeaderExcercise;

const styles = StyleSheet.create({
  imgContainer: {
    height: 300,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  textContianer: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 24,
    zIndex: 25,
    gap: 16,
  },
  mask: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 164,
  },
});

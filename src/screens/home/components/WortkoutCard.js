import { StyleSheet, ImageBackground, View } from "react-native";
import React, { useState } from "react";
import TextItem from "../../../components/customs/TextItem";

import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import {
  CheckboxFilledIcon,
  CheckboxOutlineIcon,
} from "../../../components/Icons";

const WortkoutCard = ({ title, excercise, img, onPress }) => {
  const [bookmarkActive, setBookmarkActive] = useState(false);

  const handleOnpress = () => {
    onPress();
    setBookmarkActive(!bookmarkActive);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.imgContainer}
      onPress={handleOnpress}
    >
      <ImageBackground
        source={img}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.textContianer}>
          <View style={{ position: "absolute", bottom: 16, right: 22 }}>
            {bookmarkActive ? (
              <CheckboxFilledIcon color="#fff" size={24} />
            ) : (
              <CheckboxOutlineIcon color="#fff" size={24} />
            )}
          </View>
          <View style={{ paddingHorizontal: 12, gap: 4 }}>
            <TextItem
              type="h4"
              font="bold"
              numberOfLines={2}
              style={{
                color: "#fff",
                width: 260,
              }}
            >
              {title}
            </TextItem>
            <TextItem
              type="body_m"
              font="medium"
              numberOfLines={1}
              style={{
                color: "#fff",
                width: 260,
              }}
            >
              {excercise}
            </TextItem>
          </View>
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
    </TouchableOpacity>
  );
};

export default WortkoutCard;

const styles = StyleSheet.create({
  imgContainer: {
    height: 140,
    borderRadius: 24,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  imageStyle: {
    borderRadius: 24,
  },
  textContianer: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
    padding: 12,
    zIndex: 25,
    gap: 4,
  },
  mask: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
});

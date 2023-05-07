import { StyleSheet, ImageBackground, View } from "react-native";
import React, { useState } from "react";
import TextItem from "../../../components/customs/TextItem";

import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import {
  BookmarkFilledIcon,
  BookmarkOutlineIcon,
} from "../../../components/Icons";

const ExcerciseCard = ({ day, excercise, img }) => {
  const [bookmarkActive, setBookmarkActive] = useState(false);

  return (
    <View style={styles.imgContainer}>
      <ImageBackground
        source={img}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.textContianer}>
          <TextItem type="h4" font="bold" style={{ color: "#fff" }}>
            Day {day}
          </TextItem>
          <TextItem type="body_m" font="medium" style={{ color: "#fff" }}>
            {excercise}
          </TextItem>
          <View style={{ position: "absolute", bottom: 16, right: 22 }}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={{ margin: 2 }}
              onPress={() => setBookmarkActive(!bookmarkActive)}
            >
              {bookmarkActive ? (
                <BookmarkFilledIcon color="#fff" size={24} />
              ) : (
                <BookmarkOutlineIcon color="#fff" size={24} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <LinearGradient
          colors={[
            "rgba(75, 75, 75, 0)",
            "rgba(68, 68, 68, 0.114356)",
            "rgba(64, 64, 64, 0.16)",
            "rgba(58, 58, 58, 0.2)",
            "rgba(54, 54, 54, 0.3)",
            "rgba(47, 47, 47, 0.5)",
            "rgba(40, 40, 40, 0.6)",
            "rgba(32, 32, 32, 0.7)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0, 0.1719, 0.2708, 0.4167, 0.526, 0.6615, 0.8021, 1]}
          style={styles.mask}
        />
      </ImageBackground>
    </View>
  );
};

export default ExcerciseCard;

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
    padding: 24,
    paddingBottom: 16,
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

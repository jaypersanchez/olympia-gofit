import { StyleSheet, ImageBackground, View } from "react-native";
import React, { useState } from "react";
import TextItem from "../components/customs/TextItem";

import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import {
  BookmarkFilledIcon,
  BookmarkOutlineIcon,
} from "../components/Icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

const Page = createNativeStackNavigator();

const ShowExcercise = ({ excercise }) => {
    console.log(`Show Exercise`)
    return (
      <div>
        <h3>Excercise Info:</h3>
        <p>Name: {excercise.name}</p> 
        <p>Duration: {excercise.duration}</p>
        <p>Difficulty Level: {excercise.difficultyLevel}</p>
        <p>Muscles: {excercise.muscles}</p>
      </div>
    )
}
export default ShowExcercise;
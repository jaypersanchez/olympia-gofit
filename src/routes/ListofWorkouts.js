import { StyleSheet, ImageBackground, View } from "react-native";
import React, { useState } from "react";
import TextItem from "../components/customs/TextItem";
//import IconBox from "../components/IconBox";
import Button from "../components/customs/Button";
import TextField from "../components/customs/TextField";
//import MessageIcon from "../../../../assets/icons/MessageIcon.svg";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import {
  BookmarkFilledIcon,
  BookmarkOutlineIcon,
} from "../components/Icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { Text } from "react-native";

const Page = createNativeStackNavigator();

const ListOfWorkouts = ({ excercise }) => {
    console.log(`Show Exercise`)
    return (
      <View>
        <Text>Excercise Info:</Text>
        <Text>Name: {excercise.name}</Text> 
        <Text>Duration: {excercise.duration}</Text>
        <Text>Difficulty Level: {excercise.difficultyLevel}</Text>
        <Text>Muscles: {excercise.muscles}</Text>
      </View>
    )
}
export default ListOfWorkouts;
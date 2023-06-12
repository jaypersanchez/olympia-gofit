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
import ListOfWorkouts from "./ListofWorkouts";
import { Text } from "react-native";

const Page = createNativeStackNavigator();

const ShowExcercise = ({ excercise }) => {
    console.log(`Show Exercise`)
    if(!excercise || excercise.length === 0) {
      return(
        <>
           <Text>No Excercise in Your Workout Plan</Text>
          <ListOfWorkouts exercise={excercise} />
        </>
      );
    }
    else {
      return (
        <View>
          <TextField>Excercise Info:</TextField>
          <TextField>Name: {JSON.stringify(excercise.name)}</TextField> 
          <TextField>Duration: {JSON.stringify(excercise.duration)}</TextField>
          <TextField>Difficulty Level: {JSON.stringify(excercise.difficultyLevel)}</TextField>
          <TextField>Muscles: {JSON.stringify(excercise.muscles)}</TextField>
        </View>
      )
    }
}
export default ShowExcercise;
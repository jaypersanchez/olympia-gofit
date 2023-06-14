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
//import ListOfWorkouts from "./ListofWorkouts";
import useWorkoutPlan from "../components/api/useWorkoutPlan";
import { Text } from "react-native";

const Page = createNativeStackNavigator();

const ShowExcercise = async() => {
    
  const [excercises, setExcercises] = useState()
  
  //let _x = await useWorkoutPlan.getExercises()
  //setExcercises(_x)
  console.log(`Exercises ${JSON.stringify(_x)}`)

    if(!excercises || excercises.length === 0) {
      return(
        <>
           <Text>No Excercise in Your Workout Plan</Text>
          
        </>
      );
    }
    else {
      return (
        <View>
          <TextField>Excercise Info:</TextField>
          
        </View>
      )
    }
}
export default ShowExcercise;
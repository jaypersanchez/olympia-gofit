import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import TextItem from "../../components/customs/TextItem";
import Button from "../../components/customs/Button";
import ScrollPicker from "react-native-wheel-scrollview-picker";

const YourAge = ({ navigation }) => {
  const numbers = [...Array(101).keys()];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ display: "flex", gap: 19 }}>
        <TextItem type="h3" style={{ textAlign: "center" }}>
          How Old Are You?
        </TextItem>
        <TextItem
          type="body_xl"
          style={{ textAlign: "center", fontSize: 21, lineHeight: 25.2 }}
        >
          Age in years. This will help us to personalize an exercise program
          plan that suits you.
        </TextItem>
      </View>

      <View style={{ gap: 20, paddingVertical: 12 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            textAlign="center"
            style={{
              fontSize: 32,
              color: "#9E9E9E",
              fontFamily: "Urbanist_700Bold",
            }}
          >
            18
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            textAlign="center"
            style={{
              fontSize: 50,
              color: "#616161",
              fontFamily: "Urbanist_700Bold",
            }}
          >
            19
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#6842FF",
            width: 76,
            height: 4,
            borderRadius: 50,
          }}
        />
        <View style={{ alignItems: "center" }}>
          <Text
            textAlign="center"
            style={{
              fontSize: 70,
              color: "#6842FF",
              fontFamily: "Urbanist_700Bold",
            }}
          >
            20
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#6842FF",
            width: 76,
            height: 4,
            borderRadius: 50,
          }}
        />
        <View style={{ alignItems: "center" }}>
          <Text
            textAlign="center"
            style={{
              fontSize: 50,
              color: "#616161",
              fontFamily: "Urbanist_700Bold",
            }}
          >
            21
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            textAlign="center"
            style={{
              fontSize: 32,
              color: "#9E9E9E",
              fontFamily: "Urbanist_700Bold",
            }}
          >
            22
          </Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", columnGap: 12, paddingHorizontal: 6 }}
      >
        <Button
          label="Back"
          style={{ width: "50%" }}
          btnColor="#F0ECFF"
          btnTextColor="#6842FF"
          onPress={() => navigation.goBack()}
        />
        <Button
          label="Continue"
          style={{ width: "50%" }}
          onPress={() => navigation.navigate("Weight")}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourAge;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
});

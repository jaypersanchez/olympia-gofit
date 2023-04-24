import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import TextItem from "../../components/customs/TextItem";
import Button from "../../components/customs/Button";
import GenderButton from "./components/GenderButton";

const AboutYourself = () => {
  const [gender, setGender] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ display: "flex", gap: 19 }}>
        <TextItem type="h3" style={{ textAlign: "center" }}>
          Tell Us About Yourself
        </TextItem>
        <TextItem
          type="body_xl"
          style={{ textAlign: "center", fontSize: 21, lineHeight: 25.2 }}
        >
          To give you a better experience and results we need to know your
          gender.
        </TextItem>
      </View>
      <View style={{ display: "flex", gap: 36 }}>
        <GenderButton
          label="Male"
          active={gender === "Male"}
          onPress={() => setGender("Male")}
        />
        <GenderButton
          label="Female"
          active={gender === "Female"}
          onPress={() => setGender("Female")}
        />
      </View>
      <Button label="Continue" onPress={() => console.log("conti")} />
    </SafeAreaView>
  );
};

export default AboutYourself;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

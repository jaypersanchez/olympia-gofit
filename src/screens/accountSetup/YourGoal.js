import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextItem from "../../components/customs/TextItem";
import Button from "../../components/customs/Button";

const YourGoal = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ display: "flex", gap: 19 }}>
        <TextItem type="h3" style={{ textAlign: "center" }}>
          What is Your Goal?
        </TextItem>
        <TextItem
          type="body_xl"
          style={{ textAlign: "center", fontSize: 21, lineHeight: 25.2 }}
        >
          You can choose more than one. Don't worry, you can always change it
          later.
        </TextItem>
      </View>
      <View style={{ display: "flex", gap: 36 }}>
        <Text>Goal</Text>
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
          onPress={() => navigation.navigate("Actvity Level")}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourGoal;

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

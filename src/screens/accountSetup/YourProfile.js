import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextItem from "../../components/customs/TextItem";
import Button from "../../components/customs/Button";

const YourProfile = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ display: "flex", gap: 19 }}>
        <TextItem type="h3" style={{ textAlign: "center" }}>
          Fill Your Profile
        </TextItem>
        <TextItem
          type="body_xl"
          style={{ textAlign: "center", fontSize: 21, lineHeight: 25.2 }}
        >
          Don't worry, you can always change it later, or you can skip it for
          now.
        </TextItem>
      </View>
      <View style={{ display: "flex", gap: 36 }}>
        <Text>Counter</Text>
      </View>
      <View
        style={{ flexDirection: "row", columnGap: 12, paddingHorizontal: 6 }}
      >
        <Button
          label="Back"
          style={{ width: "50%" }}
          btnColor="#F0ECFF"
          btnTextColor="#6842FF"
          onPress={() => console.log("conti")}
        />
        <Button
          label="Continue"
          style={{ width: "50%" }}
          onPress={() => console.log("conti")}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourProfile;

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

import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextItem from "../../components/customs/TextItem";
import Button from "../../components/customs/Button";

const YourHeight = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ display: "flex", gap: 19 }}>
        <TextItem type="h3" style={{ textAlign: "center" }}>
          What is Your Height?
        </TextItem>
        <TextItem
          type="body_xl"
          style={{ textAlign: "center", fontSize: 21, lineHeight: 25.2 }}
        >
          Height in cm. Don't worry, you can always change it later.
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
            273
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
            274
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#6842FF",
            width: 119,
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
            275
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#6842FF",
            width: 119,
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
            276
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
            277
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
          onPress={() => navigation.navigate("Goal")}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourHeight;

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

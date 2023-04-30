import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import Button from "../../../components/customs/Button";
import TextItem from "../../../components/customs/TextItem";
import EyeCloseIcon from "../../../../assets/EyeCloseIcon.svg";
import MessageIcon from "../../../../assets/MessageIcon.svg";
import LockIcon from "../../../../assets/LockIcon.svg";
import Divider from "../../../components/customs/Divider_v1";
import FacebookIcon from "../../../../assets/facebookIcon.svg";
import GoogleIcon from "../../../../assets/googleIcon.svg";
import AppleIcon from "../../../../assets/appleIcon.svg";

const TextField = ({ style, icon, placeholder, type }) => {
  const [isFocused, setIsFocused] = useState();

  return (
    <View style={{ ...style, position: "relative" }}>
      <View style={{ position: "absolute", top: 23, left: 15, zIndex: 1 }}>
        {icon}
      </View>
      {type === "password" ? (
        <View style={{ position: "absolute", top: 23, right: 23, zIndex: 1 }}>
          <EyeCloseIcon style={{ color: "#B0B2B3" }} />
        </View>
      ) : (
        ""
      )}
      <TextInput
        style={[
          styles.input,
          {
            borderColor: isFocused ? "#6842FF" : "#EEEEEE",
            backgroundColor: isFocused ? "rgba(104, 66, 255, 0.08)" : "#EEEEEE",
          },
        ]}
        placeholder={placeholder}
        // keyboardType="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={type === "password" ?? true}
      />
    </View>
  );
};

const IconBox = ({ icon }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 16,
        borderColor: "#EEEEEE",
        borderWidth: 1,
      }}
    >
      {icon}
    </View>
  );
};

const SignUpScreen = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={{ paddingTop: 100 }}>
      <View style={styles.upperContainer}>
        <TextItem
          type="h1"
          font="bold"
          style={{ marginBottom: 30, marginTop: 0 }}
        >
          Create your Account
        </TextItem>
        <TextField
          style={{ marginBottom: 20 }}
          icon={<MessageIcon />}
          placeholder="Email"
        />
        <TextField
          icon={<LockIcon />}
          placeholder="Password"
          type="password"
          onFocus="#6842FF"
        />
      </View>

      <View style={styles.bottomContainer}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox
            style={{
              borderRadius: 8,
              padding: 8,
              borderColor: "#6842FF",
              borderWidth: 3,
            }}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#6842FF" : undefined}
          />
          <TextItem type="body_m" font="semibold">
            Remember me
          </TextItem>
        </View>
        <Button style={{ width: "90%", marginBottom: 30 }} label="Sign up" />

        <Divider label="or continue with" />

        <View style={{ flexDirection: "row", gap: 15 }}>
          <IconBox icon={<FacebookIcon />} />
          <IconBox icon={<GoogleIcon />} />
          <IconBox icon={<AppleIcon />} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextItem type="body_m" font="semibold" style={{ color: "#9E9E9E" }}>
          Already have an account?
        </TextItem>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <TextItem type="body_m" font="semibold" style={{ color: "#6842FF" }}>
            Sign in
          </TextItem>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  upperContainer: {
    margin: "5%",
  },
  input: {
    height: 60,
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#FAFAFA",
    paddingLeft: 45,
    borderColor: "#FAFAFA",
    borderWidth: 2,
  },
});

export default SignUpScreen;

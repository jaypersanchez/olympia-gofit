import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Button from "../../components/customs/Button";
import TextItem from "../../components/customs/TextItem";
import GoogleIcon from "../../../assets/googleIcon.svg";
import AppleIcon from "../../../assets/appleIcon.svg";
import FacebookIcon from "../../../assets/facebookIcon.svg";
import Divider from "../../components/customs/Divider";

const EntryScreen = ({ navigation }) => {
  const SignInButton = ({ title, onPress, color, icon }) => {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            },
          ]}
          onPress={onPress}
        >
          {icon}
          <TextItem style={styles.buttonText} type="h6" font="semibold">
            {title}
          </TextItem>
        </TouchableOpacity>
      </View>
    );
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic
  };

  const handleAppleSignIn = () => {
    // Handle Apple sign-in logic
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign-in logic
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextItem
        type="h1"
        font="bold"
        style={{ marginBottom: 50, marginTop: 159 }}
      >
        Let's you in
      </TextItem>
      <View style={{ gap: 5 }}>
        <SignInButton icon={<FacebookIcon />} title="Continue with Facebook" />
        <SignInButton icon={<GoogleIcon />} title="Continue with Google" />
        <SignInButton icon={<AppleIcon />} title="Continue with Apple" />
      </View>

      <Divider label="or" />

      <Button
        style={{ width: "90%", marginBottom: 50 }}
        label="Sign in with Password"
        onPress={() => navigation.navigate("Signin")}
      />

      <View style={{ flexDirection: "row" }}>
        <TextItem type="body_m" style={{ color: "#9E9E9E" }}>
          Don't have an account?{" "}
        </TextItem>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <TextItem type="body_m" font="semibold" style={{ color: "#6842FF" }}>
            Sign up
          </TextItem>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    width: 350,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  buttonText: {
    fontSize: 16,
    color: "black",
    fontWeight: 600,
  },
});

export default EntryScreen;

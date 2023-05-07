import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import Button from "../../../components/customs/Button";
import TextItem from "../../../components/customs/TextItem";

import GoogleIcon from "../../../../assets/icons/googleIcon.svg";
import AppleIcon from "../../../../assets/icons/appleIcon.svg";
import FacebookIcon from "../../../../assets/icons/facebookIcon.svg";
import Divider from "../../../components/customs/Divider";
import Logo from "../../../../assets/image/FitSpace-black.png";
import SiginButton from "./components/SiginButton";

const WelcomeAuth = ({ navigation: { navigate } }) => {
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
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 1,
        }}
      >
        <View
          style={{
            gap: 40,
            alignItems: "center",
            justifyContent: "space-between",
            alignSelf: "stretch",
            paddingBottom: 70,
          }}
        >
          <View style={{ gap: 16 }}>
            <SiginButton
              icon={<FacebookIcon />}
              title="Continue with Facebook"
            />
            <SiginButton icon={<GoogleIcon />} title="Continue with Google" />
            <SiginButton icon={<AppleIcon />} title="Continue with Apple" />
          </View>

          <Divider label="or" color="#E0E0E0" />

          <Button
            style={{ width: "100%" }}
            label="Login with Password"
            onPress={() => navigate("Login")}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <TextItem type="body_m" font="semibold" style={{ color: "#9E9E9E" }}>
            {"Don't have an account? "}
          </TextItem>
          <TouchableOpacity onPress={() => navigate("Signup")}>
            <TextItem
              type="body_m"
              font="semibold"
              style={{ color: "#6842FF" }}
            >
              Sign up
            </TextItem>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  logoContainer: {
    width: "100%",
    height: 175,
  },
  logo: {
    height: "65%",
    width: "65%",
    alignSelf: "center",
    flex: 1,
  },
});

export default WelcomeAuth;

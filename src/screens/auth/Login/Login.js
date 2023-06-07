import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import IconBox from "../components/IconBox";
import Button from "../../../components/customs/Button";
import TextItem from "../../../components/customs/TextItem";
import TextField from "../../../components/customs/TextField";

import MessageIcon from "../../../../assets/icons/MessageIcon.svg";
import LockIcon from "../../../../assets/icons/LockIcon.svg";
import Divider from "../../../components/customs/Divider";
import FacebookIcon from "../../../../assets/icons/facebookIcon.svg";
import GoogleIcon from "../../../../assets/icons/googleIcon.svg";
import AppleIcon from "../../../../assets/icons/appleIcon.svg";
import { useDispatch } from "react-redux";
import { resetForm } from "../../../components/redux/slices/signupForm";

const Login = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState(false);

  const handleSignup = () => {
    navigate("Signup");
    dispatch(resetForm());
  };

  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        keyboardShouldPersistTaps="handled"
        decelerationRate="normal"
      >
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={{ width: "100%" }}>
              <TextItem type="h1" font="bold" style={{ width: 270 }}>
                Login your Account
              </TextItem>
            </View>
            <View style={{ gap: 18, width: "100%" }}>
              <TextField icon={<MessageIcon />} placeholder="Email" />
              <TextField
                icon={<LockIcon />}
                placeholder="Password"
                type="password"
                onFocus="#6842FF"
              />
              <View style={{ gap: 24, marginTop: 12 }}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
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
                <Button label="Login" onPress={() => navigate("BottomNav")} />
              </View>
            </View>

            <Divider label="or continue with" color="#E0E0E0" />
            <View style={styles.icons}>
              <IconBox icon={<FacebookIcon />} />
              <IconBox icon={<GoogleIcon />} />
              <IconBox icon={<AppleIcon />} />
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TextItem
              type="body_m"
              font="semibold"
              style={{ color: "#9E9E9E" }}
            >
              {"Already have an account? "}
            </TextItem>
            <TouchableOpacity onPress={handleSignup}>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#ffffff",
    paddingBottom: 48,
    height: "100%",
    gap: 28,
  },
  box: {
    gap: 28,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
  },
  icons: {
    flexDirection: "row",
    gap: 15,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Login;

import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import React, { useReducer } from "react";
import Button from "../../../components/customs/Button";
import TextItem from "../../../components/customs/TextItem";
import TextField from "../../../components/customs/TextField";
import IconBox from "../components/IconBox";

import FacebookIcon from "../../../../assets/icons/facebookIcon.svg";
import GoogleIcon from "../../../../assets/icons/googleIcon.svg";
import AppleIcon from "../../../../assets/icons/appleIcon.svg";
import MessageIcon from "../../../../assets/icons/MessageIcon.svg";
import LockIcon from "../../../../assets/icons/LockIcon.svg";
import UserIcon from "../../../../assets/icons/UserIcon.svg";

import useFormStepper from "../../../components/hooks/useFormStepper";
import Divider from "../../../components/customs/Divider";
import ProgressBarStepper from "../../../components/customs/ProgressBarStepper";

const Signup = ({ navigation: { navigate } }) => {
  const SignUpFormLength = 3;
  const [step, setSteps] = useFormStepper(SignUpFormLength);

  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1, paddingTop: 24 }}>
      <ProgressBarStepper
        steps={SignUpFormLength}
        activeSteps={step?.active}
        height={4}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        keyboardShouldPersistTaps="handled"
        decelerationRate="normal"
      >
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={{ width: "100%" }}>
              <TextItem type="h1" font="bold" style={{ width: 270 }}>
                Create your Account
              </TextItem>
            </View>
            <View style={{ gap: 18, width: "100%" }}>
              {step?.active === 1 && (
                <>
                  <TextField
                    icon={<UserIcon size={18} color="#9E9E9E" />}
                    placeholder="First Name"
                  />
                  <TextField
                    icon={<UserIcon size={18} color="#9E9E9E" />}
                    placeholder="Last Name"
                  />
                  <View style={{ marginTop: 24 }}>
                    <Button
                      label="Continue"
                      onPress={() => setSteps({ active: 1 })}
                    />
                  </View>
                </>
              )}

              {step.active === 2 && (
                <>
                  <TextField icon={<MessageIcon />} placeholder="Email" />
                  <TextField
                    icon={<MessageIcon />}
                    placeholder="Retype Email"
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 24,
                      columnGap: 12,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      label="Back"
                      style={{ width: "47%" }}
                      btnColor="#F0ECFF"
                      btnTextColor="#6842FF"
                      onPress={() => setSteps({ active: -1 })}
                    />
                    <Button
                      label="Continue"
                      style={{ width: "47%" }}
                      onPress={() => setSteps({ active: 1 })}
                    />
                  </View>
                </>
              )}

              {step?.active === 3 && (
                <>
                  <TextField
                    icon={<LockIcon />}
                    placeholder="Password"
                    type="password"
                    onFocus="#6842FF"
                  />
                  <TextField
                    icon={<LockIcon />}
                    placeholder="Retype Password"
                    type="password"
                    onFocus="#6842FF"
                  />
                  <View style={{ marginTop: 24 }}>
                    <Button
                      label="Sign up"
                      onPress={() => navigate("Onboarding")}
                    />
                  </View>
                </>
              )}
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
            <TouchableOpacity onPress={() => navigate("Login")}>
              <TextItem
                type="body_m"
                font="semibold"
                style={{ color: "#6842FF" }}
              >
                Login
              </TextItem>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;

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

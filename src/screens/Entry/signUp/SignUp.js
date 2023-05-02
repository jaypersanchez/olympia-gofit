import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useReducer } from "react";
import Button from "../../../components/customs/Button";
import TextItem from "../../../components/customs/TextItem";
import TextField from "../../../components/customs/TextField";
import IconBox from "./components/IconBox";

import FacebookIcon from "../../../../assets/facebookIcon.svg";
import GoogleIcon from "../../../../assets/googleIcon.svg";
import AppleIcon from "../../../../assets/appleIcon.svg";
import MessageIcon from "../../../../assets/MessageIcon.svg";
import LockIcon from "../../../../assets/LockIcon.svg";
import UserIcon from "../../../../assets/UserIcon.svg";
import Divider from "../../../components/customs/Divider";
import ProgressBarStepper from "../../../components/customs/ProgressBarStepper";
import useSignUpFormStepper from "../../../components/hooks/useSignupFormStepper";

const SignUp = ({ navigation }) => {
  const SignUpFormLength = 12;
  const [step, setSteps] = useSignUpFormStepper(SignUpFormLength);

  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <ProgressBarStepper steps={SignUpFormLength} activeSteps={step?.active} />
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
              {step?.active === 0 && (
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

              {step.active === 1 && (
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

              {step?.active === 2 && (
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
                      onPress={() =>
                        navigation.navigate("AccountSetup", {
                          screen: "AboutYou",
                          activeStep: 2,
                        })
                      }
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
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
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
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <View
    //     style={{
    //       position: "absolute",
    //       top: 0,
    //       left: 0,
    //       right: 0,
    //       backgroundColor: "#E0E0E0",
    //     }}
    //   >
    //     <View
    //       style={{
    //         height: 4,
    //         backgroundColor: "#6842FF",
    //         width: "0%",
    //         borderRadius: 100,
    //       }}
    //     />
    //   </View>
    //   <View style={styles.box}>
    //     <View style={{ width: "100%" }}>
    //       <TextItem type="h1" font="bold" style={{ width: 270 }}>
    //         Create your Account
    //       </TextItem>
    //     </View>
    //     <View style={{ gap: 18, width: "100%" }}>
    //       <TextField
    //         icon={<UserIcon size={18} color="#9E9E9E" />}
    //         placeholder="First Name"
    //       />
    //       <TextField
    //         icon={<UserIcon size={18} color="#9E9E9E" />}
    //         placeholder="Last Name"
    //       />
    //       <View style={{ marginTop: 24 }}>
    //         <Button
    //           label="Continue"
    //           onPress={() => navigation.navigate("Age")}
    //         />
    //       </View>
    //     </View>

    //     <Divider label="or" color="#E0E0E0" />
    //     <View style={styles.icons}>
    //       <IconBox icon={<FacebookIcon />} />
    //       <IconBox icon={<GoogleIcon />} />
    //       <IconBox icon={<AppleIcon />} />
    //     </View>
    //   </View>
    //   <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" enabled>
    //     <View style={{ flexDirection: "row", justifyContent: "center" }}>
    //       <TextItem type="body_m" font="semibold" style={{ color: "#9E9E9E" }}>
    //         {"Already have an account? "}
    //       </TextItem>
    //       <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
    //         <TextItem
    //           type="body_m"
    //           font="semibold"
    //           style={{ color: "#6842FF" }}
    //         >
    //           Login
    //         </TextItem>
    //       </TouchableOpacity>
    //     </View>
    //   </KeyboardAvoidingView>
    // </SafeAreaView>
  );
};

export default SignUp;

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

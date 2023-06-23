import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addField,
  resetForm,
  updateForm,
} from "../../../components/redux/slices/onboardingForm";

import useLogin from "../../../components/api/useLogin";

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
import { postLoginUser } from "../../../components/redux/slices/useLogin";

const Login = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.onboardingForm);
  const { loading, error, data } = useSelector((state) => state.login);
  const [isChecked, setChecked] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (data) => {
    return new Promise((resolve, reject) => {
      dispatch(postLoginUser(data))
        .then((val) => {
          console.log("Login successful", val.payload);
          if (val.payload.loggedIn) {
            console.log({ eutrgg: val.payload.user });
            dispatch(updateForm(val.payload.user));
            navigate("BottomNav", { screen: "Home" });
          }
          resolve();
        })
        .catch((error) => reject(error));
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        // const res = await postUser(values);

        await handleLogin(values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleSignup = () => {
    navigate("Signup");
    dispatch(resetForm());
  };

  useLayoutEffect(() => {
    if (user_data.email) {
      formik.setFieldValue("email", user_data.email);
    }
  }, [user_data]);

  console.log(formik.values);
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
              <TextField
                icon={<MessageIcon color="#212121" />}
                placeholder="Email"
                value={formik.values.email}
                onChangeText={formik.handleChange("email")}
                error={
                  Boolean(formik.errors.email) && formik.touched.email
                    ? formik.errors.email
                    : null
                }
                onFieldBlur={() => formik.setFieldTouched("email", true)}
                onFieldFocus={() => formik.setFieldTouched("email", false)}
              />
              <TextField
                icon={<LockIcon color="#212121" />}
                placeholder="Password"
                type="password"
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                error={
                  Boolean(formik.errors.password) && formik.touched.password
                    ? formik.errors.password
                    : null
                }
                onFieldBlur={() => formik.setFieldTouched("password", true)}
                onFieldFocus={() => formik.setFieldTouched("password", false)}
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
                <Button
                  label="Login"
                  onPress={formik.handleSubmit}
                  disabled={loading}
                />
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

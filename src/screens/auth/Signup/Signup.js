import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import React, { useReducer, useState } from "react";
import Button from "../../../components/customs/Button";
import TextItem from "../../../components/customs/TextItem";
import TextField from "../../../components/customs/TextField";
import IconBox from "../components/IconBox";
import { useFormik } from "formik";
import * as Yup from "yup";

import FacebookIcon from "../../../../assets/icons/facebookIcon.svg";
import GoogleIcon from "../../../../assets/icons/googleIcon.svg";
import AppleIcon from "../../../../assets/icons/appleIcon.svg";
import MessageIcon from "../../../../assets/icons/MessageIcon.svg";
import LockIcon from "../../../../assets/icons/LockIcon.svg";
import UserIcon from "../../../../assets/icons/UserIcon.svg";

import useFormStepper from "../../../components/hooks/useFormStepper";
import Divider from "../../../components/customs/Divider";
import ProgressBarStepper from "../../../components/customs/ProgressBarStepper";
import { useDispatch } from "react-redux";
import { addField } from "../../../components/redux/slices/onboardingForm";
import {
  postNewUser,
  postUserData,
} from "../../../components/redux/slices/useSignup";

const Signup = ({ navigation: { navigate } }) => {
  const SignUpFormLength = 3;
  const dispatch = useDispatch();
  const [step, setSteps] = useFormStepper(SignUpFormLength);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "First name must be at least 3 characters long")
      .required("First name is required"),
    surname: Yup.string()
      .min(3, "Last name must be at least 3 characters long")
      .required("Last name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    reEmail: Yup.string()
      .email("Enter a valid email")
      .oneOf([Yup.ref("email"), null], "Emails do not match")
      .required("Email confirmation is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .min(6, "Password must be at least 6 characters long")
      .required("Password confirmation is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      reEmail: "",
      password: "",
      rePassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        const { reEmail, rePassword, ...userData } = values;

        dispatch(postNewUser(userData));
        console.log("values", userData);
        navigate("Onboarding");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleNext = (fields) => {
    const { errors } = formik;

    const fieldsWithErrors = fields.filter((field) => errors[field]);
    console.log("Fields with errors:", fieldsWithErrors.length);

    if (!fieldsWithErrors.length > 0) {
      setSteps({ active: 1 });
    }
  };
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
                    icon={<UserIcon size={18} color="#212121" />}
                    placeholder="First Name"
                    value={formik.values.name}
                    onChangeText={formik.handleChange("name")}
                    onFieldBlur={() => formik.setFieldTouched("name", true)}
                    error={
                      Boolean(formik.errors.name) && formik.touched.name
                        ? formik.errors.name
                        : null
                    }
                    onFieldFocus={() => formik.setFieldTouched("name", false)}
                  />
                  <TextField
                    icon={<UserIcon size={18} color="#212121" />}
                    placeholder="Last Name"
                    value={formik.values.surname}
                    onChangeText={formik.handleChange("surname")}
                    error={
                      Boolean(formik.errors.surname) && formik.touched.surname
                        ? formik.errors.surname
                        : null
                    }
                    onFieldBlur={() => formik.setFieldTouched("surname", true)}
                    onFieldFocus={() =>
                      formik.setFieldTouched("surname", false)
                    }
                  />
                  <View style={{ marginTop: 24 }}>
                    <Button
                      label="Continue"
                      onPress={() => handleNext(["name", "surname"])}
                      disabled={
                        !Boolean(formik.values.surname) ||
                        !Boolean(formik.values.name) ||
                        Boolean(formik.errors.surname) ||
                        Boolean(formik.errors.name)
                      }
                    />
                  </View>
                </>
              )}

              {step.active === 2 && (
                <>
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
                    icon={<MessageIcon color="#212121" />}
                    placeholder="Retype Email"
                    value={formik.values.reEmail}
                    onChangeText={formik.handleChange("reEmail")}
                    error={
                      Boolean(formik.errors.reEmail) && formik.touched.reEmail
                        ? formik.errors.reEmail
                        : null
                    }
                    onFieldBlur={() => formik.setFieldTouched("reEmail", true)}
                    onFieldFocus={() =>
                      formik.setFieldTouched("reEmail", false)
                    }
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
                      onPress={() => handleNext(["email", "reEmail"])}
                      disabled={
                        !Boolean(formik.values.email) ||
                        !Boolean(formik.values.reEmail) ||
                        Boolean(formik.errors.email) ||
                        Boolean(formik.errors.reEmail)
                      }
                    />
                  </View>
                </>
              )}

              {step?.active === 3 && (
                <>
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
                    onFieldFocus={() =>
                      formik.setFieldTouched("password", false)
                    }
                  />
                  <TextField
                    icon={<LockIcon color="#212121" />}
                    placeholder="Retype Password"
                    type="password"
                    value={formik.values.rePassword}
                    onChangeText={formik.handleChange("rePassword")}
                    error={
                      Boolean(formik.errors.rePassword) &&
                      formik.touched.rePassword
                        ? formik.errors.rePassword
                        : null
                    }
                    onFieldBlur={() =>
                      formik.setFieldTouched("rePassword", true)
                    }
                    onFieldFocus={() =>
                      formik.setFieldTouched("rePassword", false)
                    }
                  />
                  <View style={{ marginTop: 24 }}>
                    <Button
                      label="Sign up"
                      onPress={formik.handleSubmit}
                      disabled={
                        !Boolean(formik.values.password) ||
                        !Boolean(formik.values.rePassword) ||
                        Boolean(formik.errors.password) ||
                        Boolean(formik.errors.rePassword)
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

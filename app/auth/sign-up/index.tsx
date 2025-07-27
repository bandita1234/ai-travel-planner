import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { useRouter, type Href } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/FirebaseConfig";

const SignUp = () => {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Validation
  const validateName = (text: string) => {
    if (!text || text.length < 3) {
      setNameError("Name must be at least 3 characters.");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (text: string) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!text || !emailRegex.test(text)) {
      setEmailError("Please enter a valid email.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (text: string) => {
    if (!text || text.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const isButtonDisabled =
    Boolean(nameError) ||
    Boolean(emailError) ||
    Boolean(passwordError) ||
    !name ||
    !email ||
    !password;

  const OnCreateAccount = () => {
    if (isButtonDisabled) {
      ToastAndroid.show(
        "Please fix errors before submitting!",
        ToastAndroid.LONG
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          router.replace("/myTrips");
        }
        console.log("User created:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);

        if (errorCode === "auth/email-already-in-use") {
          ToastAndroid.show("Email already in use.", ToastAndroid.LONG);
        }
      });
  };

  return (
    <View
      style={{ backgroundColor: Colors.WHITE,padding: 25, paddingTop: 70, flexGrow: 1 }}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginTop: 40,
          color:Colors.TEXT
        }}
      >
        Create New Account
      </Text>

      {/* Full Name Field */}
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: "outfit-medium" }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Full Name"
          placeholderTextColor="#999"
          onChangeText={(value) => {
            setName(value);
            validateName(value);
          }}
        />
        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
      </View>

      {/* Email Field */}
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontFamily: "outfit-medium" }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          placeholderTextColor="#999"
          onChangeText={(value) => {
            setEmail(value);
            validateEmail(value);
          }}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>

      {/* Password Field */}
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontFamily: "outfit-medium" }}>Password</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            secureTextEntry={!showPassword}
            style={styles.input}
            placeholder="Enter Your Password"
            placeholderTextColor="#999"
            onChangeText={(value) => {
              setPassword(value);
              validatePassword(value);
            }}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 15,
              top: 16,
            }}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color={Colors.PRIMARY_DARK}
            />
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
      </View>

      {/* Create Account Button */}
      <TouchableOpacity
        style={[
          styles.button,
          {
            marginTop: 50,
            backgroundColor: isButtonDisabled ? "#ccc" : Colors.PRIMARY,
          },
        ]}
        disabled={isButtonDisabled}
        onPress={OnCreateAccount}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-in" as Href)}
        style={styles.outlineButton}
      >
        <Text style={{ color: Colors.PRIMARY, textAlign: "center" , fontFamily: "outfit-medium",fontSize:16 }}>
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
    marginTop: 8,
  },
  errorText: {
    color: "red",
    marginTop: 5,
    fontSize: 12,
    fontFamily: "outfit-medium",
  },
  button: {
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.WHITE,
    textAlign: "center",
    fontFamily: "outfit-medium",
    fontSize: 16,
  },
  outlineButton: {
    padding: 20,
    marginTop: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.GRAY,
  },
});

export default SignUp;

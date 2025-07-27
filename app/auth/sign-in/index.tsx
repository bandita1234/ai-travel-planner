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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/FirebaseConfig";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const validateEmail = (text: string) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    setEmailError(
      !text || !emailRegex.test(text) ? "Please enter a valid email." : ""
    );
  };

  const validatePassword = (text: string) => {
    setPasswordError(
      !text || text.length < 6 ? "Password must be at least 6 characters." : ""
    );
  };

  const isButtonDisabled = Boolean(
    emailError || passwordError || !email || !password
  );

  const onSignIn = () => {
    if (isButtonDisabled) {
      ToastAndroid.show(
        "Please fix errors before submitting!",
        ToastAndroid.LONG
      );
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user) router.replace("/myTrips");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          ToastAndroid.show("Invalid Credentials", ToastAndroid.LONG);
        }
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 70,
        backgroundColor: Colors.WHITE,
        flexGrow: 1,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          color: Colors.TEXT,
          marginTop: 40,
        }}
      >
        Welcome Back!
      </Text>
      <Text style={styles.subHeading}>We’ve Missed You.</Text>
      <Text style={styles.subHeading}>Let’s Get Started!</Text>

      {/* Email Field */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit-medium" }}>Email</Text>
        <TextInput
          style={[
            styles.input,
            // focusedInput === "email" && { borderColor: Colors.PRIMARY },
          ]}
          placeholder="Enter Your Email"
          placeholderTextColor="#999"
          // onFocus={() => setFocusedInput("email")}
          // onBlur={() => setFocusedInput(null)}
          onChangeText={(value) => {
            setEmail(value);
            validateEmail(value);
          }}
        />
        {emailError.length > 0 && (
          <Text style={styles.errorText}>{emailError}</Text>
        )}
      </View>

      {/* Password Field */}
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontFamily: "outfit-medium" }}>Password</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            secureTextEntry={!showPassword}
            style={[
              styles.input,
              // focusedInput === "password" && { borderColor: Colors.PRIMARY },
            ]}
            placeholder="Enter Your Password"
            placeholderTextColor="#999"
            // onFocus={() => setFocusedInput("password")}
            // onBlur={() => setFocusedInput(null)}
            onChangeText={(value) => {
              setPassword(value);
              validatePassword(value);
            }}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ position: "absolute", right: 15, top: 16 }}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color={Colors.PRIMARY_DARK}
            />
          </TouchableOpacity>
        </View>
        {passwordError.length > 0 && (
          <Text style={styles.errorText}>{passwordError}</Text>
        )}
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        style={[
          styles.button,
          {
            marginTop: 50,
            backgroundColor: isButtonDisabled ? "#ccc" : Colors.PRIMARY,
          },
        ]}
        disabled={isButtonDisabled}
        onPress={onSignIn}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Create Account */}
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-up" as const)}
        style={styles.outlineButton}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            textAlign: "center",
            fontFamily: "outfit-medium",
            fontSize: 16,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeading: {
    fontFamily: "outfit",
    fontSize: 20,
    color: Colors.TEXT_SECONDARY,
    marginTop: 15,
  },
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

export default Login;

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

  // Validation functions
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
        // Signed up
        const user = userCredential.user;
        if(user){
          router.replace('/myTrips')
        }
        console.log("User created:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);

        if (errorCode === "auth/email-already-in-use") {
          ToastAndroid.show("Email already in use.",ToastAndroid.LONG);
        }  
      });
      
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginTop: 40,
        }}
      >
        Create New Account
      </Text>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <Text style={{ fontFamily: "outfit " }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Full Name"
          onChangeText={(value) => {
            setName(value);
            validateName(value);
          }}
        />
        {nameError ? <Text style={{ color: "red" }}>{nameError}</Text> : null}
      </View>
      <View
        style={{
          marginTop: 15,
        }}
      >
        <Text style={{ fontFamily: "outfit " }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          onChangeText={(value) => {
            setEmail(value);
            validateEmail(value);
          }}
        />
        {emailError ? <Text style={{ color: "red" }}>{emailError}</Text> : null}
      </View>
      <View
        style={{
          marginTop: 15,
        }}
      >
        <Text>Password</Text>
        <View style={{position:"relative"}}>
          <TextInput
            secureTextEntry={!showPassword}
            style={styles.input}
            placeholder="Enter Your Password"
            onChangeText={(value) => {
              setPassword(value);
              validatePassword(value);
            }}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ position: "absolute", right: 15, top: "35%" }}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={{ color: "red" }}>{passwordError}</Text>
        ) : null}
      </View>

      {/* SignIn Button */}
      <TouchableOpacity
        style={{
          padding: 20,
          marginTop: 50,
          backgroundColor: isButtonDisabled ? "#ccc" : Colors.PRIMARY,
          borderRadius: 20,
        }}
        disabled={isButtonDisabled}
        onPress={OnCreateAccount}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
      {/* SignUp Button */}
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-in" as Href)}
        style={{
          padding: 20,
          marginTop: 30,
          borderRadius: 20,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            textAlign: "center",
          }}
        >
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
  },
});
export default SignUp;

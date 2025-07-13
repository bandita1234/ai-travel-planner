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
    Boolean(emailError) || Boolean(passwordError) || !email || !password;

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
        // Signed in
        const user = userCredential.user;
        if(user){
          router.replace('/myTrips')
        }
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode,errorMessage);

        if (errorCode == "auth/invalid-credential") {
          ToastAndroid.show("Invalid Credentials", ToastAndroid.LONG);
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
          marginTop: 30,
        }}
      >
        Welcome Back!
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 27,
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        We’ve Missed You.
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 27,
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        Let’s Get Started!
      </Text>
      <View
        style={{
          marginTop: 50,
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
        {emailError.length > 0 && (
          <Text style={{ color: "red" }}>{emailError}</Text>
        )}
      </View>
      <View
        style={{
          marginTop: 15,
        }}
      >
        <Text>Password</Text>
        <View style={{ position: "relative" }}>
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
        {passwordError.length > 0 && (
          <Text style={{ color: "red" }}>{passwordError}</Text>
        )}
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
        onPress={onSignIn}
      >
        <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
          Sign In
        </Text>
      </TouchableOpacity>

      {/* SignUp Button */}
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-up" as const)}
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
          Create Account
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

export default Login;

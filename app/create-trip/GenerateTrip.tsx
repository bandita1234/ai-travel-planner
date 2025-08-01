import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { Colors } from "@/constants/Colors";
import { CreateTripContext } from "@/context/CreateTripContext";
import { AI_PROMT } from "@/constants/Options";
import { generateAIPrompt } from "@/utils/generatePrompt";
import { getChat } from "@/config/AiModel";
import { useRouter } from "expo-router";

export default function GenerateTrip() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const context = useContext(CreateTripContext);
  if (!context) throw new Error("Context not found");
  const { trip, setTrip } = context;

  useEffect(() => {
    const generateAITrip = async () => {
      if (!trip) return;

      setLoading(true);
      try {
        const aiPrompt = generateAIPrompt(trip);
        const chat = await getChat();
        const result = await chat.sendMessage({ message: aiPrompt });
        const text = await result.text;

        console.log("Chat response:", text);

        router.push("/(tabs)/myTrips"); 
      } catch (error) {
        console.error("Error in getting Chat Response:", error);
      } finally {
        setLoading(false);
      }
    };
    generateAITrip();
  }, [trip]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Please Wait...</Text>
        <Text style={styles.subtitle}>
          We’re crafting your perfect trip – just a few moments...
        </Text>
      </View>
      <LottieView
        source={require("../../assets/animation/FlyingBee_Loader.json")}
        autoPlay
        loop
        style={styles.lottie}
      />

      <Text style={styles.note}>Please don’t go back or close the app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: "outfit-bold",
    color: Colors.TEXT,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "outfit-medium",
    color: Colors.TEXT_SECONDARY,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  lottie: {
    width: 350,
    height: 350,
  },
  note: {
    fontSize: 14,
    fontFamily: "outfit-medium",
    color: Colors.ACCENT,
    textAlign: "center",
    marginTop: 15,
  },
});

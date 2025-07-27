import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();

  return (
    <View
      style={{
        paddingHorizontal: 25,
        paddingVertical: 40,
        marginTop: 25,
        alignItems: "center",
        backgroundColor: Colors.CARD,
        borderRadius: 20,
        shadowColor: Colors.SHADOW,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        width: "100%",
      }}
    >
      <Ionicons name="location-sharp" size={36} color={Colors.PRIMARY_DARK} />

      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
          textAlign: "center",
          marginTop: 20,
          color: Colors.TEXT,
        }}
      >
        No Trips Yet? Let’s Get Exploring!
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontFamily: "outfit",
          textAlign: "center",
          color: "#4A4A4A", // darker neutral tone for better readability
          marginTop: 20,
          lineHeight: 22,
        }}
      >
        The world is waiting for you. Plan your next trip and make it
        unforgettable!
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/create-trip/SearchPlaces")}
        style={{
          paddingVertical: 15,
          paddingHorizontal: 30,
          marginTop: 40,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 16,
        }}
      >
        <Text
          style={{
            color: Colors.BUTTON_TEXT_PRIMARY,
            fontFamily: "outfit-bold",
            fontSize: 16,
          }}
        >
          Start a New Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}

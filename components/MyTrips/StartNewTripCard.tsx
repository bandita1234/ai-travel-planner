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
        padding: 15,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Ionicons name="location-sharp" size={34} color="black" />
      <Text
        style={{
          fontSize: 18,
          fontFamily: "outfit-medium",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        No Trips Yet? Let’s Get Exploring!
      </Text>

      <View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "outfit",
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 30,
          }}
        >
          The world is waiting for you. Plan your next trip and make it
          unforgettable!
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={()=>router.push("/create-trip/SearchPlaces")}
          style={{
            paddingVertical: 15,
            paddingHorizontal: 25,
            marginTop: 50,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit-medium",
              fontSize: 16,
            }}
          >
            Start a new Trip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

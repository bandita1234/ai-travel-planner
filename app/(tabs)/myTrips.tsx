import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "@/components/MyTrips/StartNewTripCard";

type Trip ={
  id:string,
  destination:string
}

export default function MyTrips() {
  const [tripList, setTripList] = useState<Trip[]>([]);
  return (
    <View
      style={{
        padding: 45,
        marginTop: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
      style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
      }}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "outfit-bold",
          }}
        >
          My Trips
        </Text>
        <TouchableOpacity onPress={() => console.log("Add new trip!")}>
          <Ionicons name="add-circle" size={45} color="black" />
        </TouchableOpacity>
      </View>
      {tripList?.length === 0 ? <StartNewTripCard/> : null}
    </View>
  );
}

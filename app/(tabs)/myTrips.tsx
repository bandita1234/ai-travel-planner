import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "@/components/MyTrips/StartNewTripCard";
import { router } from "expo-router";

type Trip ={
  id:string,
  destination:string
}

export default function MyTrips() {
  const [tripList, setTripList] = useState<Trip[]>([]);
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 80,
        backgroundColor:Colors.WHITE
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
            color:Colors.TEXT
          }}
        >
          My Trips
        </Text>
        <TouchableOpacity onPress={() =>router.push("/create-trip/SearchPlaces")}>
          <Ionicons name="add-circle" size={45} color={Colors.PRIMARY_DARK} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 40, marginBottom: 30 }}>
      {tripList?.length === 0 ? <StartNewTripCard/> : null}
      </View>
    </View>
  );
}
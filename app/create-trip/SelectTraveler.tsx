import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { SelectTravelerList } from "@/constants/Options";
import OptionsCard from "@/components/CreateTrip/OptionsCard";
import { CreateTripContext } from "@/context/CreateTripContext";
import { TravelerOption } from "@/types";

export default function SelectTraveler() {
  const navigation = useNavigation();
  const router = useRouter();
  const [selectedTraveler, setSelectedTraveler] =
    useState<TravelerOption | null>(null);

  const context = useContext(CreateTripContext);
  if (!context) throw new Error("Context not found");

  const { trip, setTrip } = context;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, [navigation]);

  useEffect(() => {
    setTrip({ ...trip, traveler: selectedTraveler });
  }, [selectedTraveler]);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 80,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          color: Colors.TEXT,
          marginTop: 30,
        }}
      >
        Who is joining the trip?
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontFamily: "outfit-medium",
          color: Colors.TEXT_SECONDARY,
          marginTop: 10,
        }}
      >
        Pick who’s going with you!
      </Text>

      <FlatList
        data={SelectTravelerList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedTraveler(item)}>
            <OptionsCard option={item} selectedTraveler={selectedTraveler} />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 100 }}
      />

      <View
        style={{
          position: "absolute",
          bottom: 40,
          left: 25,
          right: 25,
        }}
      >
        <TouchableOpacity
          disabled={!selectedTraveler}
          style={{
            padding: 18,
            backgroundColor: selectedTraveler ? Colors.BUTTON_PRIMARY : Colors.BUTTON_DISABLED,
            borderRadius: 16,
          }}
          onPress={() => router.push("/create-trip/SelectDates")}
        >
          <Text
            style={{
              color: selectedTraveler
                ? Colors.BUTTON_TEXT_PRIMARY
                : Colors.BUTTON_TEXT_DISABLED,
              fontFamily: "outfit-bold",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

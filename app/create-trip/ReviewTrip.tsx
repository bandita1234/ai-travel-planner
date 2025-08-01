import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import { CreateTripContext } from "@/context/CreateTripContext";
import moment from "moment";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const router = useRouter();

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
        Ready for Adventure?
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontFamily: "outfit-medium",
          color: Colors.TEXT_SECONDARY,
          marginTop: 10,
        }}
      >
        Review your trip details and get set to explore!
      </Text>

      {/* Destination */}
      <View
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 25,
          backgroundColor: "#f9f7fc",
          padding: 14,
          borderRadius: 12,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <Text
          style={{
            fontSize: 32,
          }}
        >
          📍
        </Text>
        <View>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 16,
              color: "#6e5f91",
            }}
          >
            Destination
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: Colors.TEXT,
              fontFamily: "outfit-bold",
            }}
          >
            {trip?.name}
          </Text>
        </View>
      </View>

      {/* Traveller */}
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 25,
          backgroundColor: "#f9f7fc",
          padding: 14,
          borderRadius: 12,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <Text
          style={{
            fontSize: 32,
          }}
        >
          🧳
        </Text>
        <View>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 16,
              color: "#6e5f91",
            }}
          >
            Who’s Traveling ?
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: Colors.TEXT,
              fontFamily: "outfit-bold",
            }}
          >
            {trip?.traveler?.title}
          </Text>
        </View>
      </View>

      {/* Travel Date */}
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 25,
          backgroundColor: "#f9f7fc",
          padding: 14,
          borderRadius: 12,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <Text
          style={{
            fontSize: 32,
          }}
        >
          🗓️
        </Text>
        <View>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 16,
              color: "#6e5f91",
            }}
          >
            Travel Date
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: Colors.TEXT,
              fontFamily: "outfit-bold",
            }}
          >
            {moment(trip?.startDate).format("DD MMM") +
              " - " +
              moment(trip?.endDate).format("DD MMM")+" "}
              ({trip?.totalNumberOfDays} days)
          </Text>
        </View>
      </View>

      {/* Budget */}
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 25,
          backgroundColor: "#f9f7fc",
          padding: 14,
          borderRadius: 12,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <Text
          style={{
            fontSize: 32,
          }}
        >
          💰
        </Text>
        <View>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 16,
              color: "#6e5f91",
            }}
          >
            Budget
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: Colors.TEXT,
              fontFamily: "outfit-bold",
            }}
          >
            {trip?.budget}
          </Text>
        </View>
      </View>

      {/* Button */}
      <View
        style={{
          position: "absolute",
          bottom: 40,
          left: 25,
          right: 25,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 18,
            backgroundColor: Colors.BUTTON_PRIMARY,
            borderRadius: 16,
          }}
          onPress={() => router.replace('/create-trip/GenerateTrip')}
        >
          <Text
            style={{
              color: Colors.BUTTON_TEXT_PRIMARY,
              fontFamily: "outfit-bold",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Build My Trip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

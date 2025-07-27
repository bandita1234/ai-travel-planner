import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { CreateTripContext } from "@/context/CreateTripContext";
import { TripPlace } from "@/types";
import { useState } from "react";

export default function RootLayout() {
  const [trip, setTrip] = useState<TripPlace | null>(null);

  const [fontsLoaded] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <CreateTripContext.Provider value={{ trip, setTrip }}>
      <Stack
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </CreateTripContext.Provider>
  );
}

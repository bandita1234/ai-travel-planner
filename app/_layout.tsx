import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'outfit': require("../assets/fonts/Outfit-Regular.ttf"),
    'outfit-medium': require("../assets/fonts/Outfit-Medium.ttf"),
    'outfit-bold': require("../assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

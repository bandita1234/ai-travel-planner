import Landing from "@/components/Landing";
import { auth } from "@/config/FirebaseConfig";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

if (typeof global.structuredClone !== 'function') {
  global.structuredClone = (obj: any) => JSON.parse(JSON.stringify(obj));
}

export default function Index() {
  const user = auth.currentUser;

  return (
    <View style={{ flex: 1 }}>
      {user ? <Redirect href={"/myTrips"} /> : <Landing />}
    </View>
  );
}

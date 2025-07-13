import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="myTrips"
        options={{
          title: 'My Trip',
          tabBarIcon: ({ color }) => <Ionicons name="location-sharp" size={24} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => <FontAwesome6 name="compass" size={24} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'My Profile',
          tabBarIcon: ({ color }) => <Octicons name="person" size={24} color={color}/>,
        }}
      />
    </Tabs>
  );
}

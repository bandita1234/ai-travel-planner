import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Colors } from "@/constants/Colors";
import debounce from "lodash.debounce";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { CreateTripContext } from "@/context/CreateTripContext";
import { useRouter } from "expo-router";

type RootStackParamList = {
  Search: undefined;
};

type SearchScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Search"
>;

type NominatimPlace = {
  place_id: number;
  display_name: string;
  name: string;
  lat: string;
  lon: string;
};

export default function SearchPlaces() {
  const navigation = useNavigation<SearchScreenNavigationProp>();

  const router = useRouter();

  const context = useContext(CreateTripContext);

  if (!context) throw new Error("Context not found");

  const { trip, setTrip } = context;

  const [query, setQuery] = useState<string>("");
  const [places, setPlaces] = useState<NominatimPlace[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, [navigation]);

  //   useEffect(() => {
  //     console.log("trip===",trip);
  //   }, [trip])

  const searchPlaces = async (text: string) => {
    // setQuery(text);
    if (text.length < 3) {
      setPlaces([]);
      return;
    }
    try {
      const response = await fetch(
        `${
          process.env.EXPO_PUBLIC_NOMINATIM_BASE_URL
        }/search?format=json&q=${encodeURIComponent(text)}`,
        {
          headers: {
            "User-Agent": process.env.EXPO_PUBLIC_NOMINATIM_USER_AGENT ?? "",
            Accept: "application/json",
          },
        }
      );

      const results: NominatimPlace[] = await response.json();
      setPlaces(results);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  const debouncedSearchPlaces = useCallback(
    debounce((text: string) => {
      searchPlaces(text);
    }, 400),
    []
  );

  const handlePlaceSelect = (place: NominatimPlace) => {
    setQuery(place.display_name);
    setPlaces([]);
    console.log("Selected place:", place);
    setTrip({
      place_name: place.display_name,
      name: place.name,
      lat: place.lat,
      lon: place.lon,
    });
    router.push("/create-trip/SelectTraveler");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search place"
          value={query}
          onChangeText={(text) => {
            setQuery(text);
            debouncedSearchPlaces(text);
          }}
          style={styles.input}
        />
        {query.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              setQuery("");
              setPlaces([]);
            }}
          >
            <MaterialIcons
              name="clear"
              size={20}
              color="gray"
              style={styles.clearIcon}
            />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={places}
        keyExtractor={(item) => item.place_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePlaceSelect(item)}>
            <Text style={styles.placeText}>{item.display_name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 120,
    height: "100%",
    backgroundColor:Colors.WHITE
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 55,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  

  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "outfit",
    color: "#333",
  },  

  clearIcon: {
    marginLeft: 8,
    padding:5
  },
  placeText: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    fontSize: 15,
    fontFamily: "outfit-medium",
    color: "#444",
  },
});

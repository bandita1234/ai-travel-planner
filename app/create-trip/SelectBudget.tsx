import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import OptionsCard from "@/components/CreateTrip/OptionsCard";
import { SelectBudgetOptions } from "@/constants/Options";
import { BudgetOption } from "@/types";
import { Colors } from "@/constants/Colors";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectBudget() {
  const navigation = useNavigation();

  const router = useRouter();

  const [selectedBudget, setSelectedBudget] = useState<BudgetOption | null>(
    null
  );

  const context = useContext(CreateTripContext);
  if (!context) throw new Error("Context not found");

  const { trip, setTrip } = context;

  const handleBudgetContinue = () => {
    if (selectedBudget) {
      setTrip({
        ...trip,
        budget: selectedBudget?.title,
      });
    }
    router.push("/create-trip/ReviewTrip");
  };

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
        What’s Your Budget?
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontFamily: "outfit-medium",
          color: Colors.TEXT_SECONDARY,
          marginTop: 10,
        }}
      >
        Select the spending level that best fits your lifestyle
      </Text>

      <FlatList
        data={SelectBudgetOptions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedBudget(item)}>
            <OptionsCard option={item} selectedOption={selectedBudget} />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingTop: 30, paddingBottom: 100 }}
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
          disabled={!selectedBudget}
          style={{
            padding: 18,
            backgroundColor: selectedBudget
              ? Colors.BUTTON_PRIMARY
              : Colors.BUTTON_DISABLED,
            borderRadius: 16,
          }}
          onPress={() => handleBudgetContinue()}
        >
          <Text
            style={{
              color: selectedBudget
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

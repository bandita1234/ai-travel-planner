import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { TravelerOption } from "@/types";

type Props = {
  option: TravelerOption;
  selectedTraveler: TravelerOption | null;
};

export default function OptionsCard({ option, selectedTraveler }: Props) {
  const isSelected = selectedTraveler?.id === option.id;

  return (
    <View style={[styles.card, isSelected && styles.selectedCard]}>
      <Text style={styles.icon}>{option.icon}</Text>
      <View>
        <Text style={styles.title}>{option.title}</Text>
        <Text style={styles.desc}>{option.desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: Colors.CARD,
    borderRadius: 18,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    // borderWidth: 1,
    borderColor: Colors.BORDER,

    // Shadow for iOS
    shadowColor: Colors.SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    // Shadow for Android
    elevation: 3,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
  },
  icon: {
    fontSize: 32,
    marginRight: 12,
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 18,
    color: Colors.TEXT,
  },
  desc: {
    fontSize: 14,
    color: '#6e5f91',
    fontFamily: "outfit-medium",
  },
});

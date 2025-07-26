import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { TravelerOption } from "@/types";

type Props = {
  option: TravelerOption;
  selectedTraveler: TravelerOption | null;
};

export default function OptionsCard({ option, selectedTraveler }: Props) {
  const isSelected = selectedTraveler?.id == option.id;
  return (
    <View style={[styles.card, isSelected && {borderWidth:2}]}>
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
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 18,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icon: {
    fontSize: 32,
    marginRight: 12,
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 18,
  },
  desc: {
    fontSize: 14,
    color: Colors.GRAY,
  },
});

import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from "@/constants/Colors";
import moment from "moment";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectDates() {
  const navigation = useNavigation();
  const router = useRouter();

  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
    null
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

    const context = useContext(CreateTripContext);
    if (!context) throw new Error("Context not found");
  
    const { trip, setTrip } = context;

  const onDateChange = (date: Date, type: string) => {
    if (type === "END_DATE") {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const handleDateSelect = () => {
    if (selectedStartDate && selectedEndDate) {
      const totalDays = moment(selectedEndDate).diff(moment(selectedStartDate), "days");
      console.log("Total days selected:", totalDays+1);
      setTrip({
        ...trip,
        startDate:selectedStartDate,
        endDate:selectedEndDate,
        totalNumberOfDays:totalDays+1
      })
      router.push('/create-trip/SelectBudget')
    }
  };  

  const isButtonDisabled = !selectedStartDate || !selectedEndDate;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, [navigation]);

  // useEffect(() => {
  //   if (selectedStartDate && selectedEndDate) {
  //     console.log("Start:", selectedStartDate);
  //     console.log("End:", selectedEndDate);
  //   }
  // }, [selectedStartDate, selectedEndDate]);
  

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
          marginTop: 30,
          marginBottom: 30,
          color: Colors.TEXT,
        }}
      >
        Select Travel Dates
      </Text>

      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        onDateChange={onDateChange}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
        minDate={new Date()}
        maxRangeDuration={7}
        todayBackgroundColor={Colors.LIGHT_GRAY}
        selectedDayColor={Colors.PRIMARY}
        selectedDayTextColor={Colors.WHITE}
        textStyle={{
          fontFamily: "outfit",
          color: "#333",
        }}
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
          disabled={isButtonDisabled}
          style={{
            padding: 18,
            backgroundColor: !isButtonDisabled
              ? Colors.BUTTON_PRIMARY
              : Colors.BUTTON_DISABLED,
            borderRadius: 16,
          }}
          onPress={() => handleDateSelect()}
        >
          <Text
            style={{
              color: !isButtonDisabled
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

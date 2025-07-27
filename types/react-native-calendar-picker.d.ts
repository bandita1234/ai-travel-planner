declare module 'react-native-calendar-picker' {
    import { Component } from 'react';
    import { ViewStyle, TextStyle } from 'react-native';
  
    interface CalendarPickerProps {
      startFromMonday?: boolean;
      allowRangeSelection?: boolean;
      onDateChange?: (date: Date, type: 'START_DATE' | 'END_DATE') => void;
      selectedStartDate?: Date | null;
      selectedEndDate?: Date | null;
      minDate?: Date;
      maxDate?: Date;
      maxRangeDuration?: number;
      selectedDayColor?: string;
      selectedDayTextColor?: string;
      textStyle?: TextStyle;
      todayBackgroundColor?: string;
      selectedRangeStartStyle?: ViewStyle;
      selectedRangeEndStyle?: ViewStyle;
      // Add more props if needed
    }
  
    export default class CalendarPicker extends Component<CalendarPickerProps> {}
  }
  
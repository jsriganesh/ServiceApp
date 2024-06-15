import React, { useEffect, useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import styled from 'styled-components/native';



interface DateTimePickerComponentProps {
    mode:'date' | 'time',
    updateDate:(date:Date)=> void
    date:Date
  }
  
  const DateTimePickerComponent = ({mode,date,updateDate}: DateTimePickerComponentProps) => {
  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'set') {
      const currentDate = selectedDate || date;
    //   setShow(Platform.OS === 'ios');
    //   setDate(currentDate);
    updateDate(currentDate)
    } else {
    //   setShow(false);
    }
  };

  return (
    <View>
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      </View>
  );
};

export default DateTimePickerComponent;

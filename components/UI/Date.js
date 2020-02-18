import React, { useState , useEffect} from "react";
import { View, Text, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const DateComp = (props) => {
  const [date, setDate] = useState(new Date());

  const [show, setShow] = useState(false);

  console.log(show);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const {onChangeText }=props

  useEffect(() => {
    onChangeText(date)

  
  }, [date , onChange]);

  return (
    <View>
     
      <View
      style={{alignItems:"center"}}>
      <Text
     onPress={() => setShow(true)}
     style={{fontSize:24}}> {moment.utc(date).format('DD/MM/YYYY')}</Text>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateComp;

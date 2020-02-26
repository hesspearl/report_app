import React, { useState , useEffect} from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import {FontAwesome} from "@expo/vector-icons"

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
  onChangeText(moment.utc(date).format('DD/MM/YYYY'))
}, [date])

  return (
    <View>
     
      <View
      style={styles.container}>
      <Text
     onPress={() => setShow(true)}
     style={{fontSize:24, paddingRight:10}}> {moment.utc(date).format('DD/MM/YYYY')}</Text>
     <FontAwesome
       name="calendar"
       size={20}
     />
     
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

const styles=StyleSheet.create({
  container:{
    borderWidth:1,
       marginHorizontal:20,
       padding:20,
       alignItems:"center", 
       flexDirection:"row",
       justifyContent:"center"
     
  }
})
export default DateComp;

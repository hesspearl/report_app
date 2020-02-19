import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

const DropDown = props => {
  const [selected, setSelected] = useState("Niterói");

  console.log(selected);
  const picks = [
    "Niterói",
    " São Gonçalo",
    "Magé",
    "Serrana",
    "Sul",
    " Macaé",
    " Lagos",
    " Campos"
  ];

  const { onChangeText } = props;
  useEffect(() => {
    
    onChangeText(selected);
  }, [selected]);

  return (
      <View
      style={{marginVertical:10, marginHorizontal:30}}>
    <Picker
      selectedValue={selected}
      onValueChange={value => setSelected(value)}
    >
      {picks.map((value, index) => (
        <Picker.Item key={index} label={value} value={value} />
      ))}
    </Picker>
    </View>
  );
};

const styles = StyleSheet.create({});
export default DropDown;

import React from "react";
import { View, StyleSheet ,TouchableOpacity } from "react-native";

import { FAB } from "react-native-paper";
import Color from "../../Styles/Colors";

const ButtonStyle = props => {
  return (
  
      <FAB
        icon={props.iconName}
        
        onPress={props.onSelect}
        color={props.color? props.color :"white"}
        style={{...styles.btn ,...props.style}}
      />

  );
};

const styles = StyleSheet.create({
  btn: {
    
      backgroundColor:Color.progressBackground,
      borderColor:"black",
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 8,
      elevation:8,
        width:60,
        height:60

         
       
  },
  btnContain: {
  //  margin: 10,
   
  
  }
});

export default ButtonStyle;

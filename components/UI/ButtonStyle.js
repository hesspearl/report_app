import React from "react";
import { View, StyleSheet } from "react-native";

import { FAB } from "react-native-paper";
import Color from "../../Styles/Colors";

const ButtonStyle = props => {
  return (
    <View style={styles.btnContain}>
      <FAB
        icon={props.iconName}
        onPress={props.onSelect}
        color={props.color? props.color :"white"}
        style={{...styles.btn ,...props.style}}
      />
    </View>
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
         position: "relative",
     //    margin: 16,
         right: 0,
         bottom: 0,
         
       
  },
  btnContain: {
  //  margin: 10,
    width: "16%",
  
  }
});

export default ButtonStyle;

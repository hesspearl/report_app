import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Description= props =>{
return (

 
    <View style={styles.buttonContainer}>
    <View style={styles.bubble}>
      <Text>Tap on marker to make report</Text>
    </View>
  </View>
 
)
}

const styles= StyleSheet.create({
    bubble: {
        //flex: 1,
        alignItems:"center",
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
       // 
      },
      buttonContainer: {
        width:"65%",
      //  flexDirection: 'row',
       // marginVertical: 20,
      // marginHorizontal:5,
       //marginLeft:20,
        backgroundColor: 'transparent',
      //alignContent:"center",
   //  justifyContent:"center",
      },
  
  
      
})
export default Description;
/*
  <View style={styles.Container}>
    {props.children}
*/
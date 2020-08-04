import React from 'react'
import {View , StyleSheet} from "react-native"
import Reinput from 'reinput-expo'
import Color from "../../Styles/Colors"


const InputPage= props =>{
return (
    <View style={{...styles.container,...props.style}}>
    <Reinput 
    label="name"
    onChangeText={props.onChangeText}
    value={props.value}
    onEndEditing={props.onEndEditing}
    
    {
    ...props
    }
    underlineActiveColor={Color.line}
    style={styles.textInputDesign}
    labelActiveColor={Color.line}
    
    />
    
   
  </View>
)
}

const styles= StyleSheet.create({

    textInputDesign:{
        width: 300,
        fontSize:20
      
    },
    container:{
       
        alignItems:"center",
        margin:10
    }
})
export default InputPage;
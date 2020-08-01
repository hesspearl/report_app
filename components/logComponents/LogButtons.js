import React from 'react'
import {  StyleSheet } from 'react-native';
import MainButton from "../UI/MainButton";
import Colors from "../../Styles/Colors";

const LogButtons= props =>{
return (

        <MainButton 
        {...props}
        style={styles.button} 
        btnStyle={{...styles.btnStyle , ...props.btnStyle}}>
        {props.children}
        </MainButton>
     
)
}

const styles= StyleSheet.create({
    button: {
        width: "90%",
        margin: 5
      },
      btnStyle: {
        backgroundColor: Colors.mainColor,
        height: 70
      }
})
export default LogButtons;
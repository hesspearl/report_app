import React from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';

import Colors from '../../Styles/Colors';

const LogLayout= props =>{
return (
  <KeyboardAvoidingView

 style={{...styles.logStyle,...props.style}}
  >
  <ScrollView>
<View style={{alignItems: "center",}}>

<Text style={styles.Title}>{props.title} </Text>
    {props.children}
</View>
</ScrollView>
</KeyboardAvoidingView>)
}

const styles= StyleSheet.create({
    logStyle: {
      backgroundColor:Colors.backgroundLayout,
        
        marginTop: 30,
        marginBottom: 10,
        marginHorizontal:10,
        paddingHorizontal:10,
        paddingTop: 50,
        flex: 1,
        borderColor: Colors.mainColor,
        borderWidth: 3,
        borderRadius: 101,
        overflow: "hidden",
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 8,
        
        
      },
      Title: {
        marginBottom:20,
        fontSize: 35,
        fontWeight: "bold"
      },
})
export default LogLayout;
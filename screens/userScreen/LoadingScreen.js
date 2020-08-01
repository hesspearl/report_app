import React , {useEffect} from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading= props =>{

    

useEffect(() => {
  
    const timer = setTimeout(() => {
        props.navigation.navigate("ProgressSteps")
      }, 1000);
      return () => clearTimeout(timer);

    
}, [])
return (
 
      <View style={{backgroundColor:"white"}}>
      <ActivityIndicator
        size="large"
     
      />
      </View>
)

}

const styles= StyleSheet.create({})
export default Loading;
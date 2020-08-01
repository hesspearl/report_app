import React from "react";
import {
  View,
  StyleSheet,
  Text
} from "react-native";
import BottomDrawer from "rn-bottom-drawer"

import TextComp from "../../components/UI/TextComp";
import Color from "../../Styles/Colors"


const TAB_BAR_HEIGHT =70;
//const HEADER_HEIGHT = 30;


const ViewDrawer = props => {


  renderContent=()=>{
    return(
      <View style={styles.text}>
    <TextComp
      style={styles.user}>{props.idInfo.name}</TextComp>
      <TextComp>place:{props.idInfo.place}</TextComp>
      <TextComp>date:{props.idInfo.date}</TextComp>
      
</View>
    )
  }



return (
    <View>
      
          
        <BottomDrawer
        containerHeight={300}
        startUp={false}
        offset={TAB_BAR_HEIGHT }
       background="#eae9e9"
        
      >
        {renderContent()}
      </BottomDrawer>
    
        
    
    </View>
  );
};

const styles = StyleSheet.create({

  user:{
    fontSize:20,
   margin:10,
   color:Color.subColor,
   },

  text: {
    margin:10,
   
  },
  location: {
    height: "50%"
  }
});
export default ViewDrawer;

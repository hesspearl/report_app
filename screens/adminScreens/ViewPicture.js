import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AddressPreview from "../../components/UI/AddressReview"
import Colors from "../../Styles/Colors"

const ViewPicture = props => {
  const info = props.route.params.info

  console.log(info)
  return (
    <View>
      <Image source={{uri:info.image}} style={styles.img} />
      <AddressPreview location={info.location}/>
    </View>
  );
};



const styles = StyleSheet.create({
  img: {
  width:"100%",
  height:"100%"
  }
});
export default ViewPicture;
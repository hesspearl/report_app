import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";


const Cards = props => {
   return (
    <View style={styles.product}>
      <View style={styles.touchable}>

          <View style={{flexDirection:"row"}}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}> Name :{props.name}</Text>
              <Text style={styles.report}>
              County: {props.place}</Text>
            </View>

          </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',

    margin: 10,
    alignContent:'center'


  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: 80,
    height: 80,

    margin:5
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  details: {

    padding:5,

    margin:10
  },
  title: {

    fontSize: 20,
    marginVertical: 2
  },
  report: {

    fontSize: 20,
    color: '#888'
  },

});
export default Cards;

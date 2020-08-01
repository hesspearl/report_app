import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import firebase from "../../firebase";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Card from "../../components/UI/Card";
import Colors from "../../Styles/Colors";
import useBackButton from "../../hooks/useBackButton";
import HeaderButton from "../../components/UI/HeaderButton";

const ViewDetails = props => {
  const [data, setData] = useState();
  const [idInfo, setIdInfo] = useState();


  useBackButton();

  //to  save data inside
  const docData = [];

  async function getReport() {
    const ref = firebase
      .firestore()
      .collection("test")
      .get();

    await ref.then(snapShot =>
      snapShot.docs.forEach(data => {
        console.log(data.data().name);
        docData.push({
          reportId: data.id,
          userName: data.data().userName,
          location: data.data().location,
          image: data.data().Image,
          name: data.data().name,
          place: data.data().place,
          date: data.data().date,
         
        });

        return setData(docData);
      })
    );
  }

  useEffect(() => {
    getReport();
  }, []);

  const getDetails = id => {
    const selectedReport = data.find(idKey => idKey.reportId === id);
    setIdInfo(selectedReport);

    //setIsFetching(true);
    

  };

  useEffect(() => {
  if(idInfo){
    props.navigation.navigate("viewMap", { infos: idInfo })
  }
  }, [idInfo])
  

 
  return (
 
      <View style={styles.container}>
        
          <FlatList
            data={data}
            keyExtractor={item => item.reportId}
            renderItem={itemData => (
              <TouchableOpacity
                onPress={() => getDetails(itemData.item.reportId)}
              >
                <Card
                  image={itemData.item.image}
                  name={itemData.item.name}
                        place={itemData.item.place}
                />
              </TouchableOpacity>
            )}
            initialNumToRender={3}
          />
     
       
       
      </View>

      
   
  );
};

export const ViewDetailsOptions = navData => {
  return {
    headerTitle:"Reports",
    headerStyle: {
      backgroundColor: Colors.subColor
    },
    headerLeft:()=> (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="return"
          iconName={"back"}
          onPress={() => {
            navData.navigation.navigate("Admin");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
 
  container: {
    flexDirection: "row",
    justifyContent:'center'
  
  },
 
});

export default ViewDetails;

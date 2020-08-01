import React, { useState ,useEffect} from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";
import firebase from "../../firebase";

import ReportClass from "../../model/report";
import ButtonStyle from "../../components/UI/ButtonStyle";




const CustomButton = props => {
  const userName = useSelector(state => state.auth.name);
 const [isDone, setIsDone] = useState(false)
 
 

useEffect(() => {
  if(isDone)
  props.navigation.navigate("MapScreen")
}, [isDone])


  const newReport = () => {
    let nReport;
    
    try {
      nReport = new ReportClass(
        userName,
        props.report.report,
        props.report.newLocation.location,
        props.report.pageOne.name,
        props.report.pageOne.place,
        props.report.pageOne.date,
        
      );
    } catch (err) {
      console.log( err)
      Alert.alert(
        "Dont leave it blink",
        " please complete all fields before pressing ",
        [{ text: " ok " }]
      );

      return;
    }

    addReport(nReport);

 
    
  };

  async function addReport(data) {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const ref = firebase.firestore().collection("test");
        const refID = ref.doc().id;

        await ref.doc(refID).set({
          ...data
        });

        const response = await fetch(data.Image);
        const blob = await response.blob();

        const storage = firebase
          .storage()
          .ref()
          .child("image")
          .child(refID);

        await storage.put(blob);

        firebase
          .storage()
          .ref()
          .child("image")
          .child(refID)
          .getDownloadURL()
          .then(url => {
            ref.doc(refID).update({
              Image: url
            });
          });
      }
    });
    
    setIsDone(true)
  }


  return <ButtonStyle 
   onSelect={newReport}
   iconName="chevron-double-right"/>
   ;
};

export default CustomButton;

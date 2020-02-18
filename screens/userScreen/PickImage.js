import React, { useState,  useEffect } from "react";
import { Text, Alert } from "react-native";
import {  useDispatch } from "react-redux";

import * as permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import * as reportActions from "../../store/action/report";
import { Callout } from "react-native-maps";


const PickImage = props => {
  const [img, setImg] = useState();

  dispatch = useDispatch();

  //permission to use camera
  const verifyCamera = async () => {
    const CameraResult = await permissions.askAsync(
      permissions.CAMERA,
      permissions.CAMERA_ROLL
    );

    if (CameraResult.status !== "granted") {
      Alert.alert(
        "permission",
        "you need to granted camera permission to use app ",
        [{ text: "ok" }]
      );
      return false;
    }
    return true;
  };


  //to open up camera
  const takeImage = async () => {
    const hasPermission = await verifyCamera();
    //if it give false it wont open app and return to function
    if (!hasPermission) {
      return;
    }

    const imageChooses = await ImagePicker.launchCameraAsync({
      //   allowsEditing:true,
      //aspect:[9,16],
      quality: 0.5
    });

    const imgURI = imageChooses.uri;

    setImg(imgURI);
  };

// if image is taken it will go to next page
  useEffect(() => {
    if (img) props.navigation.navigate("ProgressSteps");
  }, [takeImage, img]);


  useEffect(() => {
    dispatch(reportActions.infoImage(img));
  }, [img, dispatch]);

  return (
    <Callout onPress={takeImage}>
      <Text> Make near miss report</Text>
    </Callout>
  );
};




export default PickImage;

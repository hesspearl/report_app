import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, Alert, View } from "react-native";
import { useDispatch } from "react-redux";

import * as permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import * as reportActions from "../../store/action/report";
import { Callout } from "react-native-maps";
import Loading from "./LoadingScreen";

const PickImage = props => {
  const [img, setImg] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

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

  useEffect(() => {
    takeImage();
  }, []);

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
    props.navigation.navigate("ProgressSteps");
    setIsLoading(false);
  };

  // if image is taken it will go to next page

  useEffect(() => {
    dispatch(reportActions.infoImage(img));
  }, [img, dispatch]);

  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
};


export default PickImage;

import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import * as permissions from "expo-permissions";
import { useDispatch } from "react-redux";

import * as reportActions from "../../store/action/report";

import useBackButton from "../../hooks/useBackButton";
import Description from "../../components/UI/Description";
import ButtonStyle from "../../components/UI/ButtonStyle";

const MapScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useState(pickedLocation);
  const [pickedLocation, setPickedLocation] = useState();

  useBackButton();

  const dispatch = useDispatch();

  // run in first render
  useEffect(() => {
    getLocationHandler();
  }, []);

  // permission to use maps to get location
  const verifyPermission = async () => {
    const result = await permissions.askAsync(permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert(
        "permission",
        "you need to granted location permission to use app ",
        [{ text: "ok" }]
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    try {
      const location = await Location.getCurrentPositionAsync();

      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (err) {
      Alert.alert("Couldnt find location!", " please try again " + err, [
        { text: "ok" },
      ]);
    }
  };

  //where to focus
  const mapRegin = {
    latitude: !pickedLocation ? 0.0 : pickedLocation.lat,
    longitude: !pickedLocation ? 0.0 : pickedLocation.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // selected location
  const selectedLocationHandler = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const saveHandler = useCallback(() => {
    if (pickedLocation) {
      dispatch(reportActions.infoLocation(pickedLocation));
    } else if (selectedLocation) {
      dispatch(reportActions.infoLocation(selectedLocation));
    } else {
      console.log("none");
    }
  }, [selectedLocation, pickedLocation]);

  useEffect(() => {
    saveHandler();
  }, [saveHandler, pickedLocation, selectedLocation]);

  // to pin marker on map
  let markerCoordinates;

  if (pickedLocation)
    markerCoordinates = {
      latitude: pickedLocation.lat,
      longitude: pickedLocation.lng,
    };

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  const pressHandler = () => props.navigation.navigate("PickImage");

  return (
    <View style={styles.contain}>
      <View style={styles.btnContain}>
        <ButtonStyle
          iconName="exit-to-app"
          color="black"
          style={styles.btn}
          onSelect={() => props.navigation.navigate("user")}
        />
      </View>
      <MapView
        style={styles.map}
        region={mapRegin}
        onPress={selectedLocationHandler}
      >
        {markerCoordinates && (
          <Marker
            image={require("./../../assets/navigation.png")}
            title="Picked Location"
            coordinate={markerCoordinates}
            description="tab"
            showCallout
          >
            <Callout onPress={pressHandler}>
              <Text> Make near miss report</Text>
            </Callout>
          </Marker>
        )}
      </MapView>

      <View style={styles.description}>
        <Description />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    // alignItems: "center",
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: "white",
  },
  btn: {
    backgroundColor: "white",
  },
  container: {
    width: "100%",
    padding: 5,
  },
  btnContain: {
    justifyContent: "flex-start",
    margin: 15,
    flex: 1,
  },
  description: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default MapScreen;

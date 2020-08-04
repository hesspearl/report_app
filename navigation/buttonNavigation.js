import React from "react";
import { Platform } from "react-native";

import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Images from "../screens/userScreen/PickImage";
import ProgressSteps ,{screenOptions as ProgressStepsOptions} from "../screens/userScreen/ProgressSteps";
import MapScreen from "../screens/userScreen/MapScreen";
import changeAddressMap from "../screens/userScreen/ChangeAddress";
import LoadingScreen from "../screens/userScreen/LoadingScreen";

import Login from "../screens/loggingScreen/login";
import SingUp from "../screens/loggingScreen/signup";
import AdminLogIn from "../screens/loggingScreen/AdminLog";

import viewMap from "../screens/adminScreens/FullMapView";
import ViewDetails , {ViewDetailsOptions} from "../screens/adminScreens/ViewDetails";
import ViewPicture from "../screens/adminScreens/ViewPicture";

import Colors from "../Styles/Colors";

const StackMain = createStackNavigator();

export const ScreensNav = () => {
  return (
    <StackMain.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.mainColor,
        },
        headerTintColor: "white",
      }}
    >
        <StackMain.Screen
        component={TabScreen}
        name="TabNav"
        options={{header:()=>null}}
      ></StackMain.Screen>
      <StackMain.Screen
        component={SingUp}
        name="SingUp"
        options={{header:()=>null}}
      ></StackMain.Screen>
      <StackMain.Screen
        component={ViewDetails}
        name="view"
        options={ViewDetailsOptions}
      ></StackMain.Screen>
      <StackMain.Screen
        component={MapScreen}
        name="MapScreen"
        options={   {header:()=>null}}
      ></StackMain.Screen>
      <StackMain.Screen
        component={Images}
        name="PickImage"
        options={{header:()=>null}}
      ></StackMain.Screen>
      <StackMain.Screen
        component={LoadingScreen}
        name="Load"
     
      ></StackMain.Screen>
      <StackMain.Screen
        component={ProgressSteps}
        name="ProgressSteps"
        options={ProgressStepsOptions}
      ></StackMain.Screen>
      <StackMain.Screen
        component={viewMap}
        name="viewMap"
        options={{
          headerTitle:"Details",
      headerStyle: {
        backgroundColor: Colors.subColor
      }
        }}
      ></StackMain.Screen>
      <StackMain.Screen
        component={changeAddressMap}
        name="changeAddress"
     
      ></StackMain.Screen>
      <StackMain.Screen
        component={ViewPicture}
        name="ViewPicture"
        options={{
      headerTitle:"Details",
      headerStyle: {
        backgroundColor: Colors.subColor
      },
      
    }}
      ></StackMain.Screen>
    </StackMain.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

export const TabScreen=()=>{

  return(
    <Tab.Navigator
    shifting={true}>
<Tab.Screen  name="Login" component={Login} options={{
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="account-box"
            color={tabInfo.tintColor}
            size={25}
          />
        );
      },
      tabBarColor: Colors.mainColor,
    }} />
   
<Tab.Screen name="Admin" component={AdminLogIn}
  options={
    {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="account-key"
            color={tabInfo.tintColor}
            size={25}
          />
        );
      },
      tabBarColor: Colors.subColor,
      
      headerTitle: "Admin Account"
    }
  }
/>

    </Tab.Navigator>
  )
}

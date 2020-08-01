import React from "react";
import { Platform } from "react-native";

import {
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import Images from "../screens/userScreen/PickImage";
import ProgressSteps from "../screens/userScreen/ProgressSteps";
import MapScreen from "../screens/userScreen/MapScreen";
import changeAddressMap from "../screens/userScreen/ChangeAddress"
import LoadingScreen from "../screens/userScreen/LoadingScreen"

import Login from "../screens/loggingScreen/login";
import SingUp from '../screens/loggingScreen/signup'
import AdminLogIn from "../screens/loggingScreen/AdminLog";

import viewMap from "../screens/adminScreens/FullMapView"
import ViewDetails from "../screens/adminScreens/ViewDetails";
import ViewPicture from "../screens/adminScreens/ViewPicture"


import Colors from "../Styles/Colors";




const appNavigation = createStackNavigator(
  {
  
    
    SingUp:SingUp,
    view: ViewDetails,
    
    MapScreen:MapScreen,
    PickImage: Images,
    Load:LoadingScreen,
    ProgressSteps: ProgressSteps,
    viewMap:viewMap,
    changeAddress:changeAddressMap,
    ViewPicture:ViewPicture
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.mainColor
      },
      headerTintColor: "white",
     
    },
     
  }
);



const tabScreenConfig={
    user: {
      screen: Login,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <MaterialCommunityIcons
              name="account-box"
              color={tabInfo.tintColor}
              size={25}
            />
          );
        },
        tabBarColor:Colors.mainColor,
        
      }
    },
mainScreen:{
     screen:appNavigation,
  navigationOptions:{
    tabBarVisible:false,
    tabBarColor:"white",
    title:"",
  }},

    Admin: {
      screen: AdminLogIn,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <MaterialCommunityIcons
              name="account-key"
              color={tabInfo.tintColor}
              size={25}
            />
          );
        },
        tabBarColor:Colors.subColor
      }
    }
  }



const LogInNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig,{
     shifting:true
    })
    : createBottomTabNavigator(
      tabScreenConfig,
        {
          tabBarOptions: {
            activeTintColor: Colors.mainColor
          }
        }
      );



export default createAppContainer(LogInNavigator);
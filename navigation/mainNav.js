import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import {ScreensNav}  from "./buttonNavigation"


export default  mainNav=()=>{
    
    return(
        <NavigationContainer>

<ScreensNav/>
        </NavigationContainer>
    )
}
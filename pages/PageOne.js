import React, { useEffect, useReducer } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { useDispatch , useSelector} from "react-redux";

import * as reportActions from "../store/action/report";
import InputPage from "../components/UI/InputPages";
import DateCopm from "../components/UI/Date";
import DropDown from "../components/UI/dropDown"
import { styles } from "reinput-expo/src/Input";

const REPORT_UPDATE = "REPORT_UPDATE";

const PageOneReducer = (state, action) => {
  
  if (action.type === REPORT_UPDATE) {
    const updateValues = {
      ...state.inputValues,
      [action.input]: action.value
    };

   /* const updatedValidities = {
      ...state.Validities,
      [action.input]: action.isValid
    };
    let formIsValid = true;

    for (let key in updatedValidities) {
      formIsValid = formIsValid && updatedValidities[key];
    }
    */

    return {
      inputValues: updateValues,
      
    };
  }

  return state;
};

const Inputs = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.name);


  const [stateReport, dispatchReport] = useReducer(PageOneReducer, {
    inputValues: {
      enteredInfoOneInput: "Daniel da Conceição Nascimento",
      enteredInfoTwoInput: "",
      enteredInfoThreeInput: "",
     
    },
    
  });

/*
  const inputTextHolder = (inputIdentifier, enteredText) => {
    let isValid = false;
    if (enteredText.trim().length > 0) isValid = true;

    dispatchReport({
      type: REPORT_UPDATE,
      value: enteredText,
      isValid: isValid, //true
      input: inputIdentifier
    });
  };
*/
  // to check that no field is blink
 useEffect(() => {
  
      dispatch(
        reportActions.infoPageOne(
          stateReport.inputValues.enteredInfoOneInput,
          stateReport.inputValues.enteredInfoTwoInput,
          stateReport.inputValues.enteredInfoThreeInput,
         
        )
      );
    
  }, [dispatch, stateReport]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <View>
       
          
            <InputPage
           //   onChangeText={inputTextHolder.bind(this, "enteredInfoOneInput")}
              value={stateReport.inputValues.enteredInfoOneInput}
              editable={false}
              style={style.inputContainer}
              underlineColorAndroid={"transparent"}
            //  returnKeyType="next"
            />
         
          
            <DropDown
             onChangeText={enteredText => dispatchReport({
                  type: REPORT_UPDATE,
                  value: enteredText,
                  input: "enteredInfoTwoInput"
                })
              }
              style={style.inputContainer}
            />
            <DateCopm
              onChangeText={enteredText => dispatchReport({
                  type: REPORT_UPDATE,
                  value: enteredText,
                  input: "enteredInfoThreeInput"
                })
              }
              
              //value={stateReport.inputValues.enteredInfoTwoInput}
            />

          
          </View>
      
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    
    borderWidth:1,
    marginHorizontal:20,
    padding:10,
   
  },
  textInputDesign: {
    width: 200,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    marginTop: 7,
    padding: 10,
    fontSize: 15
  }
});

export default Inputs;
 /*
 
          <TextInput
              onChangeText={inputTextHolder.bind(this, "enteredInfoFourInput")}
              value={stateReport.inputValues.enteredInfoFourInput}
              style={style.textInputDesign}
              onEndEditing={submitHandler}
            />*/
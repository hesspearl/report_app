import React from "react";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { reduxFirestore, getFirestore} from "redux-firestore";
import {ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebase from "./firebase";

import ButtonsNav from "./navigation/buttonNavigation";
import report from "./store/reducers/report";
import authReducer from "./store/reducers/auth";

//reducer we are storing
const rootReducer = combineReducers({
  report: report,
  auth: authReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ getFirebase, getFirestore })
    ),
    reduxFirestore(firebase),
  
  )
); // store saved data from reducer

const rrconf={
  userProfile: 'users',
}
const rrfProps = {
  firebase,
  config:rrconf,
  dispatch: store.dispatch,
}
export default function main() {
  return (
    // <MapsNavigation/>
    <Provider store={store}>
    <ReactReduxFirebaseProvider
   {...rrfProps}>
      <ButtonsNav />
      </ReactReduxFirebaseProvider>
    </Provider>
    //
  );
}

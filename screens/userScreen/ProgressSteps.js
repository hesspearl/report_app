import React, { useState, useRef , useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import StepIndicator from "react-native-step-indicator";
import ViewPager from "@react-native-community/viewpager";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import PageTwo from "../../pages/PageTwo";
import PageOne from "../../pages/PageOne";
import PageThree from "../../pages/PageThree";
import ReportButton from "../../components/MainComponents/ReportButton";

import HeaderButton from "../../components/UI/HeaderButton";
import ButtonStyle from "../../components/UI/ButtonStyle";
import firstIndicatorStyles from "../../Styles/StepsIndicatorColors";

const PAGES = ["Page 1", "Page 2", "Page 3", "Page 4"];

const ProgressSteps = props => {

  
  const [currentPage, setCurrentPage] = useState(0);

  const newReportInfo = useSelector(state => state.report);

  const viewPager = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          labels={["Section1", "Section2", "Section3", "Section4"]}
          renderLabel={renderLabel}
          stepCount={4}
        />
      </View>
     
      <ViewPager
        style={{ flexGrow: 1 }}
        ref={viewPager}
        onPageSelected={page => {
          console.log(page.nativeEvent.position);
          setCurrentPage(page.nativeEvent.position);
        }}
      >
        <View>
          <PageOne />
        </View>
        <View>
          <PageTwo />
        </View>
        <View>
          <PageThree />
        </View>
      </ViewPager>
      <View style={styles.buttonContainer}>
        <ButtonStyle
          iconName="google-maps"
          onSelect={() => props.navigation.navigate("changeAddress")}
        />
        <ReportButton report={newReportInfo} navigation={props.navigation} />
      </View>
    </View>
  );
};

onStepPress = position => {
  setCurrentPage(position);
  viewPager.setPage(position);
};

renderLabel = ({ position, stepStatus, label, currentPosition }) => {
  return (
    <Text
      style={
        position === currentPosition
          ? styles.stepLabelSelected
          : styles.stepLabel
      }
    >
      {label}
    </Text>
  );
};
renderViewPagerPage = data => {
  return (
    <View style={styles.page}>
      <Text>{data}</Text>

      {PAGES.map(page => renderViewPagerPage(page))}
    </View>
  );
};

ProgressSteps.navigationOptions = navData => {
  return {
    headerTitle: "Steps",
   headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="return"
          iconName={"back"}
          onPress={() => {
            navData.navigation.navigate("MapScreen");
          }}
        />
      </HeaderButtons>),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Delete"
          iconName={"trash"}
          onPress={() => {
            navData.navigation.navigate("MapScreen");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    
  },
  shadow:{
    width:10,
    height:10,
    shadowColor: "black",
    elevation:2
  },
  stepIndicator: {
    marginVertical: 50,
     borderBottomColor:"black",
    shadowColor: "black",

   // marginHorizontal: 10,
    borderBottomWidth: 1.5,
    paddingBottom: "5%"
  },
  stepLabel: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#999999"
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#4aae4f"
  },

  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent:"space-evenly",
   alignContent:"center",
   width:"100%",
    //alignItems: "baseline",
   marginBottom: "5%",
//  marginRight:"5%"
  }
});

export default ProgressSteps;

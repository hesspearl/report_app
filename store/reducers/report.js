import {
    CREATE_REPORT_PAGE_TWO,
    CREATE_REPORT_IMAGE,
    CREATE_REPORT_PAGE_ONE,
    CREATE_REPORT,
    CREATE_REPORT_LOCATION
  } from "../action/report";

  import Report from "../../model/report";
  import ReportPagOne from "../../model/reportPageOne";
  import ReportPagTwo from "../../model/reportPageTwo";
  
  
  initialState = {
    report: {}
  };


  export default report = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_REPORT_IMAGE:
        const newImage = action.data;
  
        return {
          ...state,
          report: newImage
        };
  
      case CREATE_REPORT_LOCATION:
       const newLocation = action.data;
  
        return {
          ...state,
          report:state.report, newLocation
        };
  
      case CREATE_REPORT_PAGE_ONE:
        const pageOne = new ReportPagOne(
          action.data.name,
          action.data.place,
          action.data.date,
          
        );
  
        return {
          ...state,
          report: state.report,
          pageOne
        };
  
      case CREATE_REPORT_PAGE_TWO:
        const pageTwo = new ReportPagTwo(action.data.info5, action.data.info6);
  
        return {
          ...state,
          report: state.report,
          pageTwo
        };
  
      case CREATE_REPORT:
        const newReport = new Report(
          new Date().toString(),
          action.data.report,
          action.data.location,
          action.data.pageOne.name,
          action.data.pageOne.place,
          action.data.pageOne.date,
          action.data.pageOne.info4,
          action.data.pageTwo.info5,
          action.data.pageTwo.info6
        );
  
        return {
          ...state,
          report: newReport
        };
      default:
        return state;
    }
  };
  
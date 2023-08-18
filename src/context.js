import React, { createContext, useState } from "react";

const FormContext = createContext();

const FormDataContext = ({ children }) => {
  let existingFormData = localStorage.getItem("form")
  if(existingFormData) {
    existingFormData = JSON.parse(existingFormData)
  } else existingFormData = {
    stepOneData: {},
    stepTwoData: {
      addressesArray: [{
        streetAddress: "",
        city: "",
        region: "",
        postalCode: "",
        fromDate: "",
        toDate: "",
      }],
    },
    stepThreeData: {
      employmentHistory: [
        {
          employerName: "",
          positionHeld: "",
          streetAddress: "",
          city: "",
          region: "",
          postalCode: "",
          fromDate: "",
          toDate: "",
          reasonForLeaving: "",
          subjectToFMCSRs: "",
          safetySensitiveFunction: "",
        },
      ],
    },  
    stepFourData: {
      accidentsArray: [{}],
    },
    stepFiveData: {
    convictionsArray: [{}],
    },
    stepSixData: {
      hoursWorked: new Array(14).fill("")
    }
  }
  const [form, setForm] = useState(existingFormData);

  const data = {
    form,
    setForm,
  };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export { FormContext, FormDataContext };

import React, { createContext, useState } from "react";

const FormContext = createContext();

const FormDataContext = ({ children }) => {
  let existingFormData = localStorage.getItem("form")
  if(existingFormData) {
    existingFormData = JSON.parse(existingFormData)
  } else existingFormData = {
    stepOneData: {
      companyAppliedFor: "",
      position: "",
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      cellNo: "",
      homeNo: "",
      status: "",
      driverLicenseNumber: "",
      driverLicenseClass: "",
      province: "",
      driverLicenseExpiry: "",
      driverLicenseCondition: "",
      driverLicenseFront: "",
      driverLicenseBack: "",
      questionOne: "",
      questionTwo: "",
      questionThree: "",
      questionFour: "",
      questionFive: "",
      tractor: "0",
      van: "0",
      pike: "0",
      manual: "0",
      chassis: "0",
      haul: "0",
      dumpTruck: "0",
      flatbedTrailer: "0",
      usDriving: "0",
      straightTruck: "0",
      tanker: "0",
      winterDriving: "0",
    },
    stepTwoData: {
      addressesArray: [{
        streetAddress: "",
        city: "",
        region: "",
        postalCode: "",
        fromDate: "",
        toDate: "",
        country: ""
      }],
    },
    stepThreeData: {
      employmentHistory: [
        {
          employerName: "",
          positionHeld: "",
          contactName: "",
          contactPhone: "",
          streetAddress: "",
          city: "",
          region: "",
          postalCode: "",
          country: "",
          fromDate: "",
          toDate: "",
          reasonForLeaving: "",
          subjectToFMCSRs: "",
          safetySensitiveFunction: "",
        },
      ],
    },  
    stepFourData: {
      accidentsArray: [{
        dateOfAccident: "",
        accidentLocation: "",
        numberOfInjuries: "",
        numberOfFatalities: "",
        numberOfHazardousMaterialSpills: "",
        accidentDescription: ""
      }],
    },
    stepFiveData: {
    convictionsArray: [{
      convictionDate: "",
      convictionLocation: "",
      charge: "",
      penalty: ""
    }],
    },
    stepSixData: {
      hoursWorked: new Array(14).fill("")
    },
    stepSevenData: {
      sign1: "",
      sign2: ""
    },
    stepEightData: {
      sign1: ""
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

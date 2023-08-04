import { createContext, useState } from "react";

const FormContext = createContext();

const FormDataContext = ({ children }) => {
  const [form, setForm] = useState({
    personalInfo: {
      fname: "",
      lname: "",
      email: "",
      dob: "",
      status: "",
      position: "",
    },
    driverLicenseInfo: {
      licenseNumber: "",
      licenseClass: "",
      province: "",
      dateOfExpiry: "",
      questionOne: "",
      questionTwo: "",
      questionThree: "",
      questionFour: "",
      questionFive: "",
    },
    addressHistory: {
      streetAddress: "",
      city: "",
      province: "",
      postalCode: "",
      fromDate: "",
      toDate: "",
    },
    employmentHistory: {
      nameOfEmployer: "",
      position: "",
      streetAddress: "",
      city: "",
      province: "",
      postalCode: "",
      fromDate: "",
      toDate: "",
      reasonForLeaving: "",
      questionOne: "",
      questionTwo: "",
    },
  });
  const data = {
    form,
    setForm,
  };
  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export { FormContext, FormDataContext };

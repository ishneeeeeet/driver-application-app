import React, { createContext, useState } from "react";

const FormContext = createContext();

const FormDataContext = ({ children }) => {
  const [form, setForm] = useState({
    // Initialize your form data properties here
    // For example:
    stepOneData: {
      // ...
    },
    stepTwoData: {
      addressesArray: [],
    },
    // ... other steps
  });

  const data = {
    form,
    setForm,
  };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export { FormContext, FormDataContext };

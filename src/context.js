import React, { createContext, useState, useEffect } from "react";

const FormContext = createContext();

const FormDataContext = ({ children }) => {
  // Load initial form data from local storage or use a default value
  const initialForm = JSON.parse(localStorage.getItem("formData")) || {
    stepTwoData: [
      {
        streetAddress: "",
        city: "",
        country: "",
        region: "",
        postalCode: "",
        fromDate: "",
        toDate: "",
      },
    ],
    workHistory: [],
  };

  const [form, setForm] = useState(initialForm);

  // Save form data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(form));
  }, [form]);

  const data = {
    form,
    setForm,
  };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export { FormContext, FormDataContext };

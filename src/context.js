import { createContext, useState, useEffect } from "react";

const FormContext = createContext();

const FormDataContext = ({ children }) => {
  const [form, setForm] = useState(() => {
    // Retrieve the form data from local storage if it exists
    const storedFormData = localStorage.getItem("formData");
    const initialFormData = storedFormData
      ? JSON.parse(storedFormData)
      : {
          name: "",
          // Add other fields here with their default values if needed
        };

    return initialFormData;
  });

  useEffect(() => {
    // Save the form data to local storage whenever it changes
    localStorage.setItem("formData", JSON.stringify(form));
  }, [form]);

  const data = {
    form,
    setForm,
  };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export { FormContext, FormDataContext };

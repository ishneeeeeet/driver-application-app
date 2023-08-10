import { createContext, useState, useEffect } from "react";

const FormContext = createContext();

const FormDataContext = ({ children }) => {
  const [form, setForm] = useState({ workHistory: [] }); 

  const data = {
    form,
    setForm,
  };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export { FormContext, FormDataContext };

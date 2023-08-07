import React, { useContext } from "react";
import axios from "axios";
import { FormContext } from "./context";
import { saveAs } from "file-saver";

const StepFive = () => {
  const { form, setForm } = useContext(FormContext);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8000/createPdf`, form) //create pdf next => get pdf
      .then((response) => {
        axios
          .get(`http://localhost:8000/fetchPdf`, { responseType: "blob" })
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });
            saveAs(pdfBlob, "InvoiceDocument.pdf");
            //clear all the files you want
          })
          .then(() => {
            axios
              .post("http://localhost:8000/sendPdf")
              .then((response) => {
                console.log(response);
                alert(response.data);
              });
          });
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <button
        type="submit"
        className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
      >
        Submit
      </button>
      {console.log(form)}
    </form>
  );
};

export default StepFive;

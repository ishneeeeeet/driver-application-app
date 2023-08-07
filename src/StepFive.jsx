import React, { useContext, useState } from "react";
import axios from "axios";
import { FormContext } from "./context";
import { saveAs } from "file-saver";
import { Label } from "@radix-ui/react-label";
import myimage from "./images/roadtestevaluation.png";
import SignatureCanvas from "react-signature-canvas";

const StepFive = () => {
  const { form, setForm } = useContext(FormContext);
  const [sign, setSign] = useState();

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
            axios.post("http://localhost:8000/sendPdf").then((response) => {
              console.log(response);
              alert(response.data);
            });
          });
      });
  };

  const handleClear = (e) => {
    e.preventDefault();
    sign.clear();
  };

  return (
    <>
      <form className="max-w-screen-md mx-auto text-center">
        <label htmlFor="">Signature</label>
        <div className="flex justify-center">
          <div className="sm:col-span-3">
            <SignatureCanvas
              canvasProps={{ width: 400, height: 70, className: "signCanvas" }}
              ref={(data) => setSign(data)}
            />
          </div>
        </div>
        <button onClick={handleClear}>Clear</button>

        <button
          onClick={onSubmit}
          type="submit"
          className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
        >
          Submit
        </button>
        {console.log(form)}
      </form>
    </>
  );
};

export default StepFive;

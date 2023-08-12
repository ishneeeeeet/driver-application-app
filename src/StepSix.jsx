import React, { useContext, useState } from "react";
import axios from "axios";
import { FormContext } from "./context";
import { saveAs } from "file-saver";


import empploymentImage from "./images/Employment-verification.png";
import SignatureCanvas from "react-signature-canvas";
import Document from "./Document";

const StepSix = () => {
  const { form, setForm } = useContext(FormContext);
  const [sign1, setSign1] = useState();
  const [sign2, setSign2] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (sign1 && sign2 && !sign1.isEmpty() && !sign2.isEmpty()) {
      // Signature fields are filled
      console.log("Signature fields are filled. Submitting the form...");

      // Your form submission logic here

      // Send form data to backend and get PDF
      await axios.post(`http://localhost:8000/createPdf`, form);
      const pdfResponse = await axios.get(`http://localhost:8000/fetchPdf`, {
        responseType: "blob",
      });

      // Save and download PDF
      const pdfBlob = new Blob([pdfResponse.data], { type: "application/pdf" });
      saveAs(pdfBlob, "InvoiceDocument.pdf");

      // Send PDF via email
      const emailResponse = await axios.post("http://localhost:8000/sendPdf");
      console.log(emailResponse.data);

      // Clear form data or navigate to next step
      setForm({}); // Clear form data
      // or
      // navigateToNextStep();
    } else {
      // Signature fields are not filled
      alert("Please provide your signature in both fields before submitting.");
    }
  };

  const handleClear = (e, signRef) => {
    e.preventDefault();
    signRef.clear();
  };

  return (
    <>
      <form onClick={onSubmit} className="max-w-screen-md mx-auto text-center">
              
        <div className="flex justify-center mb-10">
          <img
            src={empploymentImage}
            alt="EmploymentImage"
            style={{ maxWidth: "896px", maxHeight: "884px" }}
          />
        </div>
        {/* Signature 1 */}
        <p className="text-justify font-bold text-sm mb-10">
          I hereby give my consent and authorize my prospect employer and/or
          Compliance Wizard Inc. to contact my previous employer(s) in order to
          verify my employment History. Safety performance history and drug &
          alcohol history and to obtain the following information. I release my
          prospective and previous employer(s) and its employee(s) from any and
          all liabilities which may result from furnishing such information.
        </p>
        <label
          className="text-base mt-6 font-semibold text-gray-900 text-center"
          htmlFor=""
        >
          Applicant Signature
        </label>
        <div className="flex justify-center">
          <div className="sm:col-span-3 ">
            <div className="border border-gray-300 p-4 rounded mb-1">
              <SignatureCanvas
                canvasProps={{
                  width: 500,
                  height: 120,
                  className: "signCanvas",
                }}
                ref={(data) => setSign1(data)}
              />
            </div>
            <button className="mt-2 mb-6 text-xs underline" onClick={(e) => handleClear(e, sign1)}>Clear</button>
          </div>
        </div>
        
        {/* Signature 2 */}
        
        

        <div className="flex justify-end">
          

          <button
            type="submit"
            className="py-2 px-4 mt-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default StepSix;

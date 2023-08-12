import React, { useContext, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import myimage from "./images/roadtestevaluation.png";
import axios from "axios";
import { saveAs } from "file-saver";
import { FormContext } from "./context";

const StepSeven = () => {
  const { form, setForm } = useContext(FormContext);
  const [sign2, setSign2] = useState("")
  const handleClear = (e, signRef) => {
    e.preventDefault();
    signRef.clear();
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:8000/createPdf`, form);
    const pdfResponse = await axios.get(`http://localhost:8000/fetchPdf`, {
      responseType: "blob",
    });

    const pdfBlob = new Blob([pdfResponse.data], { type: "application/pdf" });
    saveAs(pdfBlob, "InvoiceDocument.pdf");

    // Send PDF via email
    const emailResponse = await axios.post("http://localhost:8000/sendPdf");
    console.log(emailResponse.data);

    // Clear form data or navigate to next step
    setForm({}); // Clear form data
    // or
    // navigateToNextStep();
  };
  return (
    <div>
      <h4 className="max-w-screen-md mx-auto font-semibold text-center text-gray-500">
        Road Test / Driver Evaluation Consent
      </h4>
      <div className="flex justify-center mt-6 mb-6">
        <img
          src={myimage}
          alt="EmploymentImage"
          style={{ maxWidth: "707px", maxHeight: "879px" }}
        />
      </div>
      <label
        className="text-base font-semibold leading-7 text-gray-900 text-center"
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
                ref={(data) => setSign2(data)}
              />
            </div>
            <button className="mt-2 mb-6 text-xs underline" onClick={(e) => handleClear(e, sign2)}>Clear</button>
          </div>
        </div>
      <button
        type="submit"
        onClick={onSubmit}
        className="py-2 px-4 mt-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Submit
      </button>
    </div>
  );
};

export default StepSeven;

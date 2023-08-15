import React, { useContext, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import myimage from "./images/roadtestevaluation.png";
import axios from "axios";
import { saveAs } from "file-saver";
import { FormContext } from "./context";

const ThankYouPage = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mt-8">Thank You for Your Submission!</h2>
      <p className="mt-4 text-gray-600">
        Your form has been successfully submitted. We appreciate your cooperation.
      </p>
    </div>
  );
};

const StepEight = () => {
  const { form, setForm } = useContext(FormContext);
  const [sign2, setSign2] = useState(null);
  const [isSignatureComplete, setIsSignatureComplete] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track successful submission
  const [isError, setIsError] = useState(false); // Track submission error

  const handleClear = (e, signRef) => {
    e.preventDefault();
    signRef.clear();
    setIsSignatureComplete(false);
  };

  const onSubmit = async () => {
    try {
      if (sign2 && !sign2.isEmpty()) {
        setIsSignatureComplete(true);

        await axios.post(`http://localhost:8000/createPdf`, form);
        const pdfResponse = await axios.get(`http://localhost:8000/fetchPdf`, {
          responseType: "blob",
        });

        const pdfBlob = new Blob([pdfResponse.data], { type: "application/pdf" });
        saveAs(pdfBlob, "InvoiceDocument.pdf");

        // Send PDF via email
        const emailResponse = await axios.post("http://localhost:8000/sendPdf");
        console.log(emailResponse.data);

        setIsSubmitted(true); // Mark submission as successful
        setForm({}); // Clear form data
      } else {
        setIsSignatureComplete(false);
        alert("Please provide your signature before submitting the form.");
      }
    } catch (error) {
      setIsError(true); // Mark submission error
      console.error("Error submitting form:", error);
    }
  };

  const handleNextStep = () => {
    if (sign2 && !sign2.isEmpty()) {
      setForm({});
      onSubmit();
    } else {
      alert("Please provide a signature to submit");
    }
  };

  return (
    <div>
      {isError ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mt-8">Form Submission Error</h2>
          <p className="mt-4 text-red-600">
            An error occurred while submitting the form. Please refresh the page and fill the form again.
          </p>
        </div>
      ) : isSubmitted ? (
        <ThankYouPage />
      ) : (
        <>
          <h4 className="max-w-screen-md mx-auto font-semibold text-center text-gray-500">
            Road Test / Driver Evaluation Consent
          </h4><div className="flex justify-center mt-6 mb-6">
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
            onClick={handleNextStep}
            className="py-2 px-4 mt-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default StepEight;












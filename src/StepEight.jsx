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

const StepEight = ({jumpToStep}) => {
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

  const validated = () => {
    const stepOneFields = Object.keys(form.stepOneData)
    for(let i=0; i<stepOneFields.length; i++){
      let key = stepOneFields[i]
      if(key !== "driverLicenseCondition" && key !== "homeNo") {
        let validatedStep = form.stepOneData[key] !== ""
        if(!validatedStep) return { status: false, step: 1}
      }
    }
    for(let i=0; i<form.stepTwoData.addressesArray.length;i++){
      let currAddressArr = form.stepTwoData.addressesArray[i]
      let currAddressArrFields = Object.keys(currAddressArr)
      for(let j=0; j<currAddressArrFields.length; j++){
        let key= currAddressArrFields[j]
        let validatedStep = currAddressArr[key] !== ""
        if(!validatedStep) return { status: false, step: 2}
      }
    }

    for(let i=0; i<form.stepThreeData.employmentHistory.length;i++){
      let currEmpArr = form.stepThreeData.employmentHistory[i]
      let currEmpArrFields = Object.keys(currEmpArr)
      for(let j=0; j<currEmpArrFields.length; j++){
        let key= currEmpArrFields[j]
        let validatedStep = currEmpArr[key] !== ""
        if(!validatedStep) return { status: false, step: 3}
      }
    }

    // for(let i=0; i<form.stepFourData.accidentsArray.length;i++){
    //   let currAccidentArr = form.stepFourData.accidentsArray[i]
    //   let currAccidentArrFields = Object.keys(currAccidentArr)
    //   for(let j=0; j<currAccidentArrFields.length; j++){
    //     let key= currAccidentArrFields[j]
    //     let validatedStep = currAccidentArr[key] !== ""
    //     if(!validatedStep) return { status: false, step: 4}
    //   }
    // }


  // for(let i=0; i<form.stepFiveData.convictionsArray.length;i++){
  //   let currConvictionArr = form.stepFiveData.convictionsArray[i]
  //   let currConvictionArrFields = Object.keys(currConvictionArr)
  //   for(let j=0; j<currConvictionArrFields.length; j++){
  //     let key= currConvictionArrFields[j]
  //     let validatedStep = currConvictionArr[key] !== ""
  //     if(!validatedStep) return { status: false, step: 5}
  //   }
  // }
  for(let i=0; i<form.stepSixData.hoursWorked.length;i++){
    let validatedStep = form.stepSixData.hoursWorked[i] !== ""
    if(!validatedStep) return { status: false, step: 6}
  }

  const stepSevenFields = Object.keys(form.stepSevenData)
  for(let i=0; i<stepSevenFields.length; i++){
    let key = stepSevenFields[i]
      let validatedStep = form.stepSevenData[key] !== ""
      if(!validatedStep) return { status: false, step: 7}
  }
  return {status: true}
}


  const onSubmit = async () => {
    try {
      if (sign2 && !sign2.isEmpty()) {
        setIsSignatureComplete(true);
        const BACKEND_URL = "https://driver-app-tipn.onrender.com/" 
        // const BACKEND_URL = "https://driver-appication-app-real.onrender.com/" 
        // const BACKEND_URL = "http://localhost:8000/" 
        const validatedData = validated()

        if(validatedData.status){
          const updatedForm = {
            ...form,
            stepEightData: { 
            ...form.stepEightData, 
            sign2: sign2.getTrimmedCanvas().toDataURL('image/png')
          },
          }
          setForm(updatedForm);
          await axios.post(`${BACKEND_URL}createPdf`, updatedForm);
          const pdfResponse = await axios.get(`${BACKEND_URL}fetchPdf`, {
            responseType: "blob",
          });
  
          const pdfBlob = new Blob([pdfResponse.data], { type: "application/pdf" });
          saveAs(pdfBlob, "InvoiceDocument.pdf");
  
          // Send PDF via email
          const emailResponse = await axios.post(`${BACKEND_URL}sendPdf`);
          console.log(emailResponse.data);
  
          setIsSubmitted(true); // Mark submission as successful
          setForm({}); // Clear form data
          localStorage.clear()
        } else {
          jumpToStep(validatedData.step)
        }
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












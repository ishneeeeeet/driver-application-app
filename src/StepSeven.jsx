import React from 'react'
import SignatureCanvas from "react-signature-canvas";
import myimage from "./images/roadtestevaluation.png";

const StepSeven = () => {
  return (

    <div>
        <h4 className="max-w-screen-md mx-auto font-semibold text-center text-gray-500">Road Test / Driver Evaluation Consent</h4>
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
                
              />
            </div>
            <button className="mt-2 mb-6 text-xs underline" >Clear</button>
          </div>
        </div>
    </div>
  )
}

export default StepSeven
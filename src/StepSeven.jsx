import React from 'react'
import SignatureCanvas from "react-signature-canvas";

const StepSeven = () => {
  return (
    <div>
        <label
          className="text-base font-semibold leading-7 text-gray-900 text-center"
          htmlFor=""
        >
          Signature 
        </label>
        <div className="flex justify-center">
          <div className="sm:col-span-3 ">
            <div className="border border-gray-300 p-4 rounded mb-6">
              <SignatureCanvas
                canvasProps={{
                  width: 400,
                  height: 70,
                  className: "signCanvas",
                }}
                
              />
            </div>
            <button >Clear</button>
          </div>
        </div>
    </div>
  )
}

export default StepSeven
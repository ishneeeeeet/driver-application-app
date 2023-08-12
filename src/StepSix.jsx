import React, { useContext, useState } from "react";
import { FormContext } from "./context";

import empploymentImage from "./images/Employment-verification.png";
import SignatureCanvas from "react-signature-canvas";

const StepSix = ({ onNextStep, onPreviousStep }) => {
  const { form, setForm } = useContext(FormContext);
  const [sign1, setSign1] = useState(null);

 
 
  const handleClear = (e, signRef) => {
    e.preventDefault();
    signRef.clear();
  };

  return (
    <>
      <form  className="max-w-screen-md mx-auto text-center">
        <div className="flex justify-center mb-10">
          <img
            src={empploymentImage}
            alt="EmploymentImage"
            style={{ maxWidth: "896px", maxHeight: "884px" }}
          />
        </div>

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
            <button
              className="mt-2 mb-6 text-xs underline"
              onClick={(e) => handleClear(e, sign1)}
            >
              Clear
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onPreviousStep}
            className="py-1.5 px-4 mt-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-900"
          >
            ◄ Previous Step
          </button>

          <button
            type="submit"
            onClick={onNextStep}
            className="py-1.5 px-4 mt-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-900"
          >
            Next ►
          </button>
        </div>
      </form>
    </>
  );
};

export default StepSix;

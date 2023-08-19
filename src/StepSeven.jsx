import React, { useContext, useState } from "react";
import { FormContext } from "./context";

import empploymentImage from "./images/Employment-verification.png";
import SignatureCanvas from "react-signature-canvas";

const StepSeven = ({ onNextStep, onPreviousStep }) => {
  const { form, setForm } = useContext(FormContext);
  const [sign1, setSign1] = useState("");
  const [sign2, setSign2] = useState("");

 
 
  const handleClear = (e, signRef) => {
    e.preventDefault();
    signRef.clear();
  };

  
  const handleNextStep = () => {
    if (sign1 && !sign1.isEmpty() && sign2 && !sign2.isEmpty()) {
      const updatedForm = {
        ...form,
        stepSevenData: { 
        ...form.stepSevenData, 
        sign1: sign1.getTrimmedCanvas().toDataURL('image/png'),
        sign2: sign2.getTrimmedCanvas().toDataURL('image/png')
      },
      }
      setForm(updatedForm);
      // setForm({});
      onNextStep()
    } else {
      alert("Please provide a signature to submit");
    }
  };

  return (
    <>
      <form  className="max-w-screen-md mx-auto text-center">
      <div>
        <h4 className="mb-4 mt-6 text-xl font-bold text-center text-gray-800  md:mb-6">
        TO BE READ AND SIGNED BY THE APLLICANT
      </h4>
      <p className="text-sm text-justify">
        I understand that information I provide regarding current and/or
        previous employers may be used, and those employer(s) will be contacted,
        for the purpose of investigating my safety performance history. I
        authorize my prospect employer to make such investigations and inquiries
        of my personal, employment, financial or medical history and other
        related matters as may be necessary in arriving at an employment
        decision. (Generally, inquiries regarding medical history will be made
        only if an after a conditional offer of employment has been extended) I
        hereby release employers, schools, health care providers and other
        persons from all liability in responding to inquiries and releasing
        information in connection with my application. I agree that, if hired, I
        will immediately inform my employer in writing of any violations or
        accidents that occur while I am operating any motor vehicle. I will also
        immediately inform my employer of any suspensions, restrictions,
        prohibitions, or any other change in the status of my driver’s license.
        By signing this application, I certify that this application was
        completed by me and that all entries on it and information in it are
        true and complete to the best of my knowledge. In the event of
        employment, I understand that false or misleading information given in
        my application or interview(s) may result in discharge. I understand,
        also, that I am required to abide by all rules and regulations of the
        company.
      </p>
        </div>
        <p
          className="text-base mt-6 font-semibold text-gray-900 text-center"
          htmlFor=""
        >
          Applicant Signature
        </p>
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
                ref={(data) => setSign2(data)}
              />
            </div>
            <button
              className="mt-2 mb-6 text-xs underline"
              onClick={(e) => handleClear(e, sign2)}
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
            type="button"
            onClick={handleNextStep}
            className="py-1.5 px-4 mt-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-900"
          >
            Next ►
          </button>
        </div>
      </form>
    </>
  );
};

export default StepSeven;

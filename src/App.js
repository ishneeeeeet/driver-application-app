import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

function App() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">
          Driver Application Form
        </h2>
        <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
          Please fill in the details below so that we can get in contact with you.
        </p>
      </div>
      <div className="text-gray-600">
        <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto">
          <div className="flex flex-wrap mx-auto">
            <button
              className={`inline-flex items-center justify-center w-1/4 py-3 font-medium leading-none tracking-wider ${
                activeStep === 1
                  ? "text-indigo-500 border-b-2 border-indigo-500"
                  : "border-b-2 border-gray-200"
              } rounded-t sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900`}
              onClick={() => handleStepChange(1)}
            >
              Personal
            </button>
            <button
              className={`inline-flex items-right justify-center w-1/4 py-3 font-medium leading-none tracking-wider ${
                activeStep === 2
                  ? "text-indigo-500 border-b-2 border-indigo-500"
                  : "border-b-2 border-gray-200"
              } sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900`}
              onClick={() => handleStepChange(2)}
            >
              Address History
            </button>
            <button
              className={`inline-flex items-center justify-center w-1/4 py-3 font-medium leading-none tracking-wider ${
                activeStep === 3
                  ? "text-indigo-500 border-b-2 border-indigo-500"
                  : "border-b-2 border-gray-200"
              } sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900`}
              onClick={() => handleStepChange(3)}
            >
              Employment History
            </button>
            <button
              className={`inline-flex items-center justify-center w-1/4 py-3 font-medium leading-none tracking-wider ${
                activeStep === 4
                  ? "text-indigo-500 border-b-2 border-indigo-500"
                  : "border-b-2 border-gray-200"
              } sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900`}
              onClick={() => handleStepChange(4)}
            >
              Accident History
            </button>
            <button
              className={`inline-flex items-center justify-center w-1/4 py-3 font-medium leading-none tracking-wider ${
                activeStep === 5
                  ? "text-indigo-500 border-b-2 border-indigo-500"
                  : "border-b-2 border-gray-200"
              } sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900`}
              onClick={() => handleStepChange(5)}
            >
              Consent
            </button>
          </div>
          <div className="flex flex-col w-full text-center">
            <div className="py-6 bg-white sm:py-8 lg:py-12">
              <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
                {activeStep === 1 && <StepOne onNextStep={() => handleStepChange(2)}  />}
                {activeStep === 2 && <StepTwo onNextStep={() => handleStepChange(3)} onPreviousStep={() => handleStepChange(1)} />}
                {activeStep === 3 && <StepThree onNextStep={() => handleStepChange(4)}  onPreviousStep={() => handleStepChange(2)}/>}
                {activeStep === 4 && <StepFour onNextStep={() => handleStepChange(5)}  />}
                {activeStep === 5 && <StepFive />}
                
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default App;

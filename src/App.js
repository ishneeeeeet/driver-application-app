import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepSix from "./StepSix";
import StepFive from "./StepFive";
import StepSeven from "./StepSeven";

function App() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="mt-6">
        
        <h3 className="mb-4 text-xl text-blue-600 font-bold text-center text-gray-800 lg:text-xl md:mb-4">
          DRIVER'S APPLICATION FOR EMPLOYMENT
        </h3>
        <p className="max-w-screen-md mx-auto font-semibold text-center text-gray-500 sm:text-xs">
          Please fill in the details below to the best of your knowledge, the information provided below will help us to find a better job prospect for you.
        </p>
      </div>
      <div className="text-gray-600">
        <div className="container flex flex-col flex-wrap px-1 py-4">
          <div className="flex flex-wrap mx-auto">
            <button
              className={`inline-flex items-center justify-center w-1/4 py-3 text-sm font-medium leading-none tracking-wider ${
                activeStep === 1
                  ? "text-indigo-500 border-b-2 border-indigo-500"
                  : "border-b-2 border-gray-200"
              } rounded-t sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900`}
              onClick={() => handleStepChange(1)}
            >
              Personal Info
            </button>
            <button
              className={`inline-flex items-right justify-center w-1/4 py-3 text-sm  font-medium leading-none tracking-wider ${
                activeStep === 2
                  ? "text-indigo-500 border-b-2 border-indigo-500"
                  : "border-b-2 border-gray-200"
              } sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900`}
              onClick={() => handleStepChange(2)}
            >
              Address
            </button>
            <button
              className={`inline-flex items-center justify-center w-1/4 py-3 text-sm font-medium leading-none tracking-wider ${
                activeStep === 3
                  ? "text-indigo-500 border-b-2 border-indigo-500"
                  : "border-b-2 border-gray-200"
              } sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900`}
              onClick={() => handleStepChange(3)}
            >
              Employment
            </button>
            <button
              className={`inline-flex items-center justify-center w-1/4 py-3 text-sm font-medium leading-none tracking-wider ${
                activeStep === 4
                  ? "text-indigo-500 border-b-2 border-indigo-500"
                  : "border-b-2 border-gray-200"
              } sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900`}
              onClick={() => handleStepChange(4)}
            >
              Accident Record
            </button>
            <button
              className={`inline-flex items-center justify-center w-1/4 py-3 text-sm font-medium leading-none tracking-wider ${
                activeStep === 5
                  ? "text-indigo-500 border-b-2 border-indigo-500"
                  : "border-b-2 border-gray-200"
              } sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900`}
              onClick={() => handleStepChange(5)}
            >
              Last 14 Days
            </button>
            <button
              className={`inline-flex items-center justify-center w-1/4 py-3 text-sm font-medium leading-none tracking-wider ${
                activeStep === 6
                  ? "text-indigo-500 border-b-2 border-indigo-500"
                  : "border-b-2 border-gray-200"
              } sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900`}
              onClick={() => handleStepChange(6)}
            >
              Verification Consent
            </button>
            <button
              className={`inline-flex items-center justify-center w-1/4 py-3 text-sm font-medium leading-none tracking-wider ${
                activeStep === 7
                  ? "text-indigo-500 border-b-2 border-indigo-500"
                  : "border-b-2 border-gray-200"
              } sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900`}
              onClick={() => handleStepChange(7)}
            >
              Evaluation Consent
            </button>
          </div>
          <div className="flex flex-col w-full text-center">
            <div className="py-4 bg-white sm:py-8 lg:py-12">
              <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
                {activeStep === 1 && <StepOne onNextStep={() => handleStepChange(2)}  />}
                {activeStep === 2 && <StepTwo onNextStep={() => handleStepChange(3)} onPreviousStep={() => handleStepChange(1)} />}
                {activeStep === 3 && <StepThree onNextStep={() => handleStepChange(4)}  onPreviousStep={() => handleStepChange(2)}/>}
                {activeStep === 4 && <StepFour onNextStep={() => handleStepChange(6)}  onPreviousStep={() => handleStepChange(3)} />}
                {activeStep === 5 && <StepFive  onNextStep={() => handleStepChange(6)}/>}
                {activeStep === 6 && <StepSix onNextStep={() => handleStepChange(7)} onPreviousStep={() => handleStepChange(4)}/>}
                {activeStep === 7 && <StepSeven />}
                
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default App;

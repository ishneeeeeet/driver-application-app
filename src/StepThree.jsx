import React, { useContext, useState } from "react";
import { FormContext } from "./context";
import * as Form from "@radix-ui/react-form";
import * as Label from "@radix-ui/react-label";

const StepThree = ({ onNextStep, onPreviousStep }) => {
  const { form, setForm } = useContext(FormContext);
  const [formData, setFormData] = useState({
    employmentHistory: [
      {
        employerName: "",
        positionHeld: "",
        streetAddress: "",
        city: "",
        region: "",
        postalCode: "",
        fromDate: "",
        toDate: "",
        reasonForLeaving: "",
        subjectToFMCSRs: "",
        safetySensitiveFunction: "",
      },
    ],
  });

  const handlePreviousStep = () => {
    onPreviousStep();
  };

  const addEmployment = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      employmentHistory: [
        ...prevFormData.employmentHistory,
        {
          employerName: "",
          positionHeld: "",
          streetAddress: "",
          city: "",
          region: "",
          postalCode: "",
          fromDate: "",
          toDate: "",
          reasonForLeaving: "",
          subjectToFMCSRs: "",
          safetySensitiveFunction: "",
        },
      ],
    }));
  };

  const handleEmploymentChange = (index, field, value) => {
    setFormData((prevFormData) => {
      const updatedHistory = [...prevFormData.employmentHistory];
      updatedHistory[index][field] = value;
      return { ...prevFormData, employmentHistory: updatedHistory };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  
    // Perform field validation here
    const hasInvalidFields = formData.employmentHistory.some((employment) => {
      // Add your validation conditions here
      return (
        employment.employerName === "" ||
        employment.positionHeld === "" ||
        employment.streetAddress === "" ||
        employment.city === "" ||
        employment.region === "" ||
        employment.postalCode === "" ||
        employment.fromDate === "" ||
        employment.toDate === "" ||
        employment.reasonForLeaving === "" ||
        employment.subjectToFMCSRs === "" ||
        employment.safetySensitiveFunction === ""
      );
    });
  
    // if (hasInvalidFields) {
    //   // Handle invalid fields, e.g., display an error message
    //   alert("Please fill out all required fields.");
    //   return;
    // }
  
    setForm((prevForm) => ({ ...prevForm, stepThreeData: formData }));
    onNextStep();
    console.log(form);
  };
  

  return (
    <Form.Root
      className="max-w-screen-md mx-auto border-b border-gray-900/10 pb-12 text-left"
      onSubmit={onSubmit}
    >
      <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
        Please provide us your employment history for the last 3 years.
      </h2>
      {formData.employmentHistory.map((employment, index) => (
        <div>
          <div
            key={index}
            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div className="sm:col-span-3">
              <label
                htmlFor={`employer-name-${index}`}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name of Employer
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name={`employer-name-${index}`}
                  id={`employer-name-${index}`}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={employment.employerName}
                  onChange={(e) =>
                    handleEmploymentChange(
                      index,
                      "employerName",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor={`position-held-${index}`}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Position Held
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name={`position-held-${index}`}
                  id={`position-held-${index}`}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={employment.positionHeld}
                  onChange={(e) =>
                    handleEmploymentChange(
                      index,
                      "positionHeld",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor={`street-address-${index}`}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street Address
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name={`street-address-${index}`}
                  id={`street-address-${index}`}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={employment.streetAddress}
                  onChange={(e) =>
                    handleEmploymentChange(
                      index,
                      "streetAddress",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor={`city-${index}`}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name={`city-${index}`}
                  id={`city-${index}`}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={employment.city}
                  onChange={(e) =>
                    handleEmploymentChange(index, "city", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor={`region-${index}`}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name={`region-${index}`}
                  id={`region-${index}`}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={employment.region}
                  onChange={(e) =>
                    handleEmploymentChange(index, "region", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor={`postal-code-${index}`}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name={`postal-code-${index}`}
                  id={`postal-code-${index}`}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={employment.postalCode}
                  onChange={(e) =>
                    handleEmploymentChange(index, "postalCode", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor={`from-date-${index}`}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                From Date
              </label>
              <div className="mt-2">
                <input
                required
                  type="date"
                  name={`from-date-${index}`}
                  id={`from-date-${index}`}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={employment.fromDate}
                  onChange={(e) =>
                    handleEmploymentChange(index, "fromDate", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor={`to-date-${index}`}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                To Date
              </label>
              <div className="mt-2">
                <input
                required
                  type="date"
                  name={`to-date-${index}`}
                  id={`to-date-${index}`}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={employment.toDate}
                  onChange={(e) =>
                    handleEmploymentChange(index, "toDate", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor={`reason-for-leaving-${index}`}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Reason for Leaving
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name={`reason-for-leaving-${index}`}
                  id={`reason-for-leaving-${index}`}
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={employment.reasonForLeaving}
                  onChange={(e) =>
                    handleEmploymentChange(
                      index,
                      "reasonForLeaving",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-3 w-full mt-6">
            <label
              htmlFor={`question-one-${index}`}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              1. Were you subject to the FMCSRs* while employed here?
            </label>
            <div className="mt-2">
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  name={`question-one-${index}`}
                  value="True"
                  id={`question-one-true-${index}`}
                  className="text-indigo-600 focus:ring-indigo-500"
                  checked={employment.subjectToFMCSRs === "True"}
                  onChange={(e) =>
                    handleEmploymentChange(index, "subjectToFMCSRs", e.target.value)
                  }
                />
                <label
                  htmlFor={`question-one-true-${index}`}
                  className="text-gray-900"
                >
                  True
                </label>
                <input
                  type="radio"
                  name={`question-one-${index}`}
                  value="False"
                  id={`question-one-false-${index}`}
                  className="text-indigo-600 focus:ring-indigo-500"
                  checked={employment.subjectToFMCSRs === "False"}
                  onChange={(e) =>
                    handleEmploymentChange(index, "subjectToFMCSRs", e.target.value)
                  }
                />
                <label
                  htmlFor={`question-one-false-${index}`}
                  className="text-gray-900"
                >
                  False
                </label>
              </div>
            </div>
          </div>
          <div className="sm:col-span-3 mt-4">
            <label
              htmlFor={`question-two-${index}`}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              2. Was your job designated as a safety-sensitive function in any
              DOT-regulated mode subject to the drug and alcohol testing
              requirements of 49 CFR Part 40?
            </label>
            <div className="mt-2">
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  name={`question-two-${index}`}
                  value="True"
                  id={`question-two-true-${index}`}
                  className="text-indigo-600 focus:ring-indigo-500"
                  checked={employment.safetySensitiveFunction === "True"}
                  onChange={(e) =>
                    handleEmploymentChange(index, "safetySensitiveFunction", e.target.value)
                  }
                />
                <label
                  htmlFor={`question-two-true-${index}`}
                  className="text-gray-900"
                >
                  True
                </label>
                <input
                  type="radio"
                  name={`question-two-${index}`}
                  value="False"
                  id={`question-two-false-${index}`}
                  className="text-indigo-600 focus:ring-indigo-500"
                  checked={employment.safetySensitiveFunction === "False"}
                  onChange={(e) =>
                    handleEmploymentChange(index, "safetySensitiveFunction", e.target.value)
                  }
                />
                <label
                  htmlFor={`question-two-false-${index}`}
                  className="text-gray-900"
                >
                  False
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={addEmployment}
        >
          Add Employer
        </button>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePreviousStep}
          className="box-border w-full text-gray-700 bg-gray-100 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
        >
          Previous Step
        </button>
        <Form.Submit asChild>
          <button
            type="submit"
            className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
          >
            Next
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default StepThree;

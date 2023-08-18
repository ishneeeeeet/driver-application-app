import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./context";
import * as Form from "@radix-ui/react-form";

const StepThree = ({ onNextStep, onPreviousStep }) => {
  const { form, setForm } = useContext(FormContext);
  const [sign, setSign] = useState();
  const [formData, setFormData] = useState(form.stepThreeData);

  const handlePreviousStep = () => {
    onPreviousStep();
  };

  const addEmployment = () => {
    setFormData((prevFormData) => ({
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

  const removeEmployment = (index) => {
    setFormData((prevFormData) => {
      const updtdEmployHistory = { employmentHistory: prevFormData.employmentHistory.filter((_, i) => i !== index)}
      return updtdEmployHistory;
    });
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
    const updatedForm = {
      ...form,
      stepThreeData: { ...form.stepThreeData, ...formData },
    }
    localStorage.setItem('form', JSON.stringify(updatedForm))
    setForm(updatedForm);
    onNextStep();
  };
  useEffect(() => {
    console.log("Updated form data:", form);
  }, [form]);

  return (
    <Form.Root
      className="max-w-screen-md mx-auto border-b border-gray-900/10 pb-12 text-left"
      onSubmit={onSubmit}
    >
      <h2 className="text-base font-semibold leading-6 text-gray-900 text-center">
        Please provide us your employment history for the last 3 years.
      </h2>
      {formData.employmentHistory.map((employment, index) => (
        <div>
          <div
            key={index}
            className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 px-6 py-7 border rounded-md bg-sky-100"
          >
            <div className="sm:col-span-3">
              <label
                htmlFor={`employer-name-${index}`}
                className="block text-xs px-1 font-medium text-gray-900"
              >
                Name of Employer
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="employerName"
                  id={`employer-name-${index}`}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  value={
                    employment.employerName
                      ? employment
                          .employerName
                      : null
                  }
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
                className="block text-xs px-1 font-medium text-gray-900"
              >
                Position Held
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name={`position-held-${index}`}
                  id={`position-held-${index}`}
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  value={
                    employment.positionHeld
                      ? employment
                          .positionHeld
                      : null
                  }
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

            <div className="sm:col-span-3 mt-0">
              <label
                htmlFor={`contact-name-${index}`}
                className="block text-xs px-1 font-medium text-gray-900"
              >
                Contact Name
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name={`contact-name-${index}`}
                  id={`contact-name-${index}`}
                  autoComplete="off"
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  value={
                    employment.contactName
                      ? employment.contactName
                      : null
                  }
                  onChange={(e) =>
                    handleEmploymentChange(index, "contactName", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="sm:col-span-3 mt-0">
              <label
                htmlFor={`contact-phone-${index}`}
                className="block text-xs px-1 font-medium text-gray-900"
              >
                Contact's Phone Number
              </label>
              <div className="mt-1">
                <input
                  required
                  type="tel"
                  name={`contact-phone-${index}`}
                  id={`contact-phone-${index}`}
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  value={
                    employment.contactPhone
                      ? employment
                          .contactPhone
                      : null
                  }
                  onChange={(e) =>
                    handleEmploymentChange(
                      index,
                      "contactPhone",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor={`street-address-${index}`}
                className="block text-xs px-1 font-medium text-gray-900"
              >
                Street Address
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name={`street-address-${index}`}
                  id={`street-address-${index}`}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  value={
                    employment.streetAddress
                      ? employment
                          .streetAddress
                      : null
                  }
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
                className="block text-xs px-1 font-medium text-gray-900"
              >
                City
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name={`city-${index}`}
                  id={`city-${index}`}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  value={
                    employment.city
                      ? employment.city
                      : null
                  }
                  onChange={(e) =>
                    handleEmploymentChange(index, "city", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor={`region-${index}`}
                className="block text-xs px-1 font-medium text-gray-900"
              >
                Province
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="region"
                  id={`region-${index}`}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  value={
                    employment.region
                      ? employment.region
                      : null
                  }
                  onChange={(e) =>
                    handleEmploymentChange(index, "region", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor={`postal-code-${index}`}
                className="block text-xs px-1 font-medium text-gray-900"
              >
                Postal code
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name={`postal-code-${index}`}
                  id={`postal-code-${index}`}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  value={
                    employment.postalCode
                      ? employment.postalCode
                      : null
                  }
                  onChange={(e) =>
                    handleEmploymentChange(index, "postalCode", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor={`country-${index}`}
                className="block text-xs px-1 font-medium text-gray-900"
              >
                Country
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name={`country-${index}`}
                  id={`country-${index}`}
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  value={
                    employment.country
                      ? employment.country
                      : null
                  }
                  onChange={(e) =>
                    handleEmploymentChange(index, "country", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor={`from-date-${index}`}
                className="block text-xs px-1 font-medium text-gray-900"
              >
                From Date
              </label>
              <div className="mt-1">
                <input
                  required
                  type="date"
                  name={`from-date-${index}`}
                  id={`from-date-${index}`}
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  value={
                    employment.fromDate
                      ? employment.fromDate
                      : null
                  }
                  onChange={(e) =>
                    handleEmploymentChange(index, "fromDate", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor={`to-date-${index}`}
                className="block text-xs px-1 font-medium text-gray-900"
              >
                To Date
              </label>
              <div className="mt-1">
                <input
                  required
                  type="date"
                  name={`to-date-${index}`}
                  id={`to-date-${index}`}
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  value={
                    employment.toDate
                      ? employment.toDate
                      : null
                  }
                  onChange={(e) =>
                    handleEmploymentChange(index, "toDate", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor={`reason-for-leaving-${index}`}
                className="block text-xs px-1 font-medium text-gray-900"
              >
                Reason for Leaving
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name={`reason-for-leaving-${index}`}
                  id={`reason-for-leaving-${index}`}
                  autoComplete="off"
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  value={
                    employment
                      .reasonForLeaving
                      ? employment
                          .reasonForLeaving
                      : null
                  }
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
            <div className="sm:col-span-4 w-full mt-2">
            <label
              htmlFor={`question-one-${index}`}
              className="block text-xs font-medium text-gray-900"
            >
              Were you subject to the FMCSRs* while employed here?
            </label>
            </div>
            <div className="sm:col-span-2 w-full mt-0">
            <div className="mt-1">
              <div className="flex items-center space-x-4">
                <select
                  required
                  id="country"
                  name="subjectToFMCSRs"
                  autoComplete="country-name"
                  value={
                    employment.subjectToFMCSRs
                      ? employment
                          .subjectToFMCSRs
                      : null
                  }
                  onChange=
                  {(e) =>
                    handleEmploymentChange(
                      index,
                      "subjectToFMCSRs",
                      e.target.value
                    )
                  }
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs sm:leading-6"
                >
                  <option selected disabled value="">
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  
                </select>
              </div>
            </div>
          </div>
          <div className="sm:col-span-4 mt-0">
            <label
              htmlFor={`question-two-${index}`}
              className="block text-xs font-medium text-gray-900"
            >
              Was your job designated as a safety-sensitive function in any
              DOT-regulated mode subject to the drug and alcohol testing
              requirements of 49 CFR Part 40?
            </label>
            </div>
            <div className="sm:col-span-2 mt-0">
            <div className="mt-0">
              <div className="flex items-center space-x-4">
                <select
                  required
                  id="country"
                  name="safetySensitiveFunction"
                  value={
                    employment
                      .safetySensitiveFunction
                      ? employment
                          .safetySensitiveFunction
                      : null
                  }
                  onChange={(e) =>
                    handleEmploymentChange(
                      index,
                      "safetySensitiveFunction",
                      e.target.value
                    )
                  }
                  className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs sm:leading-6"
                >
                  <option selected disabled value="">
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
          {index > 0 && (
            <div className="sm:col-span-2 sm:col-end-7 text-right">
              <button
                type="button"
                className="py-2 px-2 mt-4 bg-red-500 text-white rounded-md hover:bg-indigo-700 "
                onClick={() => removeEmployment(index)}
              >
                Remove Employer
              </button>
            </div>
          )}
          </div>
          
        </div>
      ))}

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="px-4 py-2 border mx-auto border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={addEmployment}
        >
         + Add More Employer
        </button>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePreviousStep}
          className="py-1.5 px-4 mt-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-900"
        >
          ◄ Previous Step
        </button>
        <Form.Submit asChild>
          <button
            type="submit"
            className="py-1.5 px-4 mt-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-900"
          >
            Next ►
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default StepThree;

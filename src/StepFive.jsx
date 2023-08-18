import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./context";
import { Form } from "@radix-ui/react-form";

const StepFive = ({onNextStep, onPreviousStep}) => {
  const { form, setForm } = useContext(FormContext);
  const [convictions, setConvictions] = useState(form.stepFiveData.convictionsArray);

  const  handleChange = (index, field, value) => {
    setConvictions((prevConvictions) => {
      const updatedConvictions = [...prevConvictions];
      updatedConvictions[index][field] = value;
      return updatedConvictions;
    });
  };
  const addConvictions = () => {
    setConvictions([...convictions, {}]);
  };

  const removeConviction = (index) => {
    setConvictions((prevConvictions) => {
      const updatedConvictions = prevConvictions.filter((_, i) => i !== index);
      return updatedConvictions;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedForm = {
      ...form,
      stepFiveData: { ...form.stepFiveData, convictionsArray: convictions },
    }
    localStorage.setItem('form', JSON.stringify(updatedForm)) 
    setForm(updatedForm);
    onNextStep();
  };

 

  return (
    <form
      className="max-w-screen-md mx-auto border-b border-gray-900/10 pb-6 text-left"
      onSubmit={onSubmit}
    >
      <h2 className="text-base font-semibold leading-6 text-gray-900 text-center">
        Any convictions in the last 3 years? Please leave the columns empty if
        there are none.
      </h2>

      {convictions.map((address, index) => (
        <div key={index} className="mt-8 grid px-4 pt- py-4 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-sky-100 border rounded-md">
        <div className="sm:col-span-2">
          <label
            htmlFor="conviction-date"
            className="block text-xs px-1 font-medium text-gray-900 text-left mt-0"
          >
            Conviction Date
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="convictionDate"
              id="conviction-date"
              className="block rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
              value={
                form.stepFiveData?.convictionsArray[index]?.convictionDate
                  ? form.stepFiveData?.convictionsArray[index]?.convictionDate
                  : null
              }
              onChange={(e) => handleChange(index, e.target.name, e.target.value)}
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="conviction-location"
            className="block text-xs px-1 font-medium text-gray-900 text-left mt-0"
          >
            Conviction Location
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="conviction-location"
              name="convictionLocation"
              className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
              value={
                form.stepFiveData?.convictionsArray[index]?.convictionLocation
                  ? form.stepFiveData?.convictionsArray[index]?.convictionLocation
                  : null
              }
              onChange={(e) => handleChange(index, e.target.name, e.target.value)}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="charge"
            className="block text-xs px-1 font-medium  text-gray-900 text-left mt-0"
          >
            Charges
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="charge"
              name="charge"
              className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={
                form.stepFiveData?.convictionsArray[index]?.charge
                  ? form.stepFiveData?.convictionsArray[index]?.charge
                  : null
              }
              onChange={(e) => handleChange(index, e.target.name, e.target.value)}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="penalty"
            className="block text-xs px-1 font-medium  text-gray-900 text-left mt-0"
          >
            Penalty ($)
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="penalty"
              name="penalty"
              className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={
                form.stepFiveData?.convictionsArray[index]?.penalty
                  ? form.stepFiveData?.convictionsArray[index]?.penalty
                  : null
              }
              onChange={(e) => handleChange(index, e.target.name, e.target.value)}
            />
          </div>
        </div>
        {index > 0 && (
            <div className="sm:col-span-2 sm:col-end-7 text-right">
              <button
                type="button"
                className="py-2 px-2 bg-red-500 text-white rounded-md hover:bg-indigo-700"
                onClick={() => removeConviction(index)}
              >
                Remove Conviction
              </button>
            </div>
          )}
      </div>
      ))}

<div className="flex justify-end mt-6">
          <button
          type="button"
          className="px-4 py-2 border mx-auto border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={addConvictions}
        >
          + Add More Convictions
        </button>
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
            className="py-1.5 px-4 mt-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-900"
          >
            Next ►
          </button>
        
      </div>
    </form>
  );
};

export default StepFive;

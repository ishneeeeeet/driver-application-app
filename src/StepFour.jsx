import React, { useContext, useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { FormContext } from "./context";

const StepFour = ({ onNextStep, onPreviousStep }) => {
  const { form, setForm } = useContext(FormContext);
  const [accidents, setAccidents] = useState([{}]);

  const handleAccidentsChange = (index, field, value) => {
    setAccidents((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses[index][field] = value;
      return updatedAddresses;
    });
  };

  const addAccident = () => {
    setAccidents([
      ...accidents,
      {
       
      },
    ]);
  };
  const removeAccident = (index) => {
    setAccidents((prevAccidents) => {
      const updatedAccidents = prevAccidents.filter((_, i) => i !== index);
      return updatedAccidents;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setForm((prevForm) => ({
      ...prevForm,
      stepFourData: { ...prevForm.stepFourData, accidentsArray: accidents },
    }));

    onNextStep();
  };

  const handlePreviousStep = () => {
    onPreviousStep();
  };

  useEffect(() => {
    console.log("Updated form data:", form);
  }, [form]);

  return (
    <Form.Root
      className="max-w-screen-md mx-auto border-b border-gray-900/10 pb-6 text-left"
      onSubmit={onSubmit}
    >
      <h2 className="text-base font-semibold leading-6 text-gray-900 text-center">
        Any accidents in the last 3 years? Please leave the columns empty if
        there are none.
      </h2>

      {accidents.map((address, index) => (
        <div
          key={index}
          className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 px-6 py-7 bg-orange-50"
        >
          <div className="sm:col-span-4">
            <label
              htmlFor="accident-location"
              className="block text-xs px-1 font-medium text-gray-900 text-left mt-2"
            >
              Location of Accident
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="accident-location"
                name="accidentLocation"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                value={
                  form.stepFourData?.accidentsArray[index]?.accidentLocation
                    ? form.stepFourData?.accidentsArray[index]?.accidentLocation
                    : null
                }
                onChange={(e) =>
                  handleAccidentsChange(index, e.target.name, e.target.value)
                }
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="number-of-injuries"
              className="block text-xs px-1 font-medium text-gray-900 text-left mt-0"
            >
              Number of Injuries
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="numberOfInjuries"
                id="number-of-injuries"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={
                  form.stepFourData?.accidentsArray[index]?.numberOfInjuries
                    ? form.stepFourData?.accidentsArray[index]?.numberOfInjuries
                    : null
                }
                onChange={(e) =>
                  handleAccidentsChange(index, e.target.name, e.target.value)
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="number-of-fatalities"
              className="block text-xs px-1 font-medium text-gray-900 text-left mt-0"
            >
              Number of Fatalities
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="numberOfFatalities"
                id="number-of-fatalities"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={
                  form.stepFourData?.accidentsArray[index]?.numberOfInjuries
                    ? form.stepFourData?.accidentsArray[index]?.numberOfInjuries
                    : null
                }
                onChange={(e) =>
                  handleAccidentsChange(index, e.target.name, e.target.value)
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="number-of-hazardous-material-spill"
              className="block text-xs px-1 font-medium text-gray-900 text-left mt-0"
            >
              Number of Hazardous Material Spills
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="numberOfHazardousMaterialSpills"
                id="number-of-hazardous-material-spill"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={
                  form.stepFourData?.accidentsArray[index]
                    ?.numberOfHazardousMaterialSpills
                    ? form.stepFourData?.accidentsArray[index]
                        ?.numberOfHazardousMaterialSpills
                    : null
                }
                onChange={(e) =>
                  handleAccidentsChange(index, e.target.name, e.target.value)
                }
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="accident-description"
              className="block text-xs px-1 font-medium text-gray-900 text-left mt-0"
            >
              Describe Accident with some details (Head-On, Rear-End, Back-end,
              etc.)
            </label>
            <div className="mt-1">
              <textarea
                id="accident-description"
                name="accidentDescription"
                rows="2"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                value={
                  form.stepFourData?.accidentsArray[index]?.accidentDescription
                    ? form.stepFourData?.accidentsArray[index]
                        ?.accidentDescription
                    : null
                }
                onChange={(e) =>
                  handleAccidentsChange(index, e.target.name, e.target.value)
                }
              />
            </div>
          </div>
          {index > 0 && (
            <div className="sm:col-span-2 sm:col-end-7 text-right">
              <button
                type="button"
                className="py-2 px-2 mt-4 bg-red-500 text-white rounded-md hover:bg-indigo-700"
                onClick={() => removeAccident(index)}
              >
                Remove Accident
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="px-4 py-2 border mx-auto border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={addAccident}
        >
          Add Accident
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

export default StepFour;

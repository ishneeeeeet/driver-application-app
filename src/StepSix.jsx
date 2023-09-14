import React, { useContext, useEffect, useReducer } from "react";
import { FormContext } from "./context";
import * as Form from "@radix-ui/react-form";


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HOURS":
      return { ...state, hoursWorked: action.payload };
    default:
      return state;
  }
};

const StepSix = ({ onNextStep, onPreviousStep }) => {
  const { form, setForm } = useContext(FormContext);
  const [state, dispatch] = useReducer(reducer, form.stepSixData);

  const handleChange = (index, value) => {
    const updatedHours = [...state.hoursWorked];
    updatedHours[index] = value;
    dispatch({ type: "SET_HOURS", payload: updatedHours });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedForm = {
      ...form,
      stepSixData: { ...form.stepSixData, hoursWorked: state.hoursWorked },
    }
    localStorage.setItem('form', JSON.stringify(updatedForm)) 
    setForm(updatedForm);
    onNextStep();
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  const getFormattedDate = (index) => {
    const today = new Date();
    const date = new Date(today);
    date.setDate(today.getDate() - index);
    return date.toISOString().split("T")[0];
  };

  return (
    <Form.Root onSubmit={onSubmit} className="max-w-screen-md mx-auto">
      <h2 className="text-base font-semibold leading-6 text-gray-900 text-center">
      Hours Worked in the Last 14 Days
      </h2>
      <div className="bg-sky-100 border rounded-md mt-8 pb-8 pl-8 pr-8">
      {state.hoursWorked.map((hours, index) => (
        <div key={index} className="sm:col-span-3">
          <label
            htmlFor={`hours-worked-${index}`}
            className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6 required"
          >
            Date: {getFormattedDate(index)}
          </label>
          <div className="mt-2">
            <select
              required
              name={`hoursWorked-${index}`}
              id={`hours-worked-${index}`}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={hours}
              onChange={(e) => handleChange(index, e.target.value)}
            >
              <option selected value="">
                Select from options
              </option>
              <option value="did not work">Did not Work</option>
              <option value="1 hour">1 hour</option>
              <option value="2 hours">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
              <option value="5">5 hours</option>
              <option value="6">6 hours</option>
              <option value="7">7 hours</option>
              <option value="8">8 hours</option>
              <option value="9">9 hours</option>
              <option value="10">10 hours</option>
              <option value="11">11 hours</option>
              <option value="12">12 hours</option>
              <option value="13">13 hours</option>
              <option value="14">14 hours</option>
              <option value="15">15 hours</option>
              <option value="16">16 hours</option>
            </select>
          </div>
        </div>
      ))}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPreviousStep}
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

export default StepSix;

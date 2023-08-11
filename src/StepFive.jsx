import React, { useContext, useReducer } from "react";
import { FormContext } from "./context";


const initialState = {
  hoursWorked: new Array(14).fill(0),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HOURS":
      return { ...state, hoursWorked: action.payload };
    default:
      return state;
  }
};

const StepFive = ({ onNextStep, onPreviousStep }) => {
  const { form, setForm } = useContext(FormContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (index, value) => {
    const updatedHours = [...state.hoursWorked];
    updatedHours[index] = value;
    dispatch({ type: "SET_HOURS", payload: updatedHours });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      stepFiveData: {
        hoursWorked: state.hoursWorked,
      },
    });
    onNextStep();
  };

  const getFormattedDate = (index) => {
    const today = new Date();
    const date = new Date(today);
    date.setDate(today.getDate() - index);
    return date.toISOString().split("T")[0];
  };

  return (
    <form onSubmit={onSubmit} className="max-w-screen-md mx-auto">
      <h1 className="mb-4 mt-6 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">
        Hours Worked in the Last 14 Days
      </h1>
      {state.hoursWorked.map((hours, index) => (
        <div key={index} className="sm:col-span-3">
          <label
            htmlFor={`hours-worked-${index}`}
            className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
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
              <option selected disabled value="">Select from options</option>
              <option value="did not work">Did not work</option>
              <option value="1">1 hour</option>
              <option value="3">2 hours</option>
              <option value="3">3 hours</option>
              <option value="2">4 hours</option>
              <option value="5">5 hours</option>
              <option value="6">6 hours</option>
              <option value="7">7 hours</option>
              <option value="8">8 hours</option>
              <option value="9">9 hours</option>
              <option value="10">10 hours</option>
              <option value="1">11 hours</option>
              <option value="2">12 hours</option>
              <option value="3">13 hours</option>
              <option value="4">14 hours</option>
              <option value="5">15 hours</option>
              <option value="6">16 hours</option>
              
            </select>
          </div>
        </div>
      ))}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPreviousStep}
          className="py-2 px-4 mt-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Previous Step
        </button>

        <button
          type="submit"
          className="py-2 px-4 mt-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepFive;

import React, { useContext, useState, useEffect } from "react";
import { FormContext, useFormContext } from "./context";

const StepSix = ({ onNextStep }) => {
  const { form, setForm } = useContext(FormContext);
  const [workHistory, setWorkHistory] = useState(form.workHistory);

  const handleHoursWorkedChange = (index, hoursWorked) => {
    const updatedWorkHistory = [...workHistory];
    updatedWorkHistory[index] = hoursWorked;
    setWorkHistory(updatedWorkHistory);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validate work history
    if (workHistory.some((hours) => hours === "" || isNaN(hours) || hours < 0)) {
      alert("Please enter valid hours worked for all days.");
      return;
    }

    const workHistoryObjects = workHistory.map((hours, index) => ({
      date: last14Days[index],
      hoursWorked: hours,
    }));

    setForm({ ...form, workHistory: workHistoryObjects });

    console.log("Work history submitted successfully!");
    onNextStep();
  };

  const today = new Date();
  const last14Days = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - i);
    return date;
  });

  useEffect(() => {
    if (form.workHistory) {
      setWorkHistory(form.workHistory);
    }
  }, []);

  const formatDate = (date) => {
    const options = { weekday: "short", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <form onSubmit={onSubmit} className="max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-800 mt-6 mb-4 lg:text-3xl md:mb-6">
        Work History for the Last 14 Days
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {last14Days.map((date, index) => (
          <div key={index}>
            <label
              htmlFor={`hours-worked-${index}`}
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-4"
            >
              Date: {formatDate(date)}
            </label>
            <div className="mt-2">
              <input
                type="number"
                id={`hours-worked-${index}`}
                name={`hoursWorked-${index}`}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={workHistory[index]}
                onChange={(e) => handleHoursWorkedChange(index, e.target.value)}
                required
                min="0"
              />
              {!workHistory[index] && (
                <p className="text-red-600 text-xs mt-1">Hours worked is required.</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
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

export default StepSix;

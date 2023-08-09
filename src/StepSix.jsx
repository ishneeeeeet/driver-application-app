import React, { useState } from "react";

const StepSix = ({ onNextStep }) => {
  const [workHistory, setWorkHistory] = useState([]);

  // Calculate the dates for the last 14 days
  const today = new Date();
  const last14Days = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - i);
    return date.toISOString().split("T")[0];
  });

  const handleHoursWorkedChange = (index, hoursWorked) => {
    const updatedWorkHistory = [...workHistory];
    updatedWorkHistory[index].hoursWorked = hoursWorked;
    setWorkHistory(updatedWorkHistory);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validate work history here if needed

    console.log("Work history submitted successfully!");
    onNextStep();
  };

  return (
    <form onSubmit={onSubmit} className="max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-800 mt-6 mb-4 lg:text-3xl md:mb-6">
        Work History for the Last 14 Days
      </h1>
      {last14Days.map((date, index) => (
        <div key={index} className="sm:col-span-3">
          <label
            htmlFor={`hours-worked-${index}`}
            className="block text-sm font-medium leading-6 text-gray-900 text-left mt-4"
          >
            Date: {date}
          </label>
          <div className="mt-2">
            <input
              type="number"
              id={`hours-worked-${index}`}
              name={`hoursWorked-${index}`}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={workHistory[index]?.hoursWorked || ""}
              onChange={(e) => handleHoursWorkedChange(index, e.target.value)}
            />
          </div>
        </div>
      ))}
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

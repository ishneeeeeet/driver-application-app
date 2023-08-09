import { Form } from "@radix-ui/react-form";
import React, { useEffect, useReducer, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const initialState = {
  accidentInLast3Years: null,
  dateOfAccident: "",
  accidentDescription: "",
  accidentLocation: "",
  hasFatalities: false,
  hasInjuries: false,
  accidentsArray: [],
  trafficConvictions: false,
  convictionDate: "",
  convictionLocation: "",
  charge: "",
  penalty: "",
  trafficConvictionsArray: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, [action.field]: action.payload };
    case "ADD_ACCIDENT":
      return {
        ...state,
        accidentsArray: state.accidentInLast3Years
          ? [...state.accidentsArray, { ...state }]
          : state.accidentsArray,
        showAdditionalAccidentFields: false,
      };
    case "ADD_TRAFFIC_CONVICTION":
      return {
        ...state,
        trafficConvictionsArray: state.trafficConvictions
          ? [
              ...state.trafficConvictionsArray,
              {
                convictionDate: state.convictionDate,
                convictionLocation: state.convictionLocation,
                charge: state.charge,
                penalty: state.penalty,
              },
            ]
          : state.trafficConvictionsArray,
      };
    case "TOGGLE_ACCIDENT_STATUS":
      return {
        ...state,
        accidentInLast3Years: action.payload,
        accidentsArray: action.payload ? state.accidentsArray : [], // Clear the accidentsArray if status changes to false
        showAdditionalAccidentFields: false,
      };
    case "TOGGLE_TRAFFIC_CONVICTIONS_STATUS":
      return {
        ...state,
        trafficConvictions: action.payload,
        trafficConvictionsArray: action.payload
          ? state.trafficConvictionsArray
          : [], // Clear the trafficConvictionsArray if status changes to false
      };
    default:
      return state;
  }
};

const StepFour = ({ onNextStep }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sign, setSign] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    // Check if any required questions are not answered
    if (
      state.accidentInLast3Years === null ||
      state.trafficConvictions === null ||
      (state.accidentInLast3Years &&
        (!state.dateOfAccident ||
          !state.accidentDescription ||
          !state.accidentLocation)) ||
      (state.trafficConvictions &&
        (!state.convictionDate ||
          !state.convictionLocation ||
          !state.charge ||
          !state.penalty))
    ) {
      alert("Please answer all required questions.");
      return;
    }

    console.log("Form submitted successfully!");
    onNextStep();
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // For radio buttons, 'checked' indicates the selected value.
    // So we directly set the value to 'checked' instead of 'value'.
    const payload = type === "radio" ? e.target.checked : value;

    dispatch({ type: "SET_VALUE", field: name, payload });

    if (name === "accidentInLast3Years") {
      const isAccidentInLast3Years = payload === "true";
      dispatch({
        type: "TOGGLE_ACCIDENT_STATUS",
        payload: isAccidentInLast3Years,
      });
    }

    if (name === "trafficConvictions") {
      const hasTrafficConvictions = payload === "true";
      dispatch({
        type: "TOGGLE_TRAFFIC_CONVICTIONS_STATUS",
        payload: hasTrafficConvictions,
      });
    }
  };
  const handleAddAccident = () => {
    const {
      dateOfAccident,
      accidentDescription,
      accidentLocation,
      hasFatalities,
      hasInjuries,
    } = state;
    const newAccident = {
      dateOfAccident,
      accidentDescription,
      accidentLocation,
      hasFatalities: hasFatalities === "true",
      hasInjuries: hasInjuries === "true",
    };
    dispatch({ type: "ADD_ACCIDENT", payload: newAccident });
  };
  const handleAddTrafficConviction = () => {
    const newTrafficConviction = {
      convictionDate: state.convictionDate,
      convictionLocation: state.convictionLocation,
      charge: state.charge,
      penalty: state.penalty,
    };
    dispatch({ type: "ADD_TRAFFIC_CONVICTION", payload: newTrafficConviction });
  };

  useEffect(() => {
    console.log("latest: ", state.accidentInLast3Years);
  }, [state.accidentInLast3Years]);

  return (
    <form onSubmit={onSubmit} className="max-w-screen-md mx-auto">
      <div className="sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium leading-6 text-gray-900 text-left"
        >
          Any accidents in the last 3 years?
        </label>
        <div className="mt-2">
        <select
  required
  id="accidentInLast3Years"
  name="accidentInLast3Years"
  autoComplete="off" // Disable browser's autocomplete for better UX
  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
  onChange={handleChange}
  defaultValue="" // Initially set to an empty value
>
  <option value="" disabled>
    Select
  </option>
  <option value="true">True</option>
  <option value="false">False</option>
</select>

        </div>
      </div>
      {state.accidentsArray.map((accident, index) => (
        <div key={index}>
          <div className="sm:col-span-3">
            <label
              htmlFor={`accident-date-${index}`}
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Date of Accident
            </label>
            <div className="mt-2">
              <input
                type="date"
                name={`accidentDate-${index}`}
                id={`accident-date-${index}`}
                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={accident.dateOfAccident}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="accident-description"
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Nature of Accident (Head-On, Rear-End, Upset, Etc)
            </label>
            <div className="mt-2">
              <textarea
                id="accident-description"
                name="accidentDescription"
                rows="3"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.accidentDescription}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="accident-location"
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Location of Accident
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="accident-location"
                name="accidentLocation"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.accidentLocation}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6">
              Fatalities
            </label>
            <div className="mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="hasFatalities"
                  id="fatalities-true"
                  value="true"
                  checked={state.hasFatalities}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="fatalities-true" className="mr-4">
                  Yes
                </label>

                <input
                  type="radio"
                  name="hasFatalities"
                  id="fatalities-false"
                  value="false"
                  checked={state.hasFatalities}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="fatalities-false">No</label>
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6">
              Injuries
            </label>
            <div className="mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="hasInjuries"
                  id="injuries-true"
                  value="true"
                  checked={state.hasInjuries}
                  onChange={handleChange}
                  className="mr-2 "
                />
                <label htmlFor="injuries-true" className="mr-4">
                  Yes
                </label>

                <input
                  type="radio"
                  name="hasInjuries"
                  id="injuries-false"
                  value="false"
                  checked={state.hasInjuries}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="injuries-false">No</label>
              </div>
            </div>
          </div>
        </div>
      ))}

      {state.accidentInLast3Years ? (
        <>
          <div className="sm:col-span-3">
            <label
              htmlFor="date-of-birth"
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Date of Accident
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="dateOfAccident"
                id="date-of-birth"
                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.dateOfAccident}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="accident-description"
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Nature of Accident (Head-On, Rear-End, Upset, Etc)
            </label>
            <div className="mt-2">
              <textarea
                id="accident-description"
                name="accidentDescription"
                rows="3"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.accidentDescription}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="accident-location"
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Location of Accident
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="accident-location"
                name="accidentLocation"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.accidentLocation}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6">
              Fatalities
            </label>
            <div className="mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="hasFatalities"
                  id="fatalities-true"
                  value="true"
                  checked={state.hasFatalities}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="fatalities-true" className="mr-4">
                  Yes
                </label>

                <input
                  type="radio"
                  name="hasFatalities"
                  id="fatalities-false"
                  value="false"
                  checked={state.hasFatalities}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="fatalities-false">No</label>
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6">
              Injuries
            </label>
            <div className="mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="hasInjuries"
                  id="injuries-true"
                  value="true"
                  checked={state.hasInjuries}
                  onChange={handleChange}
                  className="mr-2 "
                />
                <label htmlFor="injuries-true" className="mr-4">
                  Yes
                </label>

                <input
                  type="radio"
                  name="hasInjuries"
                  id="injuries-false"
                  value="false"
                  checked={state.hasInjuries}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="injuries-false">No</label>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {/* Button to add an additional accident */}
      {state.accidentInLast3Years && (
        <div className="sm:col-span-3 flex justify-end">
          <button
            type="button"
            onClick={handleAddAccident}
            className="py-2 px-4 mt-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add Additional Accident
          </button>
        </div>
      )}

      <div className="sm:col-span-3">
        <label
          htmlFor="traffic-convictions"
          className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
        >
          Any Traffic Convictions in the last 3 years?
        </label>
        <div className="mt-2">
          <select
            id="traffic-convictions"
            name="trafficConvictions"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            onChange={handleChange}
          >
            <option disabled selected hidden>
              Select
            </option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
      {state.trafficConvictionsArray.map((conviction, index) => (
        <div key={index}>
          <h3>Traffic Conviction {index + 1}</h3>
          <div className="sm:col-span-3">
            <label
              htmlFor={`conviction-date-${index}`}
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Conviction Date
            </label>
            <div className="mt-2">
              <input
                required
                type="date"
                name={`convictionDate-${index}`}
                id={`conviction-date-${index}`}
                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={conviction.convictionDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="conviction-location"
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Conviction Location
            </label>
            <div className="mt-2">
              <input
                required
                type="text"
                id="conviction-location"
                name="convictionLocation"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.convictionLocation}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="charge"
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Charge
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="charge"
                name="charge"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.charge}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="penalty"
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Penalty
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="penalty"
                name="penalty"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.penalty}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      ))}
      {state.trafficConvictions && (
        <>
          <div className="sm:col-span-3">
            <label
              htmlFor="conviction-date"
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Conviction Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="convictionDate"
                id="conviction-date"
                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.convictionDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="conviction-location"
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Conviction Location
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="conviction-location"
                name="convictionLocation"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.convictionLocation}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="charge"
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Charge
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="charge"
                name="charge"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.charge}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="penalty"
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
              Penalty
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="penalty"
                name="penalty"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.penalty}
                onChange={handleChange}
              />
            </div>
          </div>
        </>
      )}
      {state.trafficConvictions && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleAddTrafficConviction}
            className="py-2 px-4 mt-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add Additional Traffic Conviction
          </button>
        </div>
      )}

      <h1 className="mb-4 mt-6 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">TO BE READ AND SIGNED BY THE APLLICANT</h1>
      <p>I understand that information I provide regarding current and/or previous employers may be used, and those
employer(s) will be contacted, for the purpose of investigating my safety performance history.
I authorize my prospect employer to make such investigations and inquiries of my personal, employment, financial
or medical history and other related matters as may be necessary in arriving at an employment decision.
(Generally, inquiries regarding medical history will be made only if an after a conditional offer of employment has
been extended) I hereby release employers, schools, health care providers and other persons from all liability in
responding to inquiries and releasing information in connection with my application.
I agree that, if hired, I will immediately inform my employer in writing of any violations or accidents that occur
while I am operating any motor vehicle. I will also immediately inform my employer of any suspensions,
restrictions, prohibitions, or any other change in the status of my driver’s license. By signing this application, I certify that this application was completed by me and that all entries on it and
information in it are true and complete to the best of my knowledge. In the event of employment, I understand
that false or misleading information given in my application or interview(s) may result in discharge. I understand,
also, that I am required to abide by all rules and regulations of the company.</p>
      <div className="flex justify-center">
          <div className="sm:col-span-3">
            <SignatureCanvas required
              canvasProps={{ width: 400, height: 70, className: "signCanvas" }}
              ref={(data) => setSign(data)}
            />
          </div>
        </div>
      <button
        type="submit"
        onSubmit={onSubmit}
        className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
      >
        Next
      </button>
    </form>
  );
};

export default StepFour;

import React, { useReducer } from 'react';

const initialState = {
  accidentInLast3Years: false,
  dateOfAccident: '',
  accidentDescription: '',
  accidentLocation: '',
  hasFatalities: false,
  hasInjuries: false,
  accidentsArray: [],
  trafficConvictions: false,
  convictionDate: '',
  convictionLocation: '',
  charge: '',
  penalty: '',
  trafficConvictionsArray: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, [action.field]: action.payload };
    case 'ADD_ACCIDENT':
      return {
        ...state,
        accidentsArray: state.accidentInLast3Years
          ? [...state.accidentsArray, { ...state }]
          : state.accidentsArray,
      };
    case 'ADD_TRAFFIC_CONVICTION':
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
    default:
      return state;
  }
};


const StepFour = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_VALUE', field: name, payload: value });
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium leading-6 text-gray-900 text-left"
        >
          Any accidents in the last 3 years?
        </label>
        <div className="mt-2">
          <select
            id="country"
            name="accidentInLast3Years"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            onChange={handleChange}
          >
            <option>Select</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>

      {state.accidentInLast3Years && (
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
            <label
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
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
                  checked={!state.hasFatalities}
                  onChange={handleChange}
                />
                <label htmlFor="fatalities-false">No</label>
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              className="block text-sm font-medium leading-6 text-gray-900 text-left mt-6"
            >
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
                  className="mr-2"
                />
                <label htmlFor="injuries-true" className="mr-4">
                  Yes
                </label>

                <input
                  type="radio"
                  name="hasInjuries"
                  id="injuries-false"
                  value="false"
                  checked={!state.hasInjuries}
                  onChange={handleChange}
                />
                <label htmlFor="injuries-false">No</label>
              </div>
            </div>
          </div>
        </>
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
            <option>Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>

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
      {/* ... Existing JSX for accidents list ... */}
    </div>
  );
};

export default StepFour;

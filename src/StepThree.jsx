import React from 'react'

const StepThree = () => {
  return (
    <div className="max-w-screen-md mx-auto border-b border-gray-900/10 pb-12 text-left">
          <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">Employment History</h2>
          

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Name of Employer
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Position Held
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            

            

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
          <label htmlFor="from-date" className="block text-sm font-medium leading-6 text-gray-900">
            From Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="from-date"
              id="from-date"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="to-date" className="block text-sm font-medium leading-6 text-gray-900">
            To Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="to-date"
              id="to-date"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="reason-for-leaving" className="block text-sm font-medium leading-6 text-gray-900">
            Reason for Leaving
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="reason-for-leaving"
              id="reason-for-leaving"
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        
          </div>
          <div className="sm:col-span-3 w-full mt-6">
          <label htmlFor="question-one" className="block text-sm font-medium leading-6 text-gray-900">
            1. Were you subject to the FMCSRs* while employed here?
          </label>
          <div className="mt-2">
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                name="question-one"
                value="True"
                id="question-one-true"
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="question-one-true" className="text-gray-900">
                True
              </label>
              <input
                type="radio"
                name="question-one"
                value="False"
                id="question-one-false"
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="question-one-false" className="text-gray-900">
                False
              </label>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 mt-4">
          <label htmlFor="question-two" className="block text-sm font-medium leading-6 text-gray-900">
            2. Was your job designated as a safety-sensitive function in any DOT-regulated mode subject to the drug and alcohol testing requirements of 49 CFR Part 40?
          </label>
          <div className="mt-2">
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                name="question-two"
                value="True"
                id="question-two-true"
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="question-two-true" className="text-gray-900">
                True
              </label>
              <input
                type="radio"
                name="question-two"
                value="False"
                id="question-two-false"
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="question-two-false" className="text-gray-900">
                False
              </label>
            </div>
          </div>
        </div>
        </div>
  )
}

export default StepThree
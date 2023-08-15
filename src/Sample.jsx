import React from 'react'

const Sample = () => {
  return (
    <div>
<div className="grid px-4 py-4 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-sky-100 border rounded-md">
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
                value={state.convictionDate}
                onChange={handleChange}
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
                value={state.convictionLocation}
                onChange={handleChange}
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
                value={state.charge}
                onChange={handleChange}
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
                value={state.penalty}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
<div>
<div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={handleAddTrafficConviction}
            className="px-4 py-2 border mx-auto border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-400 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-800"
          >
            Add more Convictions +
          </button>
        </div>
        <div>
        <h4 className="mb-4 mt-6 text-xl font-bold text-center text-gray-800  md:mb-6">
        TO BE READ AND SIGNED BY THE APLLICANT
      </h4>
      <p className="text-sm text-justify">
        I understand that information I provide regarding current and/or
        previous employers may be used, and those employer(s) will be contacted,
        for the purpose of investigating my safety performance history. I
        authorize my prospect employer to make such investigations and inquiries
        of my personal, employment, financial or medical history and other
        related matters as may be necessary in arriving at an employment
        decision. (Generally, inquiries regarding medical history will be made
        only if an after a conditional offer of employment has been extended) I
        hereby release employers, schools, health care providers and other
        persons from all liability in responding to inquiries and releasing
        information in connection with my application. I agree that, if hired, I
        will immediately inform my employer in writing of any violations or
        accidents that occur while I am operating any motor vehicle. I will also
        immediately inform my employer of any suspensions, restrictions,
        prohibitions, or any other change in the status of my driver’s license.
        By signing this application, I certify that this application was
        completed by me and that all entries on it and information in it are
        true and complete to the best of my knowledge. In the event of
        employment, I understand that false or misleading information given in
        my application or interview(s) may result in discharge. I understand,
        also, that I am required to abide by all rules and regulations of the
        company.
      </p>
        </div>
</div>
<button
          type="button"
          onClick={onNextStep}
          className="py-1.5 px-4 mt-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-900"
        >
          Next ►
        </button>
    </div>
  )
}

export default Sample
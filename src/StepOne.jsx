import React, { useState } from "react";

const RadioInput = ({ name, value, checkedValue, onChange }) => (
  <>
    <input
      type="radio"
      name={name}
      value={value}
      checked={checkedValue === value}
      onChange={onChange}
    />
    <label htmlFor={name} className="text-gray-800">
      {value}
    </label>
  </>
);

const StepOne = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    status: "", // Added "status" field to formData
    company: "",
    dateOfBirth: "",
    province: "",
    driverLicenseNumber: "",
    driverLicenseExpiry: "",
    driverLicenseClass: "",
    questionOne: "",
    questionTwo: "",
    questionThree: "",
    questionFour: "",
    questionFive: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.status === "") {
      setErrors({ ...errors, status: "Status is required" });
      return;
    }

    onNext(formData); // Send the form data to the next step
  };

  return (
    <form className="max-w-screen-md mx-auto" onSubmit={onSubmit}>
      <div className="max-w-screen-md mx-auto border-b border-gray-900/10 pb-12 text-left">
        <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
          Personal Information
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
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
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
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

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Date of Birth Field */}
          <div className="sm:col-span-3">
            <label
              htmlFor="date-of-birth"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date of Birth
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="dateOfBirth"
                id="date-of-birth"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* End Date of Birth Field */}

          {/* Status Field */}
          
          {/* End Status Field */}
        </div>
        <div className="sm:col-span-3 w-full mt-6">
          <label htmlFor="question-one" className="block text-sm font-medium leading-6 text-gray-900">
            Status
          </label>
          <div className="mt-2">
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                name="question-one"
                value="Citizen"
                id="question-one-true"
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="question-one-true" className="text-gray-900">
                Citizen
              </label>
              <input
                type="radio"
                name="question-one"
                value="False"
                id="question-one-false"
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="question-one-false" className="text-gray-900">
               PR
              </label>
              <input
                type="radio"
                name="question-one"
                value="False"
                id="question-one-false"
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="question-one-false" className="text-gray-900">
               Work Permit
              </label>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 w-full mt-6">
          <label htmlFor="question-one" className="block text-sm font-medium leading-6 text-gray-900">
            Position Applied For?
          </label>
          <div className="mt-2">
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                name="question-one"
                value="Citizen"
                id="question-one-true"
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="question-one-true" className="text-gray-900">
                Driver 
              </label>
              <input
                type="radio"
                name="question-one"
                value="False"
                id="question-one-false"
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="question-one-false" className="text-gray-900">
               Owner Operator
              </label>
              <input
                type="radio"
                name="question-one"
                value="False"
                id="question-one-false"
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="question-one-false" className="text-gray-900">
               Other
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto border-b border-gray-900/10 pb-12 text-left">
        <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
          Driver License Information
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Driver License Number
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
            Driver License Class
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

          <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>AB</option>
              <option>BC</option>
              <option>ON</option>
            </select>
          </div>
        </div>

          {/* Date of Birth Field */}
          <div className="sm:col-span-3">
            <label
              htmlFor="date-of-birth"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date of Birth
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="dateOfBirth"
                id="date-of-birth"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* End Date of Birth Field */}

          {/* Status Field */}
          
          {/* End Status Field */}
        </div>
        
        <div className="flex flex-col mb-4 mt-6">
        <label htmlFor="questionOne" className="block text-sm font-medium leading-6 text-gray-900">
           1. Do you hold a driver's license in any other jurisdiction other than the mentioned above or do you hold any driver's license in any other name?
        </label>
        <div className="flex items-center space-x-4">
          <RadioInput
            name="questionOne"
            value="True"
            checkedValue={formData.questionOne}
            onChange={handleChange}
          />
          <RadioInput
            name="questionOne"
            value="False"
            checkedValue={formData.questionOne}
            onChange={handleChange}
          />
        </div>
        {errors.questionOne ? (
          <span className="text-red-500 text-sm">{errors.questionOne}</span>
        ) : null}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="questionTwo" className="block text-sm font-medium leading-6 text-gray-900">
          2. Have you ever been denied a license, permit, or privilege to operate a motor vehicle?
        </label>
        <div className="flex items-center space-x-4">
          <RadioInput
            name="questionTwo"
            value="True"
            checkedValue={formData.questionTwo}
            onChange={handleChange}
          />
          <RadioInput
            name="questionTwo"
            value="False"
            checkedValue={formData.questionTwo}
            onChange={handleChange}
          />
        </div>
        {errors.questionTwo ? (
          <span className="text-red-500 text-sm">{errors.questionTwo}</span>
        ) : null}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="questionThree" className="block text-sm font-medium leading-6 text-gray-900">
          3. Has any license, permit, or privilege ever been suspended or revoked?
        </label>
        <div className="flex items-center space-x-4">
          <RadioInput
            name="questionThree"
            value="True"
            checkedValue={formData.questionThree}
            onChange={handleChange}
          />
          <RadioInput
            name="questionThree"
            value="False"
            checkedValue={formData.questionThree}
            onChange={handleChange}
          />
        </div>
        {errors.questionThree ? (
          <span className="text-red-500 text-sm">{errors.questionThree}</span>
        ) : null}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="questionFour" className="block text-sm font-medium leading-6 text-gray-900">
          4. Have you ever tested positive or refused to submit an alcohol or controlled substance test?
        </label>
        <div className="flex items-center space-x-4">
          <RadioInput
            name="questionFour"
            value="True"
            checkedValue={formData.questionFour}
            onChange={handleChange}
          />
          <RadioInput
            name="questionFour"
            value="False"
            checkedValue={formData.questionFour}
            onChange={handleChange}
          />
        </div>
        {errors.questionFour ? (
          <span className="text-red-500 text-sm">{errors.questionFour}</span>
        ) : null}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="questionFive" className="block text-sm font-medium leading-6 text-gray-900">
          5. Have you had any injury or medical condition which might affect your job (convulsive disorder, epilepsy, fainting, or heart disease)?
        </label>
        <div className="flex items-center space-x-4">
          <RadioInput
            name="questionFive"
            value="True"
            checkedValue={formData.questionFive}
            onChange={handleChange}
          />
          <RadioInput
            name="questionFive"
            value="False"
            checkedValue={formData.questionFive}
            onChange={handleChange}
          />
        </div>
        {errors.questionFive ? (
          <span className="text-red-500 text-sm">{errors.questionFive}</span>
        ) : null}
      </div>
      </div>
    </form>
  );
};

export default StepOne;

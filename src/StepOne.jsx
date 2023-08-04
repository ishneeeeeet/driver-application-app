import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./context";
import * as Form from "@radix-ui/react-form";
import * as Label from "@radix-ui/react-label";

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
  const { form, setForm } = useContext(FormContext);
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
    setForm((prevForm) => ({ ...prevForm, stepOneData: formData }));
    console.log(form);
  };

  useEffect(() => {
    console.log("Updated form data:", form);
  }, [form]);
  const questionFields = [
    {
      name: "questionOne",
      question:
        "1. Do you hold a driver's license in any other jurisdiction other than the mentioned above or do you hold any driver's license in any other name?",
    },
    {
      name: "questionTwo",
      question:
        "2. Have you ever been denied a license, permit, or privilege to operate a motor vehicle?",
    },
    {
      name: "questionThree",
      question:
        "3. Has any license, permit, or privilege ever been suspended or revoked?",
    },
    {
      name: "questionFour",
      question:
        "4. Have you ever tested positive or refused to submit an alcohol or controlled substance test?",
    },
    {
      name: "questionFive",
      question:
        "5. Have you had any injury or medical condition which might affect your job (convulsive disorder, epilepsy, fainting, or heart disease)?",
    },
  ];

  return (
    <Form.Root className="max-w-screen-md mx-auto" onSubmit={onSubmit}>
      <div className="max-w-screen-md mx-auto border-b border-gray-900/10 pb-12 text-left">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <Label.Root
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </Label.Root>
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

          <Form.Field className="sm:col-span-4">
            <Form.Label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </Form.Label>
            <Form.Message
              className="text-[13px] text-red-500 opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your email
            </Form.Message>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="typeMismatch"
            >
              Please provide a valid email
            </Form.Message>
            <Form.Control asChild className="mt-2">
              <input
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </Form.Control>
          </Form.Field>

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
        </div>
        <div className="sm:col-span-3 w-full mt-6">
          <label
            htmlFor="question-one"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
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
          <label
            htmlFor="question-one"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
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
              Province
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
              Date of Expiry
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
        </div>
        <div className="mt-6">
          {questionFields.map(({ name, question }) => (
            <div key={name} className="flex flex-col mb-4">
              <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {question}
              </label>
              <div className="flex items-center space-x-4">
                <RadioInput
                  name={name}
                  value="True"
                  checkedValue={formData[name]}
                  onChange={handleChange}
                />
                <RadioInput
                  name={name}
                  value="False"
                  checkedValue={formData[name]}
                  onChange={handleChange}
                />
              </div>
              {errors[name] && (
                <span className="text-red-500 text-sm">{errors[name]}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Form.Submit asChild>
        <button className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Next
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default StepOne;

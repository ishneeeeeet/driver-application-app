import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./context";
import * as Form from "@radix-ui/react-form";
import * as Label from "@radix-ui/react-label";
import RadioInput from "./components/RadioInput";

const StepOne = ({ onNextStep, onPreviousStep }) => {
  const { form, setForm } = useContext(FormContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setForm((prevForm) => ({ ...prevForm, stepOneData: formData }));
    console.log(form);
    onNextStep();
  };
  const handlePreviousStep = () => {
    onPreviousStep(); // Call the onPreviousStep function from props to move back to Step 1
  };

  useEffect(() => {
    console.log("Updated form data:", form);
  }, [form]);

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
                name="firstName"
                id="first-name"
                onChange={handleChange}
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
                name="lastName"
                id="last-name"
                onChange={handleChange}
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
                onChange={handleChange}
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </Form.Control>
          </Form.Field>

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
                onChange={handleChange}
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
              <RadioInput
                name="status"
                value="Citizen"
                checkedValue={formData.status}
                onChange={handleChange}
              />
              <RadioInput
                name="status"
                value="PR"
                checkedValue={formData.status}
                onChange={handleChange}
              />
              <RadioInput
                name="status"
                value="Work Permit"
                checkedValue={formData.status}
                onChange={handleChange}
              />
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
              <RadioInput
                name="position"
                value="Driver"
                checkedValue={formData.position}
                onChange={handleChange}
              />
              <RadioInput
                name="position"
                value="Owner Operator"
                checkedValue={formData.position}
                onChange={handleChange}
              />
              <RadioInput
                name="position"
                value="Other"
                checkedValue={formData.position}
                onChange={handleChange}
              />
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
                name="driverLicenseNumber"
                onChange={handleChange}
                id="driver-license-number"
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
                onChange={handleChange}
                name="driverLicenseNumber"
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
                name="province"
                autoComplete="country-name"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="AB">AB</option>
                <option value="BC">BC</option>
                <option value="ON">ON</option>
              </select>
            </div>
          </div>

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
                name="driverLicenseExpiry"
                onChange={handleChange}
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
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <Form.Submit asChild>
          <button
            type="button"
            onClick={handlePreviousStep}
            className="box-border w-full text-gray-700 bg-gray-100 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
          >
            Previous Step
          </button>
        </Form.Submit>

        <Form.Submit asChild>
          <button
            type="submit"
            className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
          >
            Next
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default StepOne;

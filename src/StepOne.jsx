import React, { useContext, useEffect, useReducer} from "react";
import { FormContext } from "./context";
import * as Form from "@radix-ui/react-form";
import * as Label from "@radix-ui/react-label";
const initialState = {
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    cellNo: "",
    homeNo: "",
    companyAppliedFor: "",
    dateOfBirth: "",
    status: "",
    position: "",
    driverLicenseNumber: "",
    driverLicenseClass: "",
    province: "",
    driverLicenseExpiry: "",
    questionOne: "",
    questionTwo: "",
    questionThree: "",
    questionFour: "",
    questionFive: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    case "SET_CELL_NO":
      return {
        ...state,
        cellNo: action.value,
      };
    case "SET_HOME_NO":
      return {
        ...state,
        homeNo: action.value,
      };
    default:
      return state;
  }
}

const StepOne = ({ onNextStep }) => {
  const { form, setForm } = useContext(FormContext);
  const [state, dispatch] = useReducer(reducer, initialState);

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

    if (name === "cellno" || name === "phone") {
      const input = value;
      const formattedInput = formatCellNo(input);
      dispatch({
        type: name === "cellno" ? "SET_CELL_NO" : "SET_HOME_NO",
        value: formattedInput,
      });
    } else {
      dispatch({ type: "SET_FIELD", field: name, value });
    }
  };

  useEffect(() => {
    console.log("Updated form data:", form);
  }, [form]);

  const formatCellNo = (input) => {
    // Remove all non-numeric characters
    const numericInput = input.replace(/\D/g, "");

    // Apply the pattern XXX-XXX-XXXX
    const formattedInput = numericInput
      .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
      .slice(0, 12); // Limit to 12 characters

    return formattedInput;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const updatedForm = { ...form, stepOneData: state.formData };
    setForm(updatedForm);
    console.log(updatedForm);
    onNextStep();
  };

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
                required
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

          <div className="sm:col-span-3">
            <label
              htmlFor="company-applied-for"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company applying for?
            </label>
            <div className="mt-2">
              <input
                required
                type="text"
                name="companyAppliedFor"
                id="company-applied-for"
                onChange={handleChange}
                autoComplete="organization"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="date-of-birth"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date of Birth
            </label>

            <div className="mt-2">
              <input
                required
                type="date"
                name="dateOfBirth"
                id="date-of-birth"
                onChange={handleChange}
                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              htmlFor="cellno"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cell Phone Number
            </label>
            <div className="mt-2">
              <input
                type="tel"
                name="cellno"
                id="cellno"
                placeholder="123-456-7890"
                value={state.cellNo}
                onChange={handleChange}
                autoComplete="organization"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Home Phone number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="123-456-7890"
              value={state.homeNo}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3 mt-6">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Your Status in Canada
          </label>
          <div className="mt-2">
            <select
              required
              id="status"
              name="status"
              autoComplete=""
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option selected disabled value="">
                Select an option
              </option>
              <option value="WP">Work Permit</option>
              <option value="PR">Permanent Resident</option>
              <option value="CC">Canadian Citizen</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="sm:col-span-3 mt-6">
          <label
            htmlFor="position"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Position Applying for?
          </label>
          <div className="mt-2">
            <select
              required
              id="position"
              name="position"
              autoComplete="country-name"
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option selected disabled value="">
                Select an option
              </option>
              <option value="Driver">Driver</option>
              <option value="Owner Operator">Owner Operator</option>
              <option value="Owner Operator">Other</option>
            </select>
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
                required
                type="number"
                name="driverLicenseNumber"
                onChange={handleChange}
                id="driver-license-number"
                autoComplete="number"
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
              <select
                required
                onChange={handleChange}
                name="driverLicenseNumber"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option selected disabled value="">
                  Select an option
                </option>
                <option value="option1">Class 1</option>
                <option value="option2">Class 2</option>
                <option value="option2">Class 3</option>
                <option value="option2">Class 4</option>
                <option value="option2">Class 5</option>
                <option value="option2">Class 6</option>
                <option value="option2">Class 7</option>
              </select>
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
                required
                id="country"
                name="province"
                autoComplete="country-name"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option selected disabled value="">
                  Select an option
                </option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="ON">Ontario</option>
                <option value="ON">Saskatchewan</option>
                <option value="ON">Manitoba</option>
                <option value="ON">Nova Scotia</option>
                <option value="ON">New Brunswick</option>
                <option value="ON">Newfoundland</option>
                <option value="ON">Quebec</option>
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
                required
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
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {question}
                </label>
                <div className="mt-2">
                  <select
                    required
                    id="country"
                    name="province"
                    autoComplete="country-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option selected disabled value="">
                      Select an option
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Form.Submit asChild>
          <button
            type="submit"
            className="py-2 px-4 mt-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Next
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default StepOne;

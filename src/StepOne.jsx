import React, { useContext, useEffect } from "react";
import { FormContext } from "./context";
import * as Form from "@radix-ui/react-form";
import * as Label from "@radix-ui/react-label";
const PDFJS = require("pdfjs-dist/webpack");

const StepOne = ({ onNextStep }) => {
  const { form, setForm } = useContext(FormContext);

  const questionFields = [
    {
      name: "questionOne",
      question:
        "Do you hold a driver's license in any other jurisdiction other than the mentioned above or do you hold any driver's license in any other name?",
    },
    {
      name: "questionTwo",
      question:
        "Have you ever been denied a license, permit, or privilege to operate a motor vehicle?",
    },
    {
      name: "questionThree",
      question:
        "Has any license, permit, or privilege ever been suspended or revoked?",
    },
    {
      name: "questionFour",
      question:
        "Have you ever tested positive or refused to submit an alcohol or controlled substance test?",
    },
    {
      name: "questionFive",
      question:
        "Have you had any injury or medical condition which might affect your job (convulsive disorder, epilepsy, fainting, or heart disease)?",
    },
  ];

  const convertPdfToImages = async (file) => {
    const images = [];
    const data = await toBase64(file);
    const pdf = await PDFJS.getDocument(data).promise;
    const canvas = document.createElement("canvas");
    for (let i = 0; i < pdf.numPages; i++) {
      const page = await pdf.getPage(i + 1);
      const viewport = page.getViewport({ scale: 1 });
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      await page.render({ canvasContext: context, viewport: viewport }).promise;
      images.push(canvas.toDataURL());
    }
    canvas.remove();
    return images;
  }

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
});

  const handleChange = async (e) => {
    const { name, value } = e.target;

    if (name === "cellNo" || name === "homeNo") {
      const input = value;
      const formattedInput = formatCellNo(input);
      setForm((prevForm) => ({
        ...prevForm,
        stepOneData: {
          ...prevForm.stepOneData,
          [name]: formattedInput,
        },
      }));
    } else if (name == "driverLicenseBack" || name == "driverLicenseFront") {
      try {
        const file =  e.target.files[0]
        const result = file.size > 1000000 ? '' : {name: file.name, base64: file.name.split('.').pop() === 'pdf' ? await convertPdfToImages(file) : [await toBase64(file)]};

        setForm((prevForm) => ({
          ...prevForm,
          stepOneData: {
            ...prevForm.stepOneData,
            [name]: result,
          },
        }));
      } catch (error) {
        console.error(error);
        setForm((prevForm) => ({
          ...prevForm,
          stepOneData: {
            ...prevForm.stepOneData,
            [name]: "",
          },
        }));
      }
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        stepOneData: {
          ...prevForm.stepOneData,
          [name]: value,
        },
      }));
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
    console.log(form);
    onNextStep();
    localStorage.setItem("form", JSON.stringify(form));
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value);
    if (isNaN(intValue) || intValue < 0 || intValue > 24) {
      alert(
        "Please enter a number between 0 and 24 in the driving experience year fields."
      );
      setForm((prevForm) => ({
        ...prevForm,
        stepOneData: {
          ...prevForm.stepOneData,
          [name]: "",
        },
      }));
    }
  };

  return (
    <Form.Root className="max-w-screen-md mx-auto" onSubmit={onSubmit}>
      <div className="max-w-screen-md mx-auto border-b border-gray-900/10 pb-12 text-left">
        <div className="grid px-4 py-4 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-sky-100 border rounded-md">
          <div className="sm:col-span-3">
            <label
              htmlFor="company-applied-for"
              className="block text-sm font-medium mb-1 px-1 text-gray-900 required"
            >
              Company applying for?
            </label>
            <div className="mt-1">
              <input
                required
                type="text"
                name="companyAppliedFor"
                id="company-applied-for"
                value={
                  form.stepOneData?.companyAppliedFor
                    ? form.stepOneData?.companyAppliedFor
                    : null
                }
                onChange={handleChange}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="position"
              className="block text-sm font-medium mb-1 px-1 text-gray-900 required"
            >
              Position Applying for?
            </label>
            <div className="mt-1">
              <select
                required
                id="position"
                name="position"
                value={
                  form.stepOneData?.position ? form.stepOneData?.position : null
                }
                autoComplete="country-name"
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs sm:leading-6"
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

          <div className="sm:col-span-3">
            <Label.Root
              htmlFor="first-name"
              className="block text-xs font-medium mb-1 px-1 text-gray-900 required"
            >
              First name
            </Label.Root>
            <div className="mt-1">
              <input
                required
                type="text"
                name="firstName"
                id="first-name"
                value={
                  form.stepOneData?.firstName
                    ? form.stepOneData?.firstName
                    : null
                }
                onChange={handleChange}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-xs font-medium mb-1 px-1 text-gray-900 required"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                required
                type="text"
                name="lastName"
                id="last-name"
                value={
                  form.stepOneData?.lastName ? form.stepOneData?.lastName : null
                }
                onChange={handleChange}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
              />
            </div>
          </div>

          <Form.Field className="sm:col-span-3">
            <Form.Label
              htmlFor="email"
              className="block text-xs font-medium mb-1 px-1 text-gray-900 required"
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
            <Form.Control asChild className="mt-1">
              <input
                required
                id="email"
                name="email"
                type="email"
                value={form.stepOneData?.email ? form.stepOneData?.email : null}
                onChange={handleChange}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
              />
            </Form.Control>
          </Form.Field>
          <div className="sm:col-span-1">
            <label
              htmlFor="date-of-birth"
              className="block text-xs font-medium mb-1 px-1 text-gray-900 required"
            >
              Date of Birth
            </label>

            <div className="mt-1">
              <input
                required
                type="date"
                name="dateOfBirth"
                id="date-of-birth"
                value={
                  form.stepOneData?.dateOfBirth
                    ? form.stepOneData?.dateOfBirth
                    : null
                }
                onChange={handleChange}
                className="block rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="phone"
              className="block mb-1 text-xs font-medium text-gray-900 required"
            >
              Cell Phone Number
            </label>
            <div className="mt-1">
              <input
                type="tell"
                name="cellNo"
                id="cellNo"
                placeholder="403-456-7890"
                value={
                  form.stepOneData?.cellNo ? form.stepOneData?.cellNo : null
                }
                onChange={handleChange}
                autoComplete="organization"
                className="block w-full rounded-md border-0 py-1 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="phone"
              className="block mb-1 text-xs font-medium text-gray-900 dark:text-white"
            >
              Home Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="homeNo"
              placeholder="403-456-7890"
              value={form.stepOneData?.homeNo ? form.stepOneData?.homeNo : null}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
            />
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="country"
              className="block text-xs font-medium mb-1 px-1 text-gray-900 required"
            >
              Your Status in Canada
            </label>
            <div className="mt-1">
              <select
                required
                id="status"
                name="status"
                autoComplete=""
                value={
                  form.stepOneData?.status ? form.stepOneData?.status : null
                }
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs sm:leading-6"
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
        </div>
      </div>
      <div className="max-w-screen-md mx-auto text-left px-4 py-4 bg-sky-100 border rounded-md mb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
          Driver License Information
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="first-name"
              className="block px-1 text-xs font-medium mb-1 text-gray-900 required"
            >
              Driver License Number
            </label>
            <div className="mt-1">
              <input
                required
                type="text"
                name="driverLicenseNumber"
                value={
                  form.stepOneData?.driverLicenseNumber
                    ? form.stepOneData?.driverLicenseNumber
                    : null
                }
                onChange={handleChange}
                id="driver-license-number"
                autoComplete="number"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="last-name"
              className="block px-1 text-xs font-medium mb-1 text-gray-900 required"
            >
              License Class
            </label>
            <div className="mt-1">
              <select
                required
                name="driverLicenseClass"
                value={
                  form.stepOneData?.driverLicenseClass
                    ? form.stepOneData?.driverLicenseClass
                    : null
                }
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
              >
                <option selected disabled value="">
                  Select an option
                </option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="country"
              className="block text-xs px-1 font-medium mb-1 text-gray-900 required"
            >
              Province
            </label>
            <div className="mt-1">
              <select
                required
                id="country"
                name="province"
                value={
                  form.stepOneData?.province ? form.stepOneData?.province : null
                }
                autoComplete="country-name"
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs sm:leading-6"
              >
                <option selected disabled value="">
                  Select an option
                </option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="ON">Ontario</option>
                <option value="SA">Saskatchewan</option>
                <option value="MB">Manitoba</option>
                <option value="NS">Nova Scotia</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland</option>
                <option value="QC">Quebec</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="date-of-birth"
              className="block text-xs px-1 font-medium mb-1 text-gray-900 required"
            >
              Expiry Date
            </label>
            <div className="mt-1">
              <input
                required
                type="date"
                name="driverLicenseExpiry"
                value={
                  form.stepOneData?.driverLicenseExpiry
                    ? form.stepOneData?.driverLicenseExpiry
                    : null
                }
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-1 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
          <label
            htmlFor="driver-license-condition"
            className="block text-xs px-1 font-medium mb-1 text-gray-900"
          >
            Any Condition?
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="driver-license-condition"
              name="driverLicenseCondition"
              value={form.stepOneData?.driverLicenseCondition ? form.stepOneData?.driverLicenseCondition : null}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs"
            
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="driver-license-front"
            className="block text-xs px-1 font-medium mb-1 text-gray-900 required"
          >
            Driving License Front (Max. Allowed: 1MB)
          </label>
          <div className="mt-1">
            <input
              type="file"
              id="driver-license-front"
              name="driverLicenseFront"
              onChange={handleChange}
              accept="image/*,application/pdf"
              className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs"
              required
            />
            {form.stepOneData?.driverLicenseFront ? form.stepOneData?.driverLicenseFront?.name : ''}
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="driver-license-back"
            className="block text-xs px-1 font-medium mb-1 text-gray-900 required"
          >
            Driver's Abstract (Max. Allowed: 1MB)
          </label>
          <div className="mt-1">
            <input
              type="file"
              id="driver-license-back"
              name="driverLicenseBack"
              onChange={handleChange}
              accept="image/*,application/pdf"
              className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs"
              required
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
                  className="block text-xs font-medium text-gray-900 required"
                >
                  {question}
                </label>
                <div className="mt-1">
                  <select
                    required
                    id="country"
                    name={name}
                    autoComplete="country-name"
                    value={
                      form.stepOneData?.[name] ? form.stepOneData?.[name] : null
                    }
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs"
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
      <div className="max-w-screen-md mx-auto  pb-12 text-left px-4 py-4 bg-sky-100 border rounded-md">
        <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
          Driving Experience
        </h2>
        <p className="max-w-screen-md mx-auto mb-0 text-center text-gray-500 sm:text-xs">
          Please tell us how much experience you have driving these specific
          types of vehicle(s).
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <label
              htmlFor=""
              className="block text-xs px-1 font-medium text-gray-900 required"
            >
              Tractor, Semi Tractor
            </label>
            <div className="mt-1">
              <select
                required
                id="status"
                name="tractor"
                autoComplete=""
                value={
                  form.stepOneData?.tractor ? form.stepOneData?.tractor : null
                }
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-1 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs"
              >
               <option selected disabled value="0">
                  No Experience
                </option>
                <option value="less than one year">Less Than One year</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="6">6 years</option>
                <option value="7">7 years</option>
                <option value="8">8 years</option>
                <option value="9">9 years</option>
                <option value="10">10 years</option>
                <option value="More than 10 years">More than 10 years</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor=""
              className="block text-xs px-1 font-medium text-gray-900 required"
            >
              Dry Van Reefer
            </label>
            <div className="mt-1">
              <select
                required
                id="status"
                name="van"
                autoComplete=""
                value={form.stepOneData?.van ? form.stepOneData?.van : null}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-1 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs"
              >
                <option selected disabled value="0">
                  No Experience
                </option>
                <option value="less than one year">Less Than One year</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="6">6 years</option>
                <option value="7">7 years</option>
                <option value="8">8 years</option>
                <option value="9">9 years</option>
                <option value="10">10 years</option>
                <option value="More than 10 years">More than 10 years</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor=""
              className="block text-xs px-1 font-medium text-gray-900 required"
            >
              Turn Pike/Super B
            </label>
            <div className="mt-1">
              <select
                required
                id="status"
                name="pike"
                autoComplete=""
                value={form.stepOneData?.pike ? form.stepOneData?.pike : null}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-1 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs"
              >
                <option selected disabled value="0">
                  No Experience
                </option>
                <option value="less than one year">Less Than One year</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="6">6 years</option>
                <option value="7">7 years</option>
                <option value="8">8 years</option>
                <option value="9">9 years</option>
                <option value="10">10 years</option>
                <option value="More than 10 years">More than 10 years</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor=""
              className="block text-xs px-1 font-medium text-gray-900 required"
            >
              Manual Transmission
            </label>
            <div className="mt-1">
              <select
                required
                id="status"
                name="manual"
                autoComplete=""
                value={
                  form.stepOneData?.manual ? form.stepOneData?.manual : null
                }
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-1 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs"
              >
               <option selected disabled value="0">
                  No Experience
                </option>
                <option value="less than one year">Less Than One year</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="6">6 years</option>
                <option value="7">7 years</option>
                <option value="8">8 years</option>
                <option value="9">9 years</option>
                <option value="10">10 years</option>
                <option value="More than 10 years">More than 10 years</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor=""
              className="block text-xs px-1 font-medium text-gray-900 required"
            >
              Chassis Trailer
            </label>
            <div className="mt-1">
              <select
                required
                id="status"
                name="chassis"
                autoComplete=""
                value={
                  form.stepOneData?.chassis ? form.stepOneData?.chassis : null
                }
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-1 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs"
              >
                <option selected disabled value="0">
                  No Experience
                </option>
                <option value="less than one year">Less Than One year</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="6">6 years</option>
                <option value="7">7 years</option>
                <option value="8">8 years</option>
                <option value="9">9 years</option>
                <option value="10">10 years</option>
                <option value="More than 10 years">More than 10 years</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor=""
              className="block text-xs px-1 font-medium text-gray-900 required"
            >
              Long Haul
            </label>
            <div className="mt-1">
              <select
                required
                id="status"
                name="haul"
                autoComplete=""
                value={form.stepOneData?.haul ? form.stepOneData?.haul : null}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-1 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs"
              >
                <option selected disabled value="0">
                  No Experience
                </option>
               
                <option value="less than one year">Less Than One year</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="6">6 years</option>
                <option value="7">7 years</option>
                <option value="8">8 years</option>
                <option value="9">9 years</option>
                <option value="10">10 years</option>
                <option value="More than 10 years">More than 10 years</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Form.Submit asChild>
          <button
            type="submit"
            className="py-1.5 px-4 mt-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-900"
          >
            Next ►
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default StepOne;

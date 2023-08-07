import React, { useContext, useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { FormContext } from "./context";

const StepTwo = ({ onNextStep, onPreviousStep }) => {
  const { form, setForm } = useContext(FormContext);
  const [addresses, setAddresses] = useState([
    {
      streetAddress: "",
      city: "",
      region: "",
      postalCode: "",
      fromDate: "",
      toDate: "",
    },
  ]);

  const handleAddressChange = (index, field, value) => {
    setAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses[index][field] = value;
      return updatedAddresses;
    });
  };

  const addAddress = () => {
    setAddresses([
      ...addresses,
      {
        streetAddress: "",
        city: "",
        region: "",
        postalCode: "",
        fromDate: "",
        toDate: "",
      },
    ]);
  };
  

  const onSubmit = (e) => {
    e.preventDefault();
    setForm((prevForm) => ({ ...prevForm, stepTwoData: addresses }));
    
    onNextStep();
  };
  const areAddressFieldsEmpty = (address) => {
    return (
      address.streetAddress.trim() === "" ||
      address.city.trim() === "" ||
      address.region.trim() === "" ||
      address.postalCode.trim() === "" ||
      address.fromDate.trim() === "" ||
      address.toDate.trim() === ""
    );
  };

  const validateAddresses = () => {
    return addresses.every((address) => !areAddressFieldsEmpty(address));
  };
  const handlePreviousStep = () => {
    onPreviousStep(); // Call the onPreviousStep function from props to move back to Step 1
  };

  useEffect(() => {
    console.log("Updated form data:", form);
  }, [form]);

  return (
    <Form.Root className="max-w-screen-md mx-auto border-b border-gray-900/10 pb-6 text-left" onSubmit={onSubmit}>

      {/* Validation message for required fields */}
      {!validateAddresses() && (
        <div className="mt-4 text-red-500">
          Please fill out all required fields.
        </div>
      )}
      <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
        Address History
      </h2>

      {addresses.map((address, index) => (
        <div
          key={index}
          className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        >
          <div className="col-span-full">
            <label
              htmlFor={`street-address-${index}`}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Street address
            </label>
            <div className="mt-2">
              <input
                type="text"
                id={`street-address-${index}`}
                name={`street-address-${index}`}
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={address.streetAddress}
                onChange={(e) =>
                  handleAddressChange(index, "streetAddress", e.target.value)
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor={`city-${index}`}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <input
              required
                type="text"
                id={`city-${index}`}
                name={`city-${index}`}
                autoComplete="address-level2"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={address.city}
                onChange={(e) =>
                  handleAddressChange(index, "city", e.target.value)
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor={`region-${index}`}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              State / Province
            </label>
            <div className="mt-2">
              <input
              required
                type="text"
                id={`region-${index}`}
                name={`region-${index}`}
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={address.region}
                onChange={(e) =>
                  handleAddressChange(index, "region", e.target.value)
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor={`postal-code-${index}`}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                type="text"
                id={`postal-code-${index}`}
                name={`postal-code-${index}`}
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={address.postalCode}
                onChange={(e) =>
                  handleAddressChange(index, "postalCode", e.target.value)
                }
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor={`from-date-${index}`}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              From Date
            </label>
            <div className="mt-2">
              <input
              required
                type="date"
                id={`from-date-${index}`}
                name={`from-date-${index}`}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={address.fromDate}
                onChange={(e) =>
                  handleAddressChange(index, "fromDate", e.target.value)
                }
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor={`to-date-${index}`}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              To Date
            </label>
            <div className="mt-2">
              <input
              required
                type="date"
                id={`to-date-${index}`}
                name={`to-date-${index}`}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={address.toDate}
                onChange={(e) =>
                  handleAddressChange(index, "toDate", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      ))}

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={addAddress}
        >
          Add Address
        </button>
      </div>
      <div className="flex justify-between">
      
        <button
          type="button"
          onClick={handlePreviousStep}
          className="box-border w-full text-gray-700 bg-gray-100 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
        >
          Previous Step
        </button>
      

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

export default StepTwo;

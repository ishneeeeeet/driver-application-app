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
  const removeAddress = (index) => {
    setAddresses((prevAddresses) => {
      const updatedAddresses = prevAddresses.filter((_, i) => i !== index);
      return updatedAddresses;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setForm((prevForm) => ({
      ...prevForm,
      stepTwoData: { ...prevForm.stepTwoData, addressesArray: addresses },
    }));

    onNextStep();
  };

  const handlePreviousStep = () => {
    onPreviousStep();
  };

  useEffect(() => {
    console.log("Updated form data:", form);
  }, [form]);

  return (
    <Form.Root
      className="max-w-screen-md mx-auto border-b border-gray-900/10 pb-6 text-left"
      onSubmit={onSubmit}
    >
      <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
        Pleae provide us your residential history for the last 3 years
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
                required
                type="text"
                id={`street-address-${index}`}
                name="streetAddress"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.streetAddress ? form.stepTwoData?.addressesArray[index]?.streetAddress : null}
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
                name="city"
                autoComplete="address-level2"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.city ? form.stepTwoData?.addressesArray[index]?.city : null}
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
                name="province"
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.region ? form.stepTwoData?.addressesArray[index]?.region : null}
                onChange={(e) =>
                  handleAddressChange(index, "province", e.target.value)
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
              required
                type="text"
                id={`postal-code-${index}`}
                name="postalCode"
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.postalCode ? form.stepTwoData?.addressesArray[index]?.postalCode : null}
                onChange={(e) =>
                  handleAddressChange(index, "postalCode", e.target.value)
                }
              />
            </div>
          </div>

          <div className="sm:col-span-4 ">
            <label
              htmlFor={`country-${index}`}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <input
                required
                type="text"
                id={`country-${index}`}
                name={`country-${index}`}
                autoComplete="country"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.country ? form.stepTwoData?.addressesArray[index]?.country : null}
                onChange={(e) =>
                  handleAddressChange(index, "country", e.target.value)
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
                name="fromDate"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.fromDate ? form.stepTwoData?.addressesArray[index]?.fromDate : null}
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
                name="toDate"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.toDate ? form.stepTwoData?.addressesArray[index]?.toDate : null}
                onChange={(e) =>
                  handleAddressChange(index, "toDate", e.target.value)
                }
              />
            </div>
          </div>
          <div className="sm:col-span-1 sm:col-end-7">
            <button
              type="button"
              className="py-2 px-4 mt-6 bg-red-500 text-white rounded-md hover:bg-indigo-700 "
              onClick={() => removeAddress(index)}
            >
              Remove
            </button>
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
          className="py-2 px-4 mt-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Previous Step
        </button>

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

export default StepTwo;

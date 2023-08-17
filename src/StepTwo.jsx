import React, { useContext, useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { FormContext } from "./context";

const StepTwo = ({ onNextStep, onPreviousStep }) => {
  const { form, setForm } = useContext(FormContext);
  const [addresses, setAddresses] = useState(form.stepTwoData.addressesArray);

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
    const updatedForm = {
      ...form,
      stepTwoData: { ...form.stepTwoData, addressesArray: addresses },
    }
    localStorage.setItem('form', JSON.stringify(updatedForm))
    setForm(updatedForm);
    
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
      <h2 className="text-base font-semibold leading-6 text-gray-900 text-center">
        We require your residential history for the last 3 years.
      </h2>
      
      {addresses.map((address, index) => (
        <div
          key={index}
          className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 px-6 py-7 bg-sky-100"
        >
          <div className="col-span-full">
            <label
              htmlFor=""
              className="block text-xs px-1.5 font-medium text-gray-900"
            >
              Street address
            </label>
            <div className="mt-1">
              <input
                required
                type="text"
                id={`street-address-${index}`}
                name="streetAddress"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
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
              className="block text-xs px-1 font-medium text-gray-900"
            >
              City
            </label>
            <div className="mt-1">
              <input
                required
                type="text"
                id={`city-${index}`}
                name="city"
                autoComplete="address-level2"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.city ? form.stepTwoData?.addressesArray[index]?.city : null}
                onChange={(e) =>
                  handleAddressChange(index, "city", e.target.value)
                }
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor={`region-${index}`}
              className="block text-xs font-medium text-gray-900"
            >
              Province
            </label>
            <div className="mt-1">
              <input
                required
                type="text"
                id={`region-${index}`}
                name="province"
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.region ? form.stepTwoData?.addressesArray[index]?.region : null}
                onChange={(e) =>
                  handleAddressChange(index, "region", e.target.value)
                }
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor={`postal-code-${index}`}
              className="block text-xs font-medium text-gray-900"
            >
              Postal code
            </label>
            <div className="mt-1">
              <input
              required
                type="text"
                id={`postal-code-${index}`}
                name="postalCode"
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.postalCode ? form.stepTwoData?.addressesArray[index]?.postalCode : null}
                onChange={(e) =>
                  handleAddressChange(index, "postalCode", e.target.value)
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2 ">
            <label
              htmlFor={`country-${index}`}
              className="block text-xs px-1 font-medium text-gray-900"
            >
              Country
            </label>
            <div className="mt-1">
              <input
                required
                type="text"
                id={`country-${index}`}
                name={`country-${index}`}
                autoComplete="country"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.country ? form.stepTwoData?.addressesArray[index]?.country : null}
                onChange={(e) =>
                  handleAddressChange(index, "country", e.target.value)
                }
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor={`from-date-${index}`}
              className="block text-xs px-1 font-medium text-gray-900"
            >
              From Date
            </label>
            <div className="mt-1">
              <input
                required
                type="date"
                id={`from-date-${index}`}
                name="fromDate"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.fromDate ? form.stepTwoData?.addressesArray[index]?.fromDate : null}
                onChange={(e) =>
                  handleAddressChange(index, "fromDate", e.target.value)
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor={`to-date-${index}`}
              className="block text-xs font-medium text-gray-900"
            >
              To Date
            </label>
            <div className="mt-1">
              <input
                required
                type="date"
                id={`to-date-${index}`}
                name="toDate"
                className="block w-full rounded-md border-0 px-1.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                value={form.stepTwoData?.addressesArray[index]?.toDate ? form.stepTwoData?.addressesArray[index]?.toDate : null}
                onChange={(e) =>
                  handleAddressChange(index, "toDate", e.target.value)
                }
              />
            </div>
          </div>
          {index > 0 && (
            <div className="sm:col-span-2 sm:col-end-7 text-right">
              <button
                type="button"
                className="py-2 px-2 mt-4 bg-red-500 text-white rounded-md hover:bg-indigo-700 "
                onClick={() => removeAddress(index)}
              >
                Remove address
              </button>
            </div>
          )}

        </div>
      ))}

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="px-4 py-2 border mx-auto border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={addAddress}
        >
          + Add More Address
        </button>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePreviousStep}
          className="py-1.5 px-4 mt-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-900"
        >
          ◄ Previous Step
        </button>

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

export default StepTwo;

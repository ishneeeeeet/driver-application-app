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
    status: "",
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
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="inline-flex mb-2 text-sm text-gray-800">
          Please enter your name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-800 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="inline-flex mb-2 text-sm text-gray-800">
          Please enter your email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-800 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>
      {/* ... (similar pattern for other fields) ... */}
      <div className="flex flex-col mb-4">
        <label htmlFor="dateOfBirth" className="inline-flex mb-2 text-sm text-gray-800">
          Date of Birth
        </label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-800 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
        />
        {/* You can add additional validation/error handling for the dateOfBirth field if needed */}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="position" className="inline-flex mb-2 text-sm text-gray-800">
          Position applied for?
        </label>
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
        </div>
        {errors.position && <span className="text-red-500 text-sm">{errors.position}</span>}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="status" className="inline-flex mb-2 text-sm text-gray-800">
          Status?
        </label>
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
            value="WP"
            checkedValue={formData.status}
            onChange={handleChange}
          />
        </div>
        {errors.status && <span className="text-red-500 text-sm">{errors.status}</span>}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="province" className="inline-flex mb-2 text-sm text-gray-800">
          Province (Driver License Information)
        </label>
        <input
          type="text"
          name="province"
          value={formData.province}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-800 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="driverLicenseNumber" className="inline-flex mb-2 text-sm text-gray-800">
          Driver License Number
        </label>
        <input
          type="number"
          name="driverLicenseNumber"
          value={formData.driverLicenseNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-800 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="driverLicenseExpiry" className="inline-flex mb-2 text-sm text-gray-800">
          Driver License Expiry
        </label>
        <input
          type="date"
          name="driverLicenseExpiry"
          value={formData.driverLicenseExpiry}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-800 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="driverLicenseClass" className="inline-flex mb-2 text-sm text-gray-800">
          Driver License Class
        </label>
        <input
          type="text"
          name="driverLicenseClass"
          value={formData.driverLicenseClass}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-800 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="questionOne" className="inline-flex mb-2 text-sm text-left text-gray-800">
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
        <label htmlFor="questionTwo" className="inline-flex mb-2 text-sm text-left text-gray-800">
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
        <label htmlFor="questionThree" className="inline-flex mb-2 text-sm text-left text-gray-800">
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
        <label htmlFor="questionFour" className="inline-flex mb-2 text-sm text-left text-gray-800">
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
        <label htmlFor="questionFive" className="inline-flex mb-2 text-sm text-left text-gray-800">
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
      <div className="flex items-right justify-between">
        <button
          type="submit"
          className="px-6 py-2 text-sm text-white bg-indigo-500 rounded-lg outline-none hover:bg-indigo-600 ring-indigo-300"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepOne;

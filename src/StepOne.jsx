import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import StepTwo from './StepTwo';

const StepOne = ({ onNext }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      status: '',
      company: '',
    },
  });

  const selectedStatus = watch('status'); // Get the value of the 'status' field

  const onSubmit = (data) => {
    if (selectedStatus === '') {
      // Custom validation for 'status' field
      return;
    }

    onNext(data); // Send the form data to the next step
  };

  return (
    <form className="max-w-screen-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="inline-flex mb-2 text-sm text-gray-800">
          Please enter your name
        </label>
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <input
              {...field}
              className="w-full px-3 py-2 text-gray-800 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
            />
          )}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="inline-flex mb-2 text-sm text-gray-800">
          Please enter your email
        </label>
        <Controller
          name="email"
          control={control}
          rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' } }}
          render={({ field }) => (
            <input
              {...field}
              className="w-full px-3 py-2 text-gray-800 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
            />
          )}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>
      {/* ... (similar pattern for other fields) ... */}
      <div className="flex flex-col mb-4">
        <label htmlFor="status" className="inline-flex mb-2 text-sm text-gray-800">
          Status?
        </label>
        <div className="flex items-center space-x-4">
          <input type="radio" {...control('status')} value="Citizen" />
          <label htmlFor="status" className="text-gray-800">
            Citizen
          </label>
          <input type="radio" {...control('status')} value="PR" />
          <label htmlFor="status" className="text-gray-800">
            PR
          </label>
          <input type="radio" {...control('status')} value="WP" />
          <label htmlFor="status" className="text-gray-800">
            WP
          </label>
        </div>
        {errors.status && <span className="text-red-500 text-sm">{errors.status.message}</span>}
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="company" className="inline-flex mb-2 text-sm text-gray-800">
          Please enter your company name (optional)
        </label>
        <Controller
          name="company"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className="w-full px-3 py-2 text-gray-800 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
            />
          )}
        />
      </div>
      <div className="flex items-center justify-between">
        {/* ... (similar pattern for Back button) ... */}
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

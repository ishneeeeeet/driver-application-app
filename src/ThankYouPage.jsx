import React from "react";

const ThankYouPage = () => {
  return (
    <div className="max-w-screen-md mx-auto text-center">
      <h1 className="text-3xl font-bold mt-12">Thank You!</h1>
      <p className="text-gray-700 mt-4">
        Your application has been successfully submitted.
      </p>
      <p className="text-gray-700">
        We appreciate your interest in joining our team.
      </p>
      <img
        src="/path/to/thankyou-image.png"
        alt="Thank You"
        className="mt-8 mx-auto"
      />
      <p className="text-gray-700 mt-8">
        If you have any questions or need further assistance, please contact our
        support team.
      </p>
      <p className="text-gray-700">
        We'll get back to you as soon as possible.
      </p>
    </div>
  );
};

export default ThankYouPage;

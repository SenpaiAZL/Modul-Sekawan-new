/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: 'url("/404Error.webp)' }}
    >
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
      <a
        href="/Home"
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-black-600"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Error404;
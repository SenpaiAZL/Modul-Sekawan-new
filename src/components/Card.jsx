/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ id, img, heading, text, city, rate, className }) => {
  return (
    <div
      className={`card bg-gray-800 dark:bg-white dark:text-black dark:border-0 text-white w-80 h-[450px] shadow-lg rounded-lg border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl ${className}`} // Added transition and transform classes
    >
      <figure className="p-4">
        <img
          src={img}
          alt={heading}
          className="rounded-md h-40 w-full object-cover"
        />
      </figure>
      <div className="card-body px-4 pb-4">
        <h2 className="card-title text-xl font-semibold">{heading}</h2>
        <div className="flex space-x-2 my-2">
          <div className="badge badge-secondary bg-gray-700 text-white">
            {rate}
          </div>
          <div className="badge badge-outline border-gray-600 dark:text-black text-gray-300">
            {city}
          </div>
        </div>
        <p className="text-gray-300 line-clamp-3 dark:text-black">{text}</p>
        <div className="card-actions justify-end mt-4">
          <Link to={`/Detail/${id}`}>
            <button className="btn bg-blue-600 hover:bg-blue-700 px-6 text-white">
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired, // Ensure 'id' is a required string
  img: PropTypes.string.isRequired, // Ensure 'img' is a required string
  heading: PropTypes.string.isRequired, // Ensure 'heading' is a required string
  text: PropTypes.string.isRequired, // Ensure 'text' is a required string
  city: PropTypes.string.isRequired, // Ensure 'city' is a required string
  rate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Allow 'rate' to be a string or number
  className: PropTypes.string, // Optional className
};

export default Card;

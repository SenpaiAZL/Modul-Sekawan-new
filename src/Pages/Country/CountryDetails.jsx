import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FetchCountryDetail from "../Fetcher/FetchDetailCountry";

const CountryDetails = () => {
  const { id } = useParams(); // get the 'id' from the URL
  const [country, setCountry] = useState(null); // null initially
  const navigate = useNavigate(); // hook to navigate between routes

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-300 text-white dark:text-black p-5">
      <FetchCountryDetail onFetch={setCountry} id={id} />
      {country ? (
        <div className="max-w-4xl mx-auto bg-gray-800 dark:bg-white p-6 rounded-lg shadow-lg">
          <img
            src={country.flag}
            alt={country.name + " flag"}
            className="w-full h-96 object-cover rounded-lg mb-4"
          />
          <h1 className="text-3xl dark:text-gray-900">{country.name}</h1>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="mt-6 text-xl dark:text-gray-900">Currency:</h3>
              <p className="dark:text-gray-900">{country.currency}</p>
            </div>

            <div>
              <h3 className="mt-6 text-xl dark:text-gray-900">Capital:</h3>
              <p className="dark:text-gray-900">{country.capital}</p>
            </div>

            <div>
              <h3 className="mt-6 text-xl dark:text-gray-900">Region:</h3>
              <p className="dark:text-gray-900">{country.region}</p>
            </div>

            <div>
              <h3 className="mt-6 text-xl dark:text-gray-900">Population:</h3>
              <p className="dark:text-gray-900">
                {country.population.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Country Stats Section */}
          <div className="mt-10">
            <h3 className="text-xl dark:text-gray-900 pb-4">Country Stats:</h3>
            <div className="stats stats-vertical shadow">
              <div className="stat">
                <div className="stat-title dark:text-black">Currency</div>
                <div className="stat-value">{country.currency}</div>
              </div>
              <div className="stat">
                <div className="stat-title dark:text-black">Capital</div>
                <div className="stat-value">{country.capital}</div>
              </div>
              <div className="stat">
                <div className="stat-title dark:text-black">Region</div>
                <div className="stat-value">{country.region}</div>
              </div>
              <div className="stat">
                <div className="stat-title dark:text-black">Population</div>
                <div className="stat-value">
                  {country.population.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400 dark:text-gray-900">
          Loading...
        </div>
      )}

      {/* Back to Countries Button */}
      <div className="text-center">
        <button
          onClick={() => navigate("/Country")} // Change the route to the correct path
          className="mt-8 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
        >
          Back to Countries
        </button>
      </div>
    </div>
  );
};

export default CountryDetails;

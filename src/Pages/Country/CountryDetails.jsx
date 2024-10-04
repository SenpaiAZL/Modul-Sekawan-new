import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FetchCountryDetail from "../Fetcher/FetchDetailCountry";

const CountryDetails = () => {
  const { id } = useParams(); // get the 'id' from the URL
  const [country, setCountry] = useState(null); // null initially
  const navigate = useNavigate(); // hook to navigate between routes

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <FetchCountryDetail onFetch={setCountry} id={id} />
      {country ? (
        <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src={country.flag}
            alt={country.name + " flag"}
            className="w-full h-96 object-cover rounded-lg mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">{country.name}</h1>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="mt-6 text-xl font-semibold">Currency:</h3>
              <p className="text-gray-300">{country.currency}</p>
            </div>

            <div>
              <h3 className="mt-6 text-xl font-semibold">Capital:</h3>
              <p className="text-gray-300">{country.capital}</p>
            </div>

            <div>
              <h3 className="mt-6 text-xl font-semibold">Region:</h3>
              <p className="text-gray-300">{country.region}</p>
            </div>

            <div>
              <h3 className="mt-6 text-xl font-semibold">Population:</h3>
              <p className="text-gray-300">
                {country.population.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Country Stats Section */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Country Stats:</h3>
            <div className="stats stats-vertical shadow">
              <div className="stat">
                <div className="stat-title">Currency</div>
                <div className="stat-value">{country.currency}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Capital</div>
                <div className="stat-value">{country.capital}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Region</div>
                <div className="stat-value">{country.region}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Population</div>
                <div className="stat-value">
                  {country.population.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400">Loading...</div>
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
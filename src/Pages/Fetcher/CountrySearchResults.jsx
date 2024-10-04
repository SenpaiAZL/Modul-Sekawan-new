import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const CountrySearchResults = ({ onFetch }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(useLocation().search).get("q");

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://freetestapi.com/api/v1/countries?search=${query}`
        );
        const countryList = response.data;
        console.log("Fetched countryList:", countryList);
        setSearchResults(countryList);
        onFetch(countryList);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [onFetch, query]);

  return (
    <div>
      <div className="px-5">
        <h1 className="text-2xl font-black text-left">Search Results for `{query}`</h1>
      </div>
      {loading ? (
        <div className="spinner"></div>
      ) : searchResults.length > 0 ? (
        null
      ) : null}
    </div>
  );
};

CountrySearchResults.propTypes = {
  onFetch: PropTypes.func.isRequired,
};

export default CountrySearchResults;

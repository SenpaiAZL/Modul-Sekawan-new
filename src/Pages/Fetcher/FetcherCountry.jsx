import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const FetcherCountry = ({ onFetch }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryList = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://freetestapi.com/api/v1/countries"
        );
        const countryList = response.data;
        console.log(countryList)
        onFetch(countryList);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryList();
  }, [onFetch]);

  return loading ? <div className="spinner"></div> : null;
};

FetcherCountry.propTypes = {
  onFetch: PropTypes.func.isRequired,
};

export default FetcherCountry;

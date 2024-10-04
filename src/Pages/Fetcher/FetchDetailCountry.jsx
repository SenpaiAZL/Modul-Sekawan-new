import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const FetchDetailCountry = ({ onFetch, id }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAxios = async () => {
      setLoading(true);
      try {
        // Use the id to fetch the restaurant detail from the API
        const response = await axios.get(
          `https://freetestapi.com/api/v1/countries/${id}`
        );
        const data = response.data;
        onFetch(data); // Pass fetched data to parent component
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDataAxios();
    }
  }, [id, onFetch]);

  return loading ? <div className="spinner"></div> : null;
};

FetchDetailCountry.propTypes = {
  onFetch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired, // id is required
};

export default FetchDetailCountry;

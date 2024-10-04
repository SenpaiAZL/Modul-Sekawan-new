import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Fetcher = ({ onFetch }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchDataAxios = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-api.dicoding.dev/list"
        );
        const data = response.data;
        onFetch(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading when the request finishes
      }
    };
    fetchDataAxios();
  }, [onFetch]);

  return loading ? <div className="spinner"></div> : null;
};

// Define prop types for Fetcher
Fetcher.propTypes = {
  onFetch: PropTypes.func.isRequired, // onFetch should be a required function
};

export default Fetcher;
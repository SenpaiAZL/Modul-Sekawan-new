import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const FetcherProd = ({ onFetch, query }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductList = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const products = response.data;

        if (query) {
          const filteredData = products.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          );
          console.log("Filtered products:", filteredData);
          onFetch(filteredData);
        } else {
          // Send all products if no query
          console.log("All products:", products);
          onFetch(products);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductList();
  }, [onFetch, query]);

  return loading ? <div className="spinner"></div> : null;
};

FetcherProd.propTypes = {
  onFetch: PropTypes.func.isRequired,
  query: PropTypes.string,
};

export default FetcherProd;
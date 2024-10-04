import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const FetcherProdDetail = ({ onFetch, id }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductList = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const products = response.data;
          // Send all products if no query
          console.log("All products:", products);
          onFetch(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductList();
  }, [onFetch, id]);

  return loading ? <div className="spinner"></div> : null;
};

FetcherProdDetail.propTypes = {
  onFetch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default FetcherProdDetail;

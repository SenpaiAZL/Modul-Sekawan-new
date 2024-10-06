import FetcherProd from "../Fetcher/FetcherProd";
import "../../assets/searchbar.scss";
import "../../assets/Card.scss";
import { useReducer, useCallback } from "react";
import { Link } from "react-router-dom";

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_RESTO":
      return {
        ...state,
        resto: action.payload,
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

const ProdView = () => {
  const initialState = {
    resto: [],
    query: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFetch = useCallback((products) => {
    dispatch({ type: "SET_RESTO", payload: products });
  }, []);

  return (
    <div className="bg-gray-800 dark:bg-white">
      <FetcherProd onFetch={handleFetch} query={state.query} />
      <div>
        <div className="search-bar">
          <div className="relative">
            <input
              type="text"
              value={state.query}
              onChange={(e) =>
                dispatch({ type: "SET_QUERY", payload: e.target.value })
              }
              placeholder="Search products..."
              className="search-input"
            />
            {/* Search icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="search-icon"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {state.resto && state.resto.length > 0 ? (
          state.resto?.map((resto) => (
            <div key={resto.id}>
              <div className="product-card">
                <img
                  src={resto.image}
                  alt="Product Image"
                  className="product-image"
                />
                <div className="card-content">
                  <h2 className="product-title">{resto.title}</h2>
                  <p className="product-price">{"$" + resto.price}</p>
                  <Link to={`/ProdDetail/${resto.id}`}>
                    <button className="add-to-cart-btn">Add to Cart</button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center">
            <p>No Products to Display</p>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProdView;

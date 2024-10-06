import { useCallback, useReducer, useState } from "react";
import CountryView from "./CountryView";
import FetcherCountry from "../Fetcher/FetcherCountry";

const initState = {
  data: [],
  filterData: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        filterData: action.payload,
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "SET_FILTER_DATA":
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const CountryList = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFetch = useCallback(
    (countryList) => {
      if (countryList) {
        dispatch({ type: "FETCH_SUCCESS", payload: countryList });
      } else {
        dispatch({ type: "FETCH_ERROR", payload: "Error fetching data" });
      }
    },
    [dispatch]
  );

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredData = state.data.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
    dispatch({ type: "SET_FILTER_DATA", payload: filteredData });
  };

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-200 pt-4">
      {/* Search Bar */}
      <div className="search-bar flex justify-center my-4 pb-4 relative">
        <div className="relative w-full max-w-lg">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-70 h-5 w-5 fill-current text-gray-400"
            viewBox="0 0 24 24"
          >
            <path d="M10 2a8 8 0 015.92 13.44l4.24 4.24-1.42 1.42-4.24-4.24A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z"></path>
          </svg>
          {/* Search Input */}
          <input
            type="text"
            className="search-input input input-bordered input-primary w-full pl-10 text-white bg-gray-800 border-gray-700 rounded-md focus:border-indigo-500"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Fetcher and Country View */}
      <FetcherCountry onFetch={handleFetch} />
      <CountryView data={state.filterData} />
    </div>
  );
};

export default CountryList;

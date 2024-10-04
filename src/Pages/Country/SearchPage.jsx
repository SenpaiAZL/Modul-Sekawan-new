import { useCallback, useState } from "react";
import CountrySearchResults from "../../components/Fetchers/Country/CountrySearchResults";
import CardCountry from "../../components/CardCountry";

const CountrySearchPage = () => {
  const [country, setCountry] = useState([]);

  const handleFetch = useCallback((countryList) => {
    setCountry(countryList);
    console.log(countryList);
  }, []);

  return (
    <>
      <div>
        <CountrySearchResults onFetch={handleFetch} />
        {country.length > 0 ? (
          <div className="main px-5">
            <p className="text-2xl my-2 font-black text-left">
              {country.length} countries found.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {country.map((country) => (
                <div key={country.id}>
                  <CardCountry
                    img={country.flag}
                    heading={country.name}
                    text={country.currency}
                    id={country.id}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-2xl my-2 px-5 font-black text-left">
            No countries found
          </p>
        )}
      </div>
    </>
  );
};

export default CountrySearchPage;
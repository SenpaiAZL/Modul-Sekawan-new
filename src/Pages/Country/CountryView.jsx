import PropTypes from "prop-types";
import CardCountry from "../../components/CardCountry";

const CountryView = ({ data }) => {
  return (
    <div className="flex justify-center pb-12">
      <div className="main w-[1000px] px-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.isArray(data) &&
          data.map((country) => (
            <div key={country.id}>
              <CardCountry
                img={country.flag}
                heading={country.name}
                text={country.currency}
                id={country.id}
                txtBtn={"Details"}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

// PropTypes validation
CountryView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      flag: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CountryView;

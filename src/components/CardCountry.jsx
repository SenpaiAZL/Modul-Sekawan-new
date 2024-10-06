import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardCountry = ({ id, img, text, heading }) => {
  return (
    <Link to={`/CountryDetails/${id}`}>
      <div className="bg-gray-700 dark:bg-gray-400 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-10 hover:bg-base-200 duration-300 card border border-slate-700 card-compact p-0 w-full shadow-xl hover:shadow-2xl">
        <figure>
          <img className="object-cover h-56 w-full" src={img} alt={heading} />
        </figure>
        <div className="text-gray-100 dark:text-black card-body ">
          <h2 className="card-title">{heading}</h2>
          <p className="line-clamp-3 text-left">{text}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">{txtBtn}</button> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

CardCountry.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default CardCountry;

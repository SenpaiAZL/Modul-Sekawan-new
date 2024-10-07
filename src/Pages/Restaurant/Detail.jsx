import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FetchDetail from "../Fetcher/Fetch Detail";
import { useDispatch, useSelector } from "react-redux";
import { setResto } from "../../store/action/RestoAction";

const Details = () => {
  const { id } = useParams(); // get the 'id' from the URL
  const navigate = useNavigate(); // Initialize navigate
  const dispatch = useDispatch();

  const resto = useSelector((state) => state.resto);

  useEffect(() => {
    console.log(resto?.resto?.restaurant);
  }, [resto]);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewReview({ ...newReview, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here, such as API call to post the review
  //   console.log("Submitted review:", newReview);
  //   // Optionally, clear the form after submission
  //   setNewReview({ name: "", review: "" });
  // };

  return (
    <>
      <div className="min-h-screen bg-gray-900 dark:bg-gray-200 text-white dark:text-black p-5">
        <FetchDetail onFetch={(value) => dispatch(setResto(value))} id={id} />
        {resto ? (
          <div className="max-w-4xl mx-auto bg-gray-800 dark:bg-gray-200 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center pb-4">
              <img
                src={
                  "https://restaurant-api.dicoding.dev/images/large/" +
                  resto?.resto?.restaurant.pictureId
                }
                alt={resto?.resto?.restaurant.name}
                className="w-[735px] object-scale-down rounded-xl mb-4"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              {resto?.resto?.restaurant.name}
            </h1>
            <p className="mb-4">{resto?.resto?.restaurant.description}</p>
            <p>
              <b>City:</b> {resto?.resto?.restaurant.city}
            </p>
            <p>
              <b>Address:</b> {resto?.resto?.restaurant.address}
            </p>

            <h3 className="mt-6 text-xl dark:text-black font-semibold">
              Categories:
            </h3>
            <ul className="list-disc list-inside mb-4">
              {resto?.resto?.restaurant.categories.map((category, index) => (
                <li key={index} className="text-gray-300 dark:text-black">
                  {category.name}
                </li>
              ))}
            </ul>

            {/* Display Menus in Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="mt-6 text-xl font-semibold">Foods:</h3>
                <ul className="space-y-2 bg-gray-700 dark:bg-gray-100 p-4 rounded-lg">
                  {resto?.resto?.restaurant.menus?.foods.map((food, index) => (
                    <li key={index} className="text-gray-400 dark:text-black">
                      {food.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mt-6 text-xl font-semibold">Drinks:</h3>
                <ul className="space-y-2 bg-gray-700 dark:bg-gray-100 p-4 rounded-lg">
                  {resto?.resto?.restaurant.menus?.drinks.map(
                    (drink, index) => (
                      <li key={index} className="text-gray-400 dark:text-black">
                        {drink.name}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Display Reviews */}
            <h3 className="mt-6 text-xl font-semibold">Customer Reviews:</h3>
            <ul className="space-y-4">
              {resto?.resto?.restaurant.customerReviews.map((review, index) => (
                <li
                  key={index}
                  className="bg-gray-800 dark:bg-gray-100 p-4 rounded-lg shadow-md border border-gray-700"
                >
                  <p className="text-gray-400 dark:text-black mb-2">
                    <b className="text-white dark:text-black">{review.name}</b>{" "}
                    ({review.date})
                  </p>
                  <p className="text-gray-300 dark:text-black mb-4">
                    {review.review}
                  </p>

                  {/* <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-500 transition-colors">
                    Reply
                  </button> */}
                </li>
              ))}
            </ul>

            {/* Add Review Section */}
            {/* <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Leave a Review:</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newReview.name}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md bg-gray-700 dark:bg-gray-100 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1" htmlFor="review">
                    Review
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    value={newReview.review}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-2 rounded-md bg-gray-700 dark:bg-gray-100 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors"
                >
                  Submit Review
                </button>
              </form>
            </div> */}

            {/* Back to Search Button */}
            <button
              onClick={() => navigate(-1)}
              className="mt-8 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
            >
              Back to Search
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-400">Loading...</div>
        )}
      </div>
    </>
  );
};

export default Details;

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FetchDetail from "../Fetcher/Fetch Detail";

const Details = () => {
  const { id } = useParams(); // get the 'id' from the URL
  const navigate = useNavigate(); // Initialize navigate
  const [resto, setResto] = useState(null); // null initially
  const [newReview, setNewReview] = useState({ name: "", review: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as API call to post the review
    console.log("Submitted review:", newReview);
    // Optionally, clear the form after submission
    setNewReview({ name: "", review: "" });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-5">
        <FetchDetail onFetch={setResto} id={id} />
        {resto ? (
          <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={
                "https://restaurant-api.dicoding.dev/images/small/" +
                resto.restaurant.pictureId
              }
              alt={resto.restaurant.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{resto.restaurant.name}</h1>
            <p className="mb-4">{resto.restaurant.description}</p>
            <p>
              <b>City:</b> {resto.restaurant.city}
            </p>
            <p>
              <b>Address:</b> {resto.restaurant.address}
            </p>

            <h3 className="mt-6 text-xl font-semibold">Categories:</h3>
            <ul className="list-disc list-inside mb-4">
              {resto.restaurant.categories.map((category, index) => (
                <li key={index} className="text-gray-300">
                  {category.name}
                </li>
              ))}
            </ul>

            {/* Display Menus in Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="mt-6 text-xl font-semibold">Foods:</h3>
                <ul className="space-y-2 bg-gray-700 p-4 rounded-lg">
                  {resto.restaurant.menus.foods.map((food, index) => (
                    <li key={index} className="text-gray-400">
                      {food.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mt-6 text-xl font-semibold">Drinks:</h3>
                <ul className="space-y-2 bg-gray-700 p-4 rounded-lg">
                  {resto.restaurant.menus.drinks.map((drink, index) => (
                    <li key={index} className="text-gray-400">
                      {drink.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Display Reviews */}
            <h3 className="mt-6 text-xl font-semibold">Customer Reviews:</h3>
            <ul className="space-y-4">
              {resto.restaurant.customerReviews.map((review, index) => (
                <li
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700"
                >
                  <p className="text-gray-400 mb-2">
                    <b className="text-white">{review.name}</b> ({review.date})
                  </p>
                  <p className="text-gray-300 mb-4">{review.review}</p>

                  <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-500 transition-colors">
                    Reply
                  </button>
                </li>
              ))}
            </ul>

            {/* Add Review Section */}
            <div className="mt-10">
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
                    className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                    className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
            </div>

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

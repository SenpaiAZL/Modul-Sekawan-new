/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const HomeView = ({
  isHeroVisible,
  featureRefs,
  visibleFeatures,
  signupRef,
  isSignupVisible,
}) => {
  return (
    <div className="bg-gray-900 dark:bg-gray-200">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url('Restaurant.jpeg')`,
          height: "100vh",
        }}
      >
        <div className="bg-black opacity-50 absolute inset-0"></div>
        {/* Dark overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div
            className={`pt-24 items-center text-center transition-all duration-1000 ${
              isHeroVisible ? "fade-in" : ""
            }`}
          >
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Welcome to Our Website
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              Explore our amazing features and services that we offer to make
              your life easier to find restaurants.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="px-6 py-3 sm:px-8 sm:py-3 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600"
              >
                Get Started
              </a>
            </div>
            <p className="mt-6 text-base sm:text-lg text-gray-300">
              Discover a culinary adventure where delicious meals and
              exceptional service meet. As well as shopping for multiple unique
              product while viewing from which country they were!
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-900 dark:bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-white dark:text-black mb-8 sm:mb-12">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
            {["Feature One", "Feature Two", "Feature Three"].map(
              (feature, index) => (
                <div
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  className={`p-6 bg-gray-800 text-white dark:bg-white dark:text-black rounded-lg shadow-md transform transition-transform duration-500 ease-in-out ${
                    visibleFeatures[index]
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-semibold">
                    {feature}
                  </h3>
                  <p className="mt-4 text-gray-300 dark:text-gray-600">
                    {`Description of ${feature.toLowerCase()} with a focus on how it helps the user.`}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={signupRef} className="py-12 sm:py-16 bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to take the next step?
          </h2>
          <p className="mt-4 text-lg text-indigo-200">
            Join us today and start enjoying all the features we offer.
          </p>
          <div className="mt-8">
            <span
              className={`transform transition-opacity duration-500 ease-in-out ${
                isSignupVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <a
                href="#"
                className="px-6 py-3 sm:px-8 sm:py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-200"
              >
                Sign Up Now
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Footer Section */}
    </div>
  );
};

// Prop types validation
HomeView.propTypes = {
  isHeroVisible: PropTypes.bool.isRequired,
  featureRefs: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  visibleFeatures: PropTypes.arrayOf(PropTypes.bool).isRequired,
  signupRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
  isSignupVisible: PropTypes.bool.isRequired,
};

export default HomeView;

/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-900 dark:bg-gray-200 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white dark:text-black">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 dark:text-black">
            Discover the rich cultural heritage of Indonesia through its diverse
            products, traditions, and flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Description */}
          <div className="bg-gray-800 dark:bg-white dark:border-[1px] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-white dark:text-black mb-4">
              Our Story
            </h2>
            <p className="text-gray-300 dark:text-black mb-4">
              Established in the heart of Indonesia, our restaurant and cultural
              space are dedicated to showcasing the vibrant traditions,
              artistry, and cuisine of the Indonesian archipelago. From the
              bustling cities of Java to the serene villages of Bali and the
              remote beauty of Sumatra, our mission is to capture the essence of
              Indonesia’s diverse regions.
            </p>
            <p className="text-gray-300 dark:text-black mb-4">
              Our offerings go beyond food—our restaurant is a cultural
              experience. We feature unique handicrafts like Batik textiles,
              traditional wayang (shadow puppetry), and handcrafted wooden
              sculptures from across the country, giving visitors a deeper
              understanding of Indonesian artistry.
            </p>
            <p className="text-gray-300 dark:text-black">
              Whether you’re enjoying a flavorful bowl of Soto Ayam or admiring
              intricate Balinese carvings, we aim to provide an experience that
              reflects the richness and depth of Indonesian culture. Join us on
              a journey to discover the treasures that make Indonesia one of the
              most diverse and culturally vibrant nations in the world.
            </p>
          </div>

          {/* Right column - Values and Philosophy */}
          <div className="bg-gray-800 dark:bg-white dark:border-[1px] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-white dark:text-black mb-4">
              Our Values
            </h2>
            <ul className="list-disc pl-5 text-gray-300 dark:text-black space-y-3">
              <li>
                <strong>Authenticity:</strong> We are committed to staying true
                to Indonesia’s rich traditions, whether through our cooking,
                decor, or the curated cultural items we showcase. Each dish and
                product tells a story.
              </li>
              <li>
                <strong>Quality Ingredients & Craftsmanship:</strong> From fresh
                spices to handwoven fabrics, we source the finest ingredients
                and materials that reflect the exceptional quality and
                craftsmanship of Indonesia.
              </li>
              <li>
                <strong>Cultural Immersion:</strong> Our space offers more than
                just a meal; it's an opportunity to immerse yourself in the
                sights, sounds, and flavors of Indonesia, from culinary delights
                to traditional arts.
              </li>
              <li>
                <strong>Community & Sustainability:</strong> We are passionate
                about supporting local farmers, artisans, and cultural
                practitioners across Indonesia. Our goal is to help preserve
                Indonesia’s cultural heritage while contributing to its modern
                culinary and artisanal movements.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-white dark:text-black">
            Visit Us
          </h2>
          <p className="mt-4 text-lg text-gray-300 dark:text-black">
            Come experience the true essence of Indonesia—where culture, art,
            and cuisine come together. We look forward to welcoming you and
            sharing a slice of our beautiful heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

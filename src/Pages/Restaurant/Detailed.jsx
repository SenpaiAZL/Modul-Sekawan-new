/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Detailed = () => {
  return (
    <div className="bg-gray-900 dark:bg-gray-200 text-white py-20 dark:text-black">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-6">
          Exploring Countries and Their Unique Products
        </h1>
        <p className="text-lg mb-8">
          Every country in the world has its own unique culture, traditions, and
          products that reflect its history and way of life. From traditional
          handicrafts to iconic foods, these elements define the character of a
          nation and are cherished by locals and visitors alike.
        </p>

        <div className="bg-gray-800 dark:bg-gray-200 p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Examples of Unique Products by Country:
          </h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-400 mb-2">
              <span className="font-bold">Japan:</span> Known for its
              traditional <span className="italic">kimono</span> garments,
              intricate tea sets, and cutting-edge technology products.
            </li>
            <li className="text-gray-400 mb-2">
              <span className="font-bold">France:</span> Famous for its luxury
              fashion, fine wines, and artisan cheeses such as Brie and
              Camembert.
            </li>
            <li className="text-gray-400 mb-2">
              <span className="font-bold">Indonesia:</span> Renowned for its
              Batik fabrics, spices like nutmeg and cloves, and hand-woven
              baskets.
            </li>
            <li className="text-gray-400 mb-2">
              <span className="font-bold">Italy:</span> Known for its delicious
              pasta, olive oil, and world-class leather goods.
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mb-4">
          Cultural and Culinary Heritage:
        </h2>
        <p className="text-lg mb-8">
          Many countries are also recognized for their traditional foods, which
          are often passed down through generations. These dishes reflect the
          local ingredients, climate, and history of the region.
        </p>

        <div className="bg-gray-800 dark:bg-gray-200 p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Unique Foods from Around the World:
          </h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-400 mb-2">
              <span className="font-bold">Italy:</span> Pizza and pasta are
              staples, but regional specialties like Risotto and Gelato are
              must-try dishes.
            </li>
            <li className="text-gray-400 mb-2">
              <span className="font-bold">India:</span> Known for its diverse
              and flavorful dishes like curry, biryani, and naan bread, often
              accompanied by aromatic spices.
            </li>
            <li className="text-gray-400 mb-2">
              <span className="font-bold">Mexico:</span> Famous for tacos,
              enchiladas, and mole, a rich sauce made with chocolate and spices.
            </li>
            <li className="text-gray-400 mb-2">
              <span className="font-bold">Indonesia:</span> Dishes like Nasi
              Goreng (fried rice), Satay (grilled meat skewers), and Rendang
              (spiced meat) showcase the country's rich culinary heritage.
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Cultural Significance:</h2>
        <p className="text-lg mb-8">
          Each product, whether it's food, clothing, or art, plays a significant
          role in representing a country's identity. Cultural practices and
          traditional items often reflect the values, beliefs, and history of
          the people who produce them. From the vibrant textiles of Peru to the
          ceremonial teas of Japan, these products are celebrated both locally
          and globally.
        </p>

        <h2 className="text-3xl font-semibold mb-4">A Global Connection:</h2>
        <p className="text-lg mb-8">
          In today's globalized world, many countries share their unique
          products with the international community. Whether it's through
          exports or tourism, these items offer a glimpse into the daily lives
          and cultures of distant places, fostering understanding and
          appreciation across borders.
        </p>
      </div>
    </div>
  );
};

export default Detailed;

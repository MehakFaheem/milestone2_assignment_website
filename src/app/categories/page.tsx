import React from "react";
import Image from "next/image";

const Categories = () => {
  const catogriesData = [
    { id: 1, name: 'Luxury Dinner Sets', price: 20000, description: 'Elegant and durable dinner sets for every occasion.', image: '/LuxuryDinnerSet.jpg' },
    { id: 2, name: 'Tea & Coffee Sets', price: 8000, description: 'Charming tea and coffee sets to enhance your gatherings.', image: '/Tea&CoffeeSets.jpg' },
    { id: 3, name: 'Serving Platters', price: 7000, description: 'Beautiful serving platters to impress your guests.', image: '/ServingPlatters.jpg' },
    { id: 4, name: 'Bowls & Glassware', price: 5000, description: 'Stylish bowls and glassware for an exquisite table setting.', image: '/orange.jpg' },
    { id: 5, name: 'Customizable Crockery', price: 15000, description: 'Tailor-made crockery to suit your personal style.', image: '/CustomizableCrockery.jpg' },
    { id: 6, name: 'Vintage Plates', price: 10000, description: 'Classic vintage plates with intricate patterns.', image: '/VintagePlates.jpg' },
  ];

  return (
    <div className="collection grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
      {catogriesData.map((catogries) => (
        <div key={catogries.id} className="catogries-card bg-white p-5 rounded-md shadow-md text-center">
          <div className="image-container">
            <Image
              src={catogries.image}
              alt={catogries.name}
              width={400} // Adjust based on design
              height={300} // Adjust based on design
              className="image rounded-md transition-transform duration-300"
            />
          </div>
          <h3 className="mt-4 text-2xl font-bold">{catogries.name}</h3>
          <p className="text-gray-500">{catogries.description}</p>
          <div className="price text-blue-500 text-xl font-semibold mt-2">${catogries.price}</div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Categories;

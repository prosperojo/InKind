import React from 'react';
import { Link } from 'react-router-dom';

const donationItems = [
  { label: 'Clothes', icon: '👕' },
  { label: 'Foodstuff', icon: '🥫' },
  { label: 'Money', icon: '💵' },
  { label: 'Healthcare', icon: '💊' },
  { label: 'Footwears', icon: '👟' },
  { label: 'Others', icon: '🎁' },
];

function FeaturedDonations() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 mb-0.5 mt-0 pb-8">
      <div className="max-w-7xl mx-auto text-center mb-0">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-800">
          What You Can Donate?
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Every item you donate brings hope to someone in need. Here are common categories:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-8 mt-0">
          {donationItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition">
              <div className="text-4xl mb-2">{item.icon}</div>
              <span className="text-base font-medium text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>

        <Link to="/donate">
          <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition">
            Donate Now
          </button>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedDonations;

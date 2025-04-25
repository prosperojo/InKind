import React from 'react';
import { Link } from 'react-router-dom';

function ShortAbout() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 pt-8 pb-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          About InKind
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-2">
          <strong>InKind</strong> is a donation-in-kind platform that connects people who want to give with NGOs that need support.
          Whether it’s clothes, foodstuff, or healthcare items, we make sure your generosity reaches those who need it the most.
          Our mission is to make giving simple, meaningful, and transparent — one item at a time.
        </p>
        <Link to="/about">
          <button className="mt-4 inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ShortAbout;

import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative w-full py-40 bg-gradient-to-r from-indigo-500 to-purple-500 mb-0 pb-8">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Make a Difference with InKind
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-8">
          Join us in creating positive change by donating items to those in need.
        </p>
        <Link
          to="/donate"
          className="bg-blue-500 hover:bg-blue-400 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Hero;

import React from 'react';
import DonationForm from '../components/DonationForm';

function DonatePage() {

  return (
    <div className="bg-gray-50">
      <section className="text-center py-12 bg-white px-4 sm:px-8 pt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Donate to Make a Difference</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Every donation, big or small, contributes to a better world. Choose the category of items you wish to donate
          and help those in need. Your contribution can make a lasting impact.
        </p>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Donation Form</h2>
        <div className="max-w-3xl mx-auto">
          <DonationForm />
        </div>
      </section>
    </div>
  );
}

export default DonatePage;

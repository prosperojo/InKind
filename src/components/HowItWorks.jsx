import React from 'react';

function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 pt-6 pb-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-1">
          <div className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-lg hover:text-white  text-gray-800">
            <div className="mb-4">
              <span className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-full text-lg font-semibold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Navigate to Donation Page</h3>
            <p className="text-gray-600">
              Visit the donation page and browse the available categories to see what you can donate.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded- transition transform hover:scale-105 hover:shadow-lg hover:text-white text-gray-800">
            <div className="mb-4">
              <span className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Items & Submit Donation Request</h3>
            <p className="text-gray-600">
              Choose the items you want to donate and submit the donation request form, specifying the items and the NGO you wish to donate to.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-lg hover:text-white text-gray-800">
            <div className="mb-4">
              <span className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-full text-lg font-semibold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Confirm Dropoff/Pickup Details</h3>
            <p className="text-gray-600">
              We will contact you to confirm the dropoff or pickup details for the donated items.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-lg hover:text-white text-gray-800">
            <div className="mb-4">
              <span className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Delivery to NGOs</h3>
            <p className="text-gray-600">
              We deliver donations to selected NGOs, and provide physical proof of the donation, such as a receipt or signed confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

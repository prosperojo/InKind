import React from "react";
import BackToTopButton from "../components/BackToTopButton";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="py-16 px-4 sm:px-8 md:px-20 max-w-6xl mx-auto pt-8">
        <h1 className="text-4xl font-bold mb-6 text-center">About InKind</h1>
        <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
          InKind is a donation-in-kind marketplace connecting donors with NGOs in need of essential items. Our mission is simple — make donating easy, impactful, and transparent.
        </p>

        <div className="grid gap-6 md:grid-cols-2 items-start pb-0.5">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              We envision a world where communities thrive because people can easily support each other through donations of clothes, foodstuff, medicine, and other necessities. InKind bridges the gap by ensuring items reach the NGOs that can use them most effectively.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">How We Work</h2>
            <p className="text-gray-700">
              We provide a platform for donors to list items, NGOs to request help, and both parties to connect seamlessly. Our platform ensures that donated goods are visible, verifiable, and traceable — making every gift meaningful.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Where We're Located</h2>
            <p className="text-gray-700">
              InKind is only currently located at Lagos, Nigeria. Inkind is coming soom to major cities such as Abuja, Port Harcourt, Uyo, Ibadan, Enugu, and more. STAY TUNED!!! Reach out to us for partnerships in other cities in Nigeria.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Donation Delivery Process</h2>
            <p className="text-gray-700">
              Once the donation form is filled, real-time verification of donors and agreement on pickup/drop-off of donation proceeds till all donations reach their beneficiaries.   
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 pt-0">Why Choose InKind?</h2>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto text-gray-700">
            <li className="mb-2">We support verified NGOs only.</li>
            <li className="mb-2">Your donation goes exactly where it's needed.</li>
            <li className="mb-2">We offer full transparency and support.</li>
            <li className="mb-2">Easy donation process with direct communication options.</li>
          </ul>
        </div>

        <div className="mt-8 bg-gray-100 p-4 rounded-lg text-center mb-0.5">
          <h3 className="text-2xl font-semibold mb-2">Want to reach out directly?</h3>
          <p className="mb-4 text-gray-600">We'd love to hear from you. Whether you’re an NGO, donor, or partner, reach out to us anytime.</p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition"
          >
            Contact Us
          </a>
        </div>
      </section>
      <BackToTopButton />
    </div>
  );
};

export default AboutPage;

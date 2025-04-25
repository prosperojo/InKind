import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Spinner from "./Spinner"

const DonationForm = ({ category = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    donationType: category,
    quantity: "",
    location: "",
    message: "",
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    if (formData.donationType === "Money") {
      navigate("/payment", {
        state: {
          name: formData.name,
          email: formData.email,
          amount: Number(formData.quantity) * 100, // Converting to kobo
        },
      });
      return;
    } else {
      emailjs
        .send(
          "service_4z9rixo",
          "template_s3i7n3i",
          formData,
          "ExTPUJGL0bFVZiR4v"
        )
        .then(
          () => {
            console.log("Email sent successfully");
            setLoading(false)
            setIsModalOpen(true);
          },
          (error) => {
            console.error("Email error", error);
          }
        );
    }
  };

  return (
    <>
      {loading ? <Spinner /> : null}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <select
          name="donationType"
          value={formData.donationType}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">Select Donation Type</option>
          <option value="Clothes">Clothes</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Footwear">Footwear</option>
          <option value="Others">Others</option>
        </select>
        <input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          placeholder="Quantity/Amount (e.g., 50000)"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Your Location"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Add a message/description"
          required
          className="w-full px-4 py-2 border rounded-md"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Donation
        </button>
      </form>
      
      {isModalOpen && (
        <Modal
          message="Thank you for your donation! Your request has been submitted."
          closeModal={() => setIsModalOpen(false)}
        />
        
      )}
    </>
  );
};

export default DonationForm;

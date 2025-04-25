import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Message sent:", data);
    reset();
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 sm:px-12 md:px-24 pt-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Have a question, suggestion, or want to partner with us? Reach out and we'll respond as soon as we can.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-black text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700">Email</h4>
              <p className="text-gray-600"><a href="mailto: prosperojo2@gmail.com">support@inkind.org</a></p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-black text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700">Phone</h4>
              <p className="text-gray-600"><a href="tel: +2348131694341">+234 813 169 4341</a></p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-black text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700">Address</h4>
              <p className="text-gray-600">Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg shadow-md p-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <textarea
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Send Message
          </button>

          {isSubmitSuccessful && (
            <p className="text-green-600 text-sm mt-2">Thanks! We'll get back to you soon.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

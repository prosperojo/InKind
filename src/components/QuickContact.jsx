import React from 'react';
import { useForm } from 'react-hook-form';

function QuickContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Later connection to API (maybe)
    alert("Message sent! We'll get back to you soon.");
    reset();
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8 md:px-16 lg:px-24 pb-8 pt-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Have questions, suggestions, or want to partner with us? Drop a message.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
          <div>
            <label className="block text-sm font-medium  text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="mt-1 block w-full rounded-md border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">This field is required</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="mt-1 block w-full rounded-md border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">This field is required</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              rows="4"
              className="mt-1 block w-full rounded-md border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">This field is is required</p>}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default QuickContact;

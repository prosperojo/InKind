import React from "react";

const Modal = ({ message, closeModal }) => {
  const handleClose = () => {
    // Close modal and refresh page
    closeModal();
    window.location.reload();
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Success!</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-white animate-bounce w-24 h-24 mx-auto mb-2 bg-green-600 rounded-full p-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <p className="text-lg text-gray-600 mb-8">{message}</p>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

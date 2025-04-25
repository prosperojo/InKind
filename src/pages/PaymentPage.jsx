import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, email, amount } = location.state || {};

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const payWithPaystack = (e) => {
    e.preventDefault();

    if (!email || !amount) {
      alert("Missing payment info");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_live_767645f078e3e72d8b17f83dd5016ceb25362efe",
      email,
      amount,
      currency: "NGN",
      ref: `${Date.now()}`,
      metadata: {
        custom_fields: [
          {
            display_name: "Donor Name",
            variable_name: "donor_name",
            value: name
          }
        ]
      },
      callback: function (response) {
        alert("Payment successful! Reference: " + response.reference);
        navigate('/donate');
      },
      onClose: function () {
        alert("Payment window closed.");
      }
    });

    handler.openIframe();
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-2">Confirm Your Donation</h2>
      <p className="mb-4">Thank you, <strong>{name || "Donor"}</strong>, for your willingness to donate.</p>
      <p className="text-lg mb-6">You'll be donating: <strong>₦{(amount / 100).toLocaleString()}</strong></p>
      <button
        onClick={payWithPaystack}
        className="bg-indigo-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition"
      >
        Pay with Paystack
      </button>
    </div>
  );
};

export default PaymentPage;

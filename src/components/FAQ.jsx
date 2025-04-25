import React, { useState, useRef, useEffect } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex].style.height =
        contentRefs.current[openIndex].scrollHeight + 'px';
    }
    contentRefs.current.forEach((ref, index) => {
      if (index !== openIndex && ref) {
        ref.style.height = '0px';
      }
    });
  }, [openIndex]);

  const faqs = [
    {
      question: 'What items can I donate?',
      answer:
        'You can donate clothes, foodstuff, footwear, healthcare items, money, and any other items that you think could help people in need.',
    },
    {
      question: 'How do I donate?',
      answer:
        'Simply go to the "Donate" page, choose what items you want to donate, and provide the necessary details to connect with an NGO.',
    },
    {
      question: 'Can I donate used items?',
      answer:
        'Yes! Used items are always welcome as long as they are in good condition. Items that are reusable or can be repurposed are greatly appreciated.',
    },
    {
      question: 'How do I confirm my donation delivery?',
      answer:
        'We keep you updated upon donation pickup/drop-off. You will recieve  confirmation mail as well as physical evidence. A fully transparent process.',
    },
    {
      question: 'Is InKind available nationwide?',
      answer:
        'Currently, InKind operates only in Lagos State, but we are working towards expanding to more locations very soon.',
    },
    {
      question: 'Who are the beneficiaries of my donations?',
      answer: 
      'The intended recipients of your donations are verified NGOs that work with communities, orphanages, hospitals, shelters in need. ',
    }
  ];

  return (
    <section id="#FAQ" className="bg-white py-16 px-4 sm:px-6 lg:px-8 pt-8 pb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-lg font-medium text-gray-800 bg-gray-200 rounded-t-lg hover:bg-gray-300 transition"
              >
                {faq.question}
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ height: '0px' }}
              >
                <div className="px-6 py-4 bg-gray-50 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

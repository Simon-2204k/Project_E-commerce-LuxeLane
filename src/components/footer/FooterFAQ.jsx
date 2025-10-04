import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const FooterFAQ = () => {
  const faqs = [
    {
      question: "What is LUXELANE?",
      answer:
        "LUXELANE is a premium lifestyle brand offering high-quality products and exceptional services designed for comfort and luxury.",
    },
    {
      question: "Do you offer worldwide shipping?",
      answer:
        "Yes, we provide worldwide shipping. Delivery times may vary depending on the destination.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. Products must be in original condition with receipt.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support via email or phone. Visit the Contact Us page for more details.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none hover:bg-gray-800 transition"
            >
              <span className="font-semibold">{faq.question}</span>
              <span>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 border-t border-gray-700 text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterFAQ;

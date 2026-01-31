import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you take insurance?",
      answer: "Yes, I accept most major insurance providers. Please contact me to verify if your specific insurance is accepted."
    },
    {
      question: "What are your rates?",
      answer: "Session rates vary depending on the type and length of session. Please reach out for detailed pricing information."
    },
    {
      question: "Do you have any openings?",
      answer: "I regularly update my availability. Contact me to discuss current openings and schedule a consultation."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-beige-50 px-6 py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left Side - Image with Arch Shape */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] overflow-hidden" style={{ clipPath: 'ellipse(50% 50% at 50% 50%)' }}>
              <img 
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80" 
                alt="Lavender flowers" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - FAQs */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-display font-medium text-darkGreen mb-12">
              FAQs
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-t border-darkGreen/30 pt-6">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-start gap-4 text-left group"
                  >
                    <h3 className="text-2xl lg:text-3xl font-display font-medium text-darkGreen group-hover:text-darkGreen-light transition-colors">
                      {faq.question}
                    </h3>
                    <span className="text-3xl text-darkGreen flex-shrink-0 transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </button>
                  
                  {openIndex === index && (
                    <div className="mt-4 pr-12">
                      <p className="text-lg text-darkGreen font-body leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

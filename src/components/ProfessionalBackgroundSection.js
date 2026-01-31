import React, { useState } from 'react';

const ProfessionalBackgroundSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const credentials = [
    {
      title: "Education",
      content: "Master's in Clinical Psychology from University of Minnesota. Bachelor's in Psychology from St. Olaf College."
    },
    {
      title: "Licensure",
      content: "Licensed Professional Counselor (LPC) in the state of Minnesota. License #12345."
    },
    {
      title: "Certifications",
      content: "Certified in Cognitive Behavioral Therapy (CBT), Trauma-Focused Therapy, and Mindfulness-Based Stress Reduction."
    }
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-beige-200 px-6 py-20 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-display font-medium text-darkGreen text-center mb-16">
          My Professional Background
        </h2>

        <div className="space-y-6">
          {credentials.map((item, index) => (
            <div key={index} className="border-t border-darkGreen/30 pt-6">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center gap-4 text-left group"
              >
                <h3 className="text-2xl lg:text-3xl font-body text-darkGreen group-hover:text-darkGreen-light transition-colors">
                  {item.title}
                </h3>
                <span className="text-3xl text-darkGreen flex-shrink-0 transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div className="mt-4 pr-12">
                  <p className="text-lg text-darkGreen font-body leading-relaxed">
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackgroundSection;

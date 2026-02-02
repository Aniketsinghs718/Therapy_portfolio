'use client';

import { useState } from 'react';
import Image from 'next/image';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer telehealth sessions?",
      answer: "Yes. I offer both in-person sessions in Santa Monica and secure telehealth sessions for clients located anywhere in California. Many clients find a hybrid approach works well for them."
    },
    {
      question: "What is EMDR therapy?",
      answer: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based approach particularly effective for trauma and anxiety. It helps your brain process difficult memories and experiences in a way that reduces their emotional intensity. I use EMDR alongside other modalities based on your specific needs."
    },
    {
      question: "Do you accept insurance?",
      answer: "I'm an out-of-network provider, but I can provide you with a superbill to submit to your insurance for potential reimbursement. Many clients find their out-of-network benefits cover a significant portion of the fee."
    },
    {
      question: "What types of anxiety do you treat?",
      answer: "I work with various forms of anxiety including generalized anxiety, panic disorder, social anxiety, and anxiety related to trauma or perfectionism. We'll tailor our approach to your specific experience—whether that's racing thoughts, body symptoms, or worry patterns."
    },
    {
      question: "How long does therapy typically take?",
      answer: "This varies based on your goals and needs. Some clients benefit from shorter-term focused work (12-20 sessions), while others prefer longer-term support. We'll regularly check in on your progress and adjust as needed."
    },
    {
      question: "Are you currently accepting new clients?",
      answer: "Availability changes, but I do my best to accommodate new clients. Please reach out via the consultation form or phone, and I'll let you know current availability and next steps."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-cream-50 px-4 md:px-6 py-12 md:py-20 lg:px-16">
      <svg width="0" height="0" viewBox="0 0 100 140" aria-hidden>
        <defs>
          <clipPath id="archedWindowFAQ" clipPathUnits="objectBoundingBox">
            <path
              d="M0.827825 0.233206 C0.832592 0.339261 0.828317 0.309337 0.832592 0.392698 L0.834730 0.971956 C0.836867 0.976231 0.832592 0.980506 0.834730 0.995469 L0.167835 0.999744 C0.167835 1.001881 0.163560 0.999744 0.165698 0.999744 L0.174248 0.401248 C0.169973 0.341399 0.169973 0.292237 0.172175 0.233206 C0.187663 0.102409 0.328522 0.000000 0.500000 0.000000 C0.671478 0.000000 0.812337 0.102409 0.826180 0.221700 Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 lg:gap-16">
          {/* Left Side - Image with Arched Window Shape */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div
              className="relative w-full max-w-lg aspect-[3/4]"
              style={{
                clipPath: "url(#archedWindowFAQ)",
                WebkitClipPath: "url(#archedWindowFAQ)",
              }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80" 
                alt="Lavender flowers" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - FAQs */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-charcoal mb-8 md:mb-12">
              Common Questions
            </h2>

            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-t border-charcoal/20 pt-4 md:pt-6">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-start gap-3 md:gap-4 text-left group"
                  >
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-charcoal group-hover:text-terracotta transition-colors">
                      {faq.question}
                    </h3>
                    <span className="text-2xl md:text-3xl text-terracotta flex-shrink-0 transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </button>
                  
                  {openIndex === index && (
                    <div className="mt-3 md:mt-4 pr-8 md:pr-12">
                      <p className="text-base md:text-lg text-charcoal-light font-body leading-relaxed">
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

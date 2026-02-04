'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

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
              d="M0.857287 0.139495 C0.943792 0.209906 0.998109 0.328599 1.000000 0.428023 L0.996385 1.525015 C1.000000 0.984102 0.979649 1.000000 0.996385 1.525015 L0.000684 1.529032 C0.020351 1.000000 0.000000 0.984102 0.000684 1.525232 L0.000000 0.428023 C0.000000 0.338976 0.052587 0.248129 0.116963 0.167659 C0.181339 0.099260 0.302619 0.015341 0.509254 0.008731 C0.674217 0.006719 0.812337 0.102409 0.859298 0.139495 Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 lg:gap-16">
          {/* Left Side - Image with Arched Window Shape */}
          <ScrollReveal className="w-full lg:w-1/2 flex justify-center" delay={100}>
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
          </ScrollReveal>

          {/* Right Side - FAQs */}
          <ScrollReveal className="w-full lg:w-1/2" delay={300}>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

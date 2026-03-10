'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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
    <section className="py-24 md:py-32 bg-gradient-to-br from-white to-cream-50 relative overflow-hidden">

      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

          {/* Left Side - Image with Arched Window Shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex justify-center lg:sticky lg:top-32"
          >
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
              <svg width="0" height="0" viewBox="0 0 100 140" aria-hidden="true" className="absolute">
                <defs>
                  <clipPath id="archedWindowFAQ" clipPathUnits="objectBoundingBox">
                    <path d="M0.857 0.139 C0.944 0.210 0.998 0.329 1.000 0.428 L0.996 1.525 C1.000 0.984 0.980 1.000 0.996 1.525 L0.001 1.529 C0.020 1.000 0.000 0.984 0.001 1.525 L0.000 0.428 C0.000 0.339 0.053 0.248 0.117 0.168 C0.181 0.099 0.303 0.015 0.509 0.009 C0.674 0.007 0.812 0.102 0.857 0.139 Z" />
                  </clipPath>
                </defs>
              </svg>

              <div
                className="absolute inset-0 translate-x-4 translate-y-4 bg-terracotta-light/20"
                style={{ clipPath: "url(#archedWindowFAQ)", WebkitClipPath: "url(#archedWindowFAQ)" }}
              />

              <div
                className="relative w-full h-full shadow-2xl overflow-hidden"
                style={{
                  clipPath: "url(#archedWindowFAQ)",
                  WebkitClipPath: "url(#archedWindowFAQ)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent mix-blend-overlay z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80"
                  alt="Lavender flowers"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - FAQs */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-charcoal mb-4 lg:mb-6">
                Common Questions
              </h2>
              <p className="text-lg text-charcoal/70 font-body mb-8 md:mb-12">
                Find answers to frequent questions about my practice, approach, and how we can work together.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    key={index}
                    className={`border ${isOpen ? 'border-terracotta/30 bg-white shadow-md' : 'border-charcoal/10 hover:border-charcoal/20 bg-white/50'} rounded-2xl overflow-hidden transition-all duration-300`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left group"
                    >
                      <h3 className={`text-lg md:text-xl font-display font-medium ${isOpen ? 'text-terracotta' : 'text-charcoal group-hover:text-terracotta'} transition-colors pr-8`}>
                        {faq.question}
                      </h3>
                      <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full ${isOpen ? 'bg-terracotta text-white' : 'bg-cream-100 text-charcoal group-hover:bg-terracotta/10 group-hover:text-terracotta'} transition-colors duration-300`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pr-12">
                            <p className="text-base text-charcoal/80 font-body leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

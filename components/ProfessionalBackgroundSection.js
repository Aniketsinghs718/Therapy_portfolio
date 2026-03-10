'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Award } from 'lucide-react';

const ProfessionalBackgroundSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const credentials = [
    {
      title: "Education & Licensure",
      content: "I earned my Doctor of Psychology (PsyD) degree with specialized training in trauma and anxiety treatment. I'm a Licensed Clinical Psychologist in California (PSY12345), committed to ongoing education in evidence-based approaches."
    },
    {
      title: "Training & Approach",
      content: "My work integrates Cognitive Behavioral Therapy (CBT), EMDR, and mindfulness-based approaches. I've received extensive training in trauma treatment with emphasis on nervous system regulation and body-oriented techniques. I believe in pacing therapy carefully—prioritizing safety and stabilization alongside insight."
    },
    {
      title: "Clinical Focus",
      content: "I specialize in working with high-achieving adults, professionals, entrepreneurs, and creatives who are navigating anxiety, trauma responses, burnout, and perfectionism. My clients often appear 'fine' on the outside while struggling internally—and I understand that disconnect."
    },
    {
      title: "Philosophy",
      content: "I approach therapy as a collaborative process. My style is warm, grounded, and direct. I believe healing happens when we slow down enough to listen to what your mind and body are actually telling you—not just pushing through or white-knuckling it."
    }
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      {/* Decorative large icon background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.03] pointer-events-none">
        <Award className="w-[800px] h-[800px] text-sage-dark" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 position-relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-charcoal mb-6">
            Professional Background
          </h2>
          <div className="w-24 h-1 bg-terracotta/30 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4 md:space-y-6">
          {credentials.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md border border-sage/30' : 'shadow-sm border border-cream-200 hover:border-sage/50'}`}
              >
                <div className="pt-2 md:pt-3">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 md:px-8 py-5 flex justify-between items-center gap-4 text-left group"
                  >
                    <h3 className={`text-xl md:text-2xl font-display font-medium transition-colors ${isOpen ? 'text-sage-dark' : 'text-charcoal group-hover:text-sage-dark'}`}>
                      {item.title}
                    </h3>
                    <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${isOpen ? 'bg-sage text-white' : 'bg-sage-light/20 text-sage-dark group-hover:bg-sage/20'}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
                        <div className="px-6 md:px-8 pb-8 pr-12 md:pr-16">
                          <p className="text-base md:text-lg text-charcoal/80 font-body leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackgroundSection;

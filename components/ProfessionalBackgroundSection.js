'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

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
    <section className="min-h-screen bg-sage-light/30 px-4 md:px-6 py-12 md:py-20 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-charcoal text-center mb-12 md:mb-16">
            Professional Background
          </h2>
        </ScrollReveal>

        <div className="space-y-4 md:space-y-6">
          {credentials.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="border-t border-charcoal/20 pt-4 md:pt-6">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center gap-3 md:gap-4 text-left group"
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-body text-charcoal group-hover:text-sage transition-colors">
                  {item.title}
                </h3>
                <span className="text-2xl md:text-3xl text-sage flex-shrink-0 transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div className="mt-3 md:mt-4 pr-8 md:pr-12">
                  <p className="text-base md:text-lg text-charcoal-light font-body leading-relaxed">
                    {item.content}
                  </p>
                </div>
              )}
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackgroundSection;

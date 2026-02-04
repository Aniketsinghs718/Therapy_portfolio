'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const OurOfficeSection = () => {
  const officeImages = [
    {
      src: "/images/office1.jpeg",
      alt: "Comfortable therapy office with natural light"
    },
    {
      src: "/images/office2.jpeg",
      alt: "Calming therapy space with plants"
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      alt: "Welcoming office waiting area"
    }
  ];

  return (
    <section className="min-h-screen bg-white px-4 md:px-6 py-12 md:py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-charcoal mb-6 md:mb-8">
              A Calm Space for Healing
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-charcoal-light font-body leading-relaxed max-w-3xl mx-auto px-4">
              My office in Santa Monica offers a warm, private environment where you can feel safe to explore, process, and heal. Natural light, comfortable seating, and a serene atmosphere create the right setting for genuine connection and growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Office Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {officeImages.map((image, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="relative aspect-[4/5] overflow-hidden group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Office Details */}
        <ScrollReveal delay={300}>
          <div className="bg-cream-50 p-6 md:p-10 lg:p-12 text-center">
            <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-display font-medium text-charcoal mb-4 md:mb-6">
                Visit Our Office
              </h3>
              
              <div className="space-y-3 text-base md:text-lg text-charcoal-light font-body">
                <p className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-terracotta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123th Street 45 W, Santa Monica, CA 90401</span>
                </p>
                
                <p className="text-charcoal-light leading-relaxed mt-4 md:mt-6">
                  Conveniently located in Santa Monica with easy parking. I offer both in-person sessions at my office and secure telehealth options for clients throughout California.
                </p>
              </div>

              <button className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-sage text-white font-medium text-sm md:text-base hover:bg-sage-dark hover:scale-105 transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl mt-6 md:mt-8">
                GET DIRECTIONS
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default OurOfficeSection;

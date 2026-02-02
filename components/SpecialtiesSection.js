import Image from 'next/image';

const SpecialtiesSection = () => {
  const specialties = [
    {
      title: "Anxiety & Panic",
      description: "If you're caught in cycles of worry, overthinking, or feeling constantly on edge, we'll work together to help you regulate your nervous system and find genuine calm beyond just managing symptoms.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80"
    },
    {
      title: "Trauma & PTSD",
      description: "Using EMDR and trauma-focused approaches, we'll address how past experiences affect your present relationships, confidence, and sense of safety—paced carefully with emphasis on stabilization and regulation.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
    },
    {
      title: "Burnout & Stress",
      description: "For high-achievers and professionals feeling internally exhausted despite appearing functional, we'll develop sustainable patterns for living and working that don't require constant pushing through.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80"
    }
  ];

  return (
    <section className="min-h-screen bg-sage-light/20 px-4 md:px-6 py-12 md:py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-charcoal text-center mb-12 md:mb-16 lg:mb-20">
          Areas of Focus
        </h2>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-cream-200 p-6 md:p-8 lg:p-10 flex flex-col items-center text-center hover:border-terracotta-light hover:shadow-lg transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-terracotta mb-4 md:mb-6">
                {specialty.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg text-charcoal-light font-body leading-relaxed mb-6 md:mb-8">
                {specialty.description}
              </p>

              {/* Circular Image */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden">
                <Image 
                  src={specialty.image} 
                  alt={specialty.title} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;

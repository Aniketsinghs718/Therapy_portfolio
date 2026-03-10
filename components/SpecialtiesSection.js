'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const SpecialtiesSection = () => {
  const specialties = [
    {
      title: "Anxiety & Panic",
      description: "If you're caught in cycles of worry, overthinking, or feeling constantly on edge, we'll work together to help you regulate your nervous system and find genuine calm beyond just managing symptoms.",
      image: "https://images.pexels.com/photos/3974410/pexels-photo-3974410.jpeg",
      color: "from-sage-light/20 to-transparent",
      icon: "🌤️"
    },
    {
      title: "Trauma & PTSD",
      description: "Using EMDR and trauma-focused approaches, we'll address how past experiences affect your present relationships, confidence, and sense of safety—paced carefully with emphasis on stabilization and regulation.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      color: "from-terracotta-light/20 to-transparent",
      icon: "🌱"
    },
    {
      title: "Burnout & Stress",
      description: "For high-achievers and professionals feeling internally exhausted despite appearing functional, we'll develop sustainable patterns for living and working that don't require constant pushing through.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
      color: "from-cream-200/50 to-transparent",
      icon: "🌊"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-charcoal mb-6">
            Areas of Focus
          </h2>
          <p className="text-lg text-charcoal/70 font-body">
            Specialized support tailored to your unique experiences and needs.
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-200/50"
            >
              {/* Gradient background hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-b ${specialty.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-8 lg:p-10 flex flex-col items-center text-center h-full z-10">

                {/* Image / Icon container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full overflow-hidden border-4 border-white shadow-md transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={specialty.image}
                    alt={specialty.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Icon badge */}
                <div className="absolute top-[136px] md:top-[168px] bg-white text-xl p-2 rounded-full shadow-sm transform -translate-y-1/2">
                  {specialty.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-medium text-terracotta mb-4 mt-2">
                  {specialty.title}
                </h3>

                <p className="text-base text-charcoal/80 font-body leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;

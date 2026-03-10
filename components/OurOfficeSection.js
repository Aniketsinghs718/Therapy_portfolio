'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

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
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-charcoal mb-6 md:mb-8">
            A Calm Space for Healing
          </h2>
          <p className="text-lg text-charcoal/80 font-body leading-relaxed">
            My office in Santa Monica offers a warm, private environment where you can feel safe to explore, process, and heal. Natural light, comfortable seating, and a serene atmosphere create the right setting for genuine connection and growth.
          </p>
        </motion.div>

        {/* Office Images Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20"
        >
          {officeImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-md group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Office Details Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden bg-sage-light/10 border border-sage/20 p-8 md:p-12 lg:p-16 text-center shadow-sm"
        >
          {/* Decorative Corner Backgrounds */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream-200/50 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-charcoal mb-8">
              Visit Our Office
            </h3>

            <div className="space-y-4 text-charcoal/80 font-body">
              <p className="flex items-center justify-center gap-3 text-lg font-medium text-charcoal">
                <MapPin className="w-5 h-5 text-terracotta shrink-0" />
                123th Street 45 W, Santa Monica, CA 90401
              </p>

              <p className="leading-relaxed">
                Conveniently located in Santa Monica with easy parking. I offer both in-person sessions at my office and secure telehealth options for clients throughout California.
              </p>
            </div>

            <div className="pt-6">
              <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage text-white font-medium text-base rounded-full overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-sage/20">
                <span className="relative z-10 flex items-center gap-2">
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </span>
                <div className="absolute inset-0 bg-sage-dark translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurOfficeSection;

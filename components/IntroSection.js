'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream-100 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 position-relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-sage-dark font-medium tracking-widest uppercase text-sm mb-4">
                Meet Your Therapist
              </h3>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-charcoal leading-tight mb-8"
            >
              Hi, I'm <br className="hidden md:block" />
              <span className="italic font-light text-terracotta">Dr. Maya Reynolds.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-charcoal/80 font-body text-lg leading-relaxed mb-10"
            >
              <p>
                I'm a licensed clinical psychologist in Santa Monica who works with high-achieving adults struggling with anxiety, stress, trauma, and burnout.
              </p>
              <p>
                My approach is warm, collaborative, and grounded—combining evidence-based methods like CBT, EMDR, and mindfulness with body-oriented techniques to help you feel calmer, more connected, and genuinely at ease.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-white font-medium text-base rounded-full overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl hover:shadow-terracotta/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Your Session
              </span>
              <div className="absolute inset-0 bg-terracotta-dark translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </motion.button>
          </div>

          {/* Right Side - Overlapping Images with Arched Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[440px] aspect-[4/5]">
              <svg width="0" height="0" viewBox="0 0 100 140" aria-hidden="true" className="absolute">
                <defs>
                  <clipPath id="archedWindowIntro" clipPathUnits="objectBoundingBox">
                    <path d="M0.857 0.139 C0.944 0.210 0.998 0.329 1.000 0.428 L0.996 1.525 C1.000 0.984 0.980 1.000 0.996 1.525 L0.001 1.529 C0.020 1.000 0.000 0.984 0.001 1.525 L0.000 0.428 C0.000 0.339 0.053 0.248 0.117 0.168 C0.181 0.099 0.303 0.015 0.509 0.009 C0.674 0.007 0.812 0.102 0.857 0.139 Z" />
                  </clipPath>
                </defs>
              </svg>

              {/* Decorative Offset Box */}
              <div
                className="absolute inset-0 translate-x-4 translate-y-4 bg-terracotta/10"
                style={{ clipPath: "url(#archedWindowIntro)", WebkitClipPath: "url(#archedWindowIntro)" }}
              />

              {/* Main Image */}
              <div
                className="relative w-full h-full shadow-2xl overflow-hidden"
                style={{
                  clipPath: "url(#archedWindowIntro)",
                  WebkitClipPath: "url(#archedWindowIntro)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-terracotta/10 to-transparent mix-blend-overlay z-10" />
                <Image
                  src="/images/Dr. Maya Reynolds.png"
                  alt="Dr. Maya Reynolds"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

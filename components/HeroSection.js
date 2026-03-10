'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-cream-50 overflow-hidden px-4 md:px-8 lg:px-16 pt-24 pb-12">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-terracotta/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      {/* Top Navbar items embedded in hero if needed, but assuming a global nav wasn't fully separated. The original had nav inside HeroSection. I will retain a minimal nav or just focus on the hero content. */}
      {/* Retaining original nav structure */}
      <div className="absolute top-0 left-0 w-full px-4 lg:px-16 py-6 z-20">
        <nav className="max-w-7xl mx-auto flex justify-between items-center animate-fadeIn">
          <h1 className="text-xl md:text-2xl font-display font-medium text-charcoal tracking-wide">
            Dr. Maya Reynolds, PsyD
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-base text-charcoal hover:text-terracotta transition-colors">
              About
            </a>
            <a href="#contact" className="text-base text-charcoal hover:text-terracotta transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </div>

      <div className="relative max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mt-12 md:mt-8">

        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-sage/10 text-sage-dark text-sm font-medium tracking-wide mb-6">
              Holistic Therapy in Santa Monica
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-charcoal leading-[1.1] mb-6"
          >
            Find calm beyond <br className="hidden lg:block" />
            <span className="text-sage-dark italic font-light">the overwhelm</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-charcoal/80 font-body mb-10 max-w-lg leading-relaxed"
          >
            Expert therapy for anxiety, trauma, and burnout. Rediscover your balance in a safe, nurturing space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-white font-medium text-base rounded-full overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-terracotta/20">
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </span>
              <div className="absolute inset-0 bg-terracotta-dark translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-charcoal font-medium text-base rounded-full border border-charcoal/10 hover:border-sage-dark hover:text-sage-dark hover:bg-sage/5 transition-all duration-300">
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Right Side - Arched Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10"
        >
          <div className="relative w-full max-w-[440px] aspect-[4/5] mt-8 lg:mt-0">
            <svg width="0" height="0" viewBox="0 0 100 140" aria-hidden="true" className="absolute">
              <defs>
                <clipPath id="archedWindowHero" clipPathUnits="objectBoundingBox">
                  <path d="M0.857 0.139 C0.944 0.210 0.998 0.329 1.000 0.428 L0.996 1.525 C1.000 0.984 0.980 1.000 0.996 1.525 L0.001 1.529 C0.020 1.000 0.000 0.984 0.001 1.525 L0.000 0.428 C0.000 0.339 0.053 0.248 0.117 0.168 C0.181 0.099 0.303 0.015 0.509 0.009 C0.674 0.007 0.812 0.102 0.857 0.139 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* The Image Background Shadow Offset */}
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 bg-sage-light/30"
              style={{ clipPath: "url(#archedWindowHero)", WebkitClipPath: "url(#archedWindowHero)" }}
            />
            {/* The Actual Image */}
            <div
              className="relative w-full h-full shadow-2xl overflow-hidden"
              style={{ clipPath: "url(#archedWindowHero)", WebkitClipPath: "url(#archedWindowHero)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-sage/20 to-transparent mix-blend-overlay z-10" />
              <Image
                src="https://images.pexels.com/photos/7176025/pexels-photo-7176025.jpeg"
                alt="Therapy space"
                fill
                className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-cream-200"
            >
              <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center">
                <span className="text-2xl leading-none">🌿</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">Licensed</p>
                <p className="text-xs text-charcoal/70">Psychologist</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

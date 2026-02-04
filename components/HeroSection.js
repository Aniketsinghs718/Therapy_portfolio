'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-light/10 px-4 py-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center mb-8 animate-fadeIn">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-charcoal">
            Dr. Maya Reynolds, PsyD
          </h1>
          <div className="flex gap-4 md:gap-8">
            <a href="#about" className="text-sm md:text-base lg:text-lg text-charcoal hover:text-terracotta transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm md:text-base lg:text-lg text-charcoal hover:text-terracotta transition-colors">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Content - Split Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20 mt-12 md:mt-16 lg:mt-20">
          <svg width="0" height="0" viewBox="0 0 100 140" aria-hidden>
            <defs>
              <clipPath id="archedWindow" clipPathUnits="objectBoundingBox">
                <path
                  d="M0.857287 0.139495 C0.943792 0.209906 0.998109 0.328599 1.000000 0.428023 L0.996385 1.525015 C1.000000 0.984102 0.979649 1.000000 0.996385 1.525015 L0.000684 1.529032 C0.020351 1.000000 0.000000 0.984102 0.000684 1.525232 L0.000000 0.428023 C0.000000 0.338976 0.052587 0.248129 0.116963 0.167659 C0.181339 0.099260 0.302619 0.015341 0.509254 0.008731 C0.674217 0.006719 0.812337 0.102409 0.859298 0.139495 Z"
                  fill="black"
                />
              </clipPath>
            </defs>
          </svg>

          {/* Left Side - Arched Window Image */}
          <ScrollReveal className="w-full lg:w-1/2 flex justify-center" delay={200}>
            <div
              className="relative w-full max-w-lg aspect-[3/4]"
              style={{
                clipPath: "url(#archedWindow)",
                WebkitClipPath: "url(#archedWindow)",
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-sage/20 z-10" />

              {/* Image */}
              <Image
                src="https://images.pexels.com/photos/7176025/pexels-photo-7176025.jpeg"
                alt="Dr. Maya Reynolds"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </ScrollReveal>

          {/* Right Side - Content Centered */}
          <ScrollReveal className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:px-8" delay={400}>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-medium text-charcoal leading-tight mb-4 md:mb-6">
              Find calm beyond<br />
              the overwhelm
            </h2>
            <p className="text-base md:text-lg lg:text-2xl text-charcoal-light font-body mb-8 md:mb-10 max-w-xl px-4">
              Therapy for anxiety, trauma, and burnout in Santa Monica, CA.
            </p>
            <button className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-terracotta text-white font-medium text-sm md:text-base lg:text-lg hover:bg-terracotta-dark hover:scale-105 transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl">
              SCHEDULE CONSULTATION
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

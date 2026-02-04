'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const IntroSection = () => {
  return (
    <section className="min-h-screen bg-cream-100 px-4 md:px-6 py-12 md:py-20 lg:px-16">
      <svg width="0" height="0" viewBox="0 0 100 140" aria-hidden>
        <defs>
          <clipPath id="archedWindowIntro" clipPathUnits="objectBoundingBox">
            <path
              d="M0.857287 0.139495 C0.943792 0.209906 0.998109 0.328599 1.000000 0.428023 L0.996385 1.525015 C1.000000 0.984102 0.979649 1.000000 0.996385 1.525015 L0.000684 1.529032 C0.020351 1.000000 0.000000 0.984102 0.000684 1.525232 L0.000000 0.428023 C0.000000 0.338976 0.052587 0.248129 0.116963 0.167659 C0.181339 0.099260 0.302619 0.015341 0.509254 0.008731 C0.674217 0.006719 0.812337 0.102409 0.859298 0.139495 Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          {/* Left Side - Text Content */}
          <ScrollReveal className="w-full lg:w-1/2 space-y-6 md:space-y-8" delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-charcoal leading-tight">
              Hi, I'm Dr. Maya Reynolds.
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-charcoal-light font-body leading-relaxed">
              I'm a licensed clinical psychologist in Santa Monica who works with high-achieving adults struggling with anxiety, stress, trauma, and burnout. My approach is warm, collaborative, and grounded—combining evidence-based methods like CBT, EMDR, and mindfulness with body-oriented techniques to help you feel calmer, more connected, and genuinely at ease.
            </p>

            <button className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-terracotta text-white font-medium text-sm md:text-base hover:bg-terracotta-dark hover:scale-105 transition-all duration-300 uppercase tracking-wider mt-4 md:mt-6">
              BOOK YOUR SESSION
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </ScrollReveal>

          {/* Right Side - Overlapping Images with Arched Window */}
          <ScrollReveal className="w-full lg:w-1/2 relative" delay={300}>
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              {/* Large Arched Window Image */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  clipPath: "url(#archedWindowIntro)",
                  WebkitClipPath: "url(#archedWindowIntro)",
                }}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-terracotta/10 to-cream-100 overflow-hidden">
                  <Image 
                    src="/images/Dr. Maya Reynolds.png" 
                    alt="Beautiful lilac flowers" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

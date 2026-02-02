'use client';

import Image from 'next/image';

const IntroSection = () => {
  return (
    <section className="min-h-screen bg-cream-100 px-4 md:px-6 py-12 md:py-20 lg:px-16">
      <svg width="0" height="0" viewBox="0 0 100 140" aria-hidden>
        <defs>
          <clipPath id="archedWindowIntro" clipPathUnits="objectBoundingBox">
            <path
              d="M0.827825 0.233206 C0.832592 0.339261 0.828317 0.309337 0.832592 0.392698 L0.834730 0.971956 C0.836867 0.976231 0.832592 0.980506 0.834730 0.995469 L0.167835 0.999744 C0.167835 1.001881 0.163560 0.999744 0.165698 0.999744 L0.174248 0.401248 C0.169973 0.341399 0.169973 0.292237 0.172175 0.233206 C0.187663 0.102409 0.328522 0.000000 0.500000 0.000000 C0.671478 0.000000 0.812337 0.102409 0.826180 0.221700 Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-charcoal leading-tight">
              Hi, I'm Dr. Maya Reynolds.
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-charcoal-light font-body leading-relaxed">
              I'm a licensed clinical psychologist in Santa Monica who works with high-achieving adults struggling with anxiety, stress, trauma, and burnout. My approach is warm, collaborative, and grounded—combining evidence-based methods like CBT, EMDR, and mindfulness with body-oriented techniques to help you feel calmer, more connected, and genuinely at ease.
            </p>

            <button className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-terracotta text-white font-medium text-sm md:text-base hover:bg-terracotta-dark transition-all duration-300 uppercase tracking-wider mt-4 md:mt-6">
              BOOK YOUR SESSION
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Side - Overlapping Images with Arched Window */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              {/* Large Arched Window Image */}
              <div
                className="absolute top-0 right-0 w-3/4 h-3/4"
                style={{
                  clipPath: "url(#archedWindowIntro)",
                  WebkitClipPath: "url(#archedWindowIntro)",
                }}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-terracotta/10 to-cream-100 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80" 
                    alt="Beautiful lilac flowers" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 75vw, 37.5vw"
                  />
                </div>
              </div>

              {/* Small Circle - White Hydrangea */}
              <div className="absolute bottom-0 left-0 md:left-auto md:right-0 w-1/2 h-1/2" style={{ clipPath: 'circle(50% at 50% 50%)' }}>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&q=80" 
                    alt="White hydrangea flowers" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

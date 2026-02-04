import React from 'react';

const IntroSection = () => {
  return (
    <section className="min-h-screen bg-beige-100 px-6 py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-5xl lg:text-6xl font-display font-medium text-darkGreen leading-tight">
              Hi, I'm Lilac.
            </h2>
            
            <p className="text-lg lg:text-xl text-darkGreen font-body leading-relaxed">
              I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
            </p>

            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-darkGreen text-darkGreen font-medium text-base hover:bg-darkGreen hover:text-white transition-all duration-300 uppercase tracking-wider mt-6">
              LET'S CHAT
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Side - Overlapping Circular Images */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              {/* Large Circle - Lilac Flowers */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4" style={{ clipPath: 'circle(50% at 50% 50%)' }}>
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 rounded-full overflow-hidden">
                  <img 
                    src="https://drive.google.com/file/d/1koVGhvD8mkiRXRukqrklo0HbB48p9PIa/view?usp=drive_link" 
                    alt="Beautiful lilac flowers" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Small Circle - White Hydrangea */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2" style={{ clipPath: 'circle(50% at 50% 50%)' }}>
                <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&q=80" 
                    alt="White hydrangea flowers" 
                    className="w-full h-full object-cover"
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

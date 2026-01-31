import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-beige-100 px-6 py-8 lg:px-16">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <h1 className="text-2xl lg:text-3xl font-display font-medium text-darkGreen">
          Lilac Template
        </h1>
        <div className="flex gap-8 lg:gap-12">
          <a href="#blog" className="text-base lg:text-lg text-darkGreen hover:text-darkGreen-light transition-colors">
            Blog
          </a>
          <a href="#contact" className="text-base lg:text-lg text-darkGreen hover:text-darkGreen-light transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-7xl mx-auto mt-12">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80" 
              alt="Beautiful lilac flowers" 
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl lg:text-7xl font-display font-medium text-darkGreen leading-tight mb-8">
            Live your life<br />
            in full bloom
          </h2>
          <p className="text-lg lg:text-xl text-darkGreen font-body mb-10">
            Therapy for Adults in Minneapolis, MN.
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-darkGreen text-darkGreen font-medium text-base lg:text-lg hover:bg-darkGreen hover:text-white transition-all duration-300 uppercase tracking-wider">
            CONNECT WITH ME
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

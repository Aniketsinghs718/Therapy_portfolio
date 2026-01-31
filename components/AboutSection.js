import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-beige-100 px-6 py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-medium text-darkGreen leading-tight">
              Live a fulfilling life.
            </h2>
            
            <p className="text-lg lg:text-xl text-darkGreen font-body leading-relaxed">
              Life can be challenging—especially when you're trying to balance your personal and professional life.
            </p>
            
            <p className="text-lg lg:text-xl text-darkGreen font-body leading-relaxed">
              It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
            </p>

            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-darkGreen text-darkGreen font-medium text-base hover:bg-darkGreen hover:text-white transition-all duration-300 uppercase tracking-wider mt-6">
              GET IN TOUCH
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&q=80" 
                alt="Coffee cup with notebook and hat" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

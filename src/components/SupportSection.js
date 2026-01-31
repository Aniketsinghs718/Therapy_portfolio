import React from 'react';

const SupportSection = () => {
  const challenges = [
    "Persistent feelings of sadness or hopelessness",
    "Trouble focusing or making decisions",
    "Difficulty maintaining relationships",
    "Feeling constantly exhausted or unmotivated",
    "A pervasive sense of being overwhelmed"
  ];

  return (
    <section className="min-h-screen bg-beige-100 px-6 py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                alt="Peaceful woman looking up" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2 bg-beige-200/50 p-8 lg:p-12">
            <h2 className="text-4xl lg:text-5xl font-display font-medium text-darkGreen leading-tight">
              You don't have to do this all <em className="font-display italic font-light">alone</em>.
            </h2>
            
            <p className="text-xl lg:text-2xl text-darkGreen font-body leading-relaxed">
              If you are facing any of these, there's hope:
            </p>
            
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-darkGreen text-xl mt-1">•</span>
                  <span className="text-lg lg:text-xl text-darkGreen font-body leading-relaxed">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-lg lg:text-xl text-darkGreen font-body leading-relaxed pt-4">
              With empathy and guidance, we'll work together to navigate the challenges life throws your way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

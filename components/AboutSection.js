import Image from 'next/image';

import React from 'react';

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row py-12 md:py-20">
      <div className="w-full md:w-1/2 flex flex-col justify-between p-6 md:p-12 bg-[#f4f1e9]">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2d4a2d] mb-4 md:mb-6">You deserve more than just pushing through.</h1>
          <p className="text-base md:text-lg text-[#2d4a2d] mb-3 md:mb-4">Maybe you're functioning on the outside—meeting deadlines, showing up, keeping it together—but inside, you're exhausted. Anxious. Stuck in overthinking or bracing for the next thing to go wrong.</p>
          <p className="text-base md:text-lg text-[#2d4a2d] mb-6 md:mb-8">If past experiences are affecting your relationships, confidence, or sense of safety, therapy can help you reconnect with yourself and build a life that feels sustainable, not just survivable.</p>
        </div>
        <button className="text-sm font-medium text-[#2d4a2d] hover:underline self-start mt-4 md:mt-0">GET IN TOUCH →</button>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Lifestyle" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};



export default AboutSection;

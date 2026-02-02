import Image from 'next/image';

const SupportSection = () => {
  const challenges = [
    "Racing thoughts, constant worry, or feeling emotionally on edge",
    "Body tension, sleep difficulties, or always bracing for something to go wrong",
    "Effects of past trauma showing up in current relationships or confidence",
    "Professional burnout, perfectionism, or high internal pressure",
    "Feeling disconnected from yourself after years of just pushing through"
  ];

  return (
    <div className="flex flex-col md:flex-row py-10 md:py-16">
      <div className="w-full md:w-1/2 flex flex-col justify-between p-6 md:p-12 bg-[#f4f1e9]">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2d4a2d] mb-4 md:mb-6">You don't have to keep functioning on <em className="font-light italic">empty</em>.</h1>
          <p className="text-base md:text-lg text-[#2d4a2d] mb-3 md:mb-4">Therapy can help if you're experiencing:</p>
          
          <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
            {challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-2 md:gap-3">
                <span className="text-[#d4735e] text-lg md:text-xl mt-1">•</span>
                <span className="text-sm md:text-base text-[#2d4a2d]">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
          
          <p className="text-base md:text-lg text-[#2d4a2d] mb-6 md:mb-8">In our work together, we'll create a space to slow down, reconnect with yourself, and develop practical tools alongside deeper insight—so you can build resilience and a stronger relationship with yourself.</p>
        </div>
        <button className="text-sm font-medium text-[#2d4a2d] hover:underline self-start mt-4 md:mt-0">START THERAPY →</button>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
          alt="Peaceful woman" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SupportSection;

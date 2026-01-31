import Image from 'next/image';

const SpecialtiesSection = () => {
  const specialties = [
    {
      title: "Self-Esteem",
      description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
    },
    {
      title: "Relationships",
      description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
    },
    {
      title: "Burnout",
      description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=800&q=80"
    }
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl lg:text-5xl font-display font-medium text-darkGreen text-center mb-16 lg:mb-20">
          My Specialties
        </h2>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="bg-beige-200 border border-beige-300 p-8 lg:p-10 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-display font-medium text-darkGreen mb-6">
                {specialty.title}
              </h3>

              {/* Description */}
              <p className="text-base lg:text-lg text-darkGreen font-body leading-relaxed mb-8">
                {specialty.description}
              </p>

              {/* Circular Image */}
              <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden">
                <Image 
                  src={specialty.image} 
                  alt={specialty.title} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-full bg-cream-50 -skew-y-3 -translate-y-1/2 z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Side - Image with layered design */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Back decorative shape */}
              <div className="absolute -top-6 -left-6 w-3/4 h-3/4 bg-cream-200 rounded-3xl" />
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-sage-light/20 rounded-3xl" />

              {/* Main Image Container */}
              <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://images.pexels.com/photos/7176302/pexels-photo-7176302.jpeg"
                  alt="Therapeutic lifestyle representation"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-sage-dark font-medium tracking-widest uppercase text-sm mb-4">
                My Approach
              </h3>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-charcoal mb-8 leading-tight"
            >
              You deserve more <br className="hidden md:block" />
              <span className="italic text-sage">than just pushing through.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-charcoal/80 font-body text-lg leading-relaxed mb-10"
            >
              <p>
                Maybe you're functioning on the outside—meeting deadlines, showing up, keeping it together—but inside, you're exhausted. Anxious. Stuck in overthinking or bracing for the next thing to go wrong.
              </p>
              <p>
                If past experiences are affecting your relationships, confidence, or sense of safety, therapy can help you reconnect with yourself and build a life that feels sustainable, not just survivable.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-medium tracking-wide group"
            >
              <span className="border-b border-transparent group-hover:border-terracotta-dark transition-colors duration-300">
                GET IN TOUCH
              </span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

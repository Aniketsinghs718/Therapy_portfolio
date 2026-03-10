'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const SupportSection = () => {
  const challenges = [
    "Racing thoughts, constant worry, or feeling emotionally on edge",
    "Body tension, sleep difficulties, or always bracing for something to go wrong",
    "Effects of past trauma showing up in current relationships or confidence",
    "Professional burnout, perfectionism, or high internal pressure",
    "Feeling disconnected from yourself after years of just pushing through"
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
                You Are Not Alone
              </h3>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-charcoal mb-6 leading-tight"
            >
              You don't have to keep functioning on <em className="font-light italic text-sage-dark">empty.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-charcoal/80 font-body mb-8"
            >
              Therapy can help if you're experiencing:
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-10 w-full"
            >
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-cream-50/50 border border-cream-100/50 hover:bg-cream-100/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-sage shrink-0 mt-0.5" />
                  <span className="text-base text-charcoal/80 font-body leading-relaxed">
                    {challenge}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-charcoal/80 font-body mb-10 leading-relaxed"
            >
              In our work together, we'll create a space to slow down, reconnect with yourself, and develop practical tools alongside deeper insight—so you can build resilience and a stronger relationship with yourself.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-sage text-white font-medium text-base rounded-full hover:bg-sage-dark hover:shadow-lg hover:shadow-sage/20 transition-all duration-300 group"
            >
              Start Therapy
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent mix-blend-overlay z-10" />
              <Image
                src="https://images.pexels.com/photos/6255599/pexels-photo-6255599.jpeg"
                alt="Woman finding peace and support"
                fill
                className="object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SupportSection;

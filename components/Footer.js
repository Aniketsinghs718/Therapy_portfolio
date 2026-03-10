'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <footer className="bg-charcoal px-4 md:px-6 py-16 md:py-24 lg:px-16 text-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">
          {/* Column 1 - Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-display font-medium text-cream-50 mb-6 tracking-wide">
              Dr. Maya Reynolds, PsyD
            </h3>
            <div className="space-y-3 text-cream-100/70 font-body text-base">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <div className="pt-4 space-y-2">
                <p>
                  <a href="mailto:contact@drmayareynolds.com" className="hover:text-terracotta transition-colors break-all">
                    contact@drmayareynolds.com
                  </a>
                </p>
                <p>
                  <a href="tel:3105551234" className="hover:text-terracotta transition-colors">
                    (310) 555-1234
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2 - Hours */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-display font-medium text-cream-50 mb-6">
              Hours
            </h3>
            <div className="space-y-4 text-cream-100/70 font-body text-base">
              <div>
                <p className="text-cream-50 font-medium mb-1">Monday – Thursday</p>
                <p>9:00 AM – 7:00 PM</p>
              </div>
              <div>
                <p className="text-cream-50 font-medium mb-1">Friday</p>
                <p>9:00 AM – 4:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Column 3 - Find */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-display font-medium text-cream-50 mb-6">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-3 text-cream-100/70 py-1">
              <a href="#about" className="hover:text-terracotta hover:translate-x-1 transition-all">About</a>
              <a href="#specialties" className="hover:text-terracotta hover:translate-x-1 transition-all">Specialties</a>
              <a href="#office" className="hover:text-terracotta hover:translate-x-1 transition-all">Office</a>
              <a href="#contact" className="hover:text-terracotta hover:translate-x-1 transition-all">Contact</a>
            </nav>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-white/10 w-full mb-8"
        />

        {/* Bottom Footer - Legal Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-cream-100/50 font-body"
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
            <a href="#privacy" className="hover:text-cream-50 transition-colors">Privacy Policy</a>
            <a href="#estimate" className="hover:text-cream-50 transition-colors">Good Faith Estimate</a>
            <a href="#terms" className="hover:text-cream-50 transition-colors">Terms & Conditions</a>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p>
              Website by <a href="https://gobloomcreative.com" className="hover:text-cream-50 transition-colors" target="_blank" rel="noopener noreferrer">Go Bloom Creative</a>
            </p>
            <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.</p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;

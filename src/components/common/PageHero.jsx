import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle, description, backgroundImage }) => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      />
      <div className="absolute inset-0 bg-navy/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl font-medium text-golden mb-6"
            >
              {subtitle}
            </motion.h2>
          )}
          
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
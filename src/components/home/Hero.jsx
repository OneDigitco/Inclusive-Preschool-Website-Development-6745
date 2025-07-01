import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-blue-900 to-navy">
      {/* Background Image - UPDATED WITH NEW IMAGE */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url("https://auth.adpt.co.za/file/psrc/home-background.jpg")' }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-golden/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Empowering Every Child's{' '}
            <span className="text-golden">Unique Journey</span>{' '}
            to Success
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Specialised education and therapeutic support for children with special needs in Bulawayo
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/contact#contact-form"
              className="bg-golden text-navy px-8 py-4 rounded-full font-poppins font-semibold text-lg btn-primary hover:bg-yellow-500 transition-all duration-300 min-w-[200px]"
            >
              Enrol Your Child
            </Link>
            <Link
              to="/contact#contact-form"
              className="border-2 border-golden text-golden px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-golden hover:text-navy transition-all duration-300 min-w-[200px]"
            >
              Schedule a Visit
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-golden">80</p>
              <p className="text-sm">Maximum Capacity</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-golden">1:7</p>
              <p className="text-sm">Teacher-Student Ratio</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-golden">3+</p>
              <p className="text-sm">Years Age Group</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-golden rounded-full flex justify-center">
          <div className="w-1 h-3 bg-golden rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
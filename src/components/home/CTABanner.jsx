import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiArrowRight, FiHeart} = FiIcons;

const CTABanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-20 bg-gradient-to-r from-navy via-blue-900 to-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-golden/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-golden/20 p-4 rounded-full inline-flex mb-8"
          >
            <SafeIcon icon={FiHeart} className="h-12 w-12 text-golden" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-white mb-6 leading-tight"
          >
            Ready to give your child{' '}
            <span className="text-golden">the best start</span>{' '}
            in life?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join our inclusive learning community where every child matters and individual potential is nurtured to become true strength.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center space-x-3 bg-golden text-navy px-8 py-4 rounded-full font-poppins font-semibold text-lg btn-primary hover:bg-yellow-500 transition-all duration-300 min-w-[250px] justify-center"
            >
              <span>Start Enrolment Process</span>
              <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
            </Link>
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-white hover:text-navy transition-all duration-300 min-w-[250px] justify-center"
            >
              <span>Schedule a Visit</span>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <p className="text-golden font-semibold text-lg">Immediate Response</p>
              <p className="text-gray-300 text-sm">We'll contact you within 24 hours</p>
            </div>
            <div className="text-center">
              <p className="text-golden font-semibold text-lg">Free Consultation</p>
              <p className="text-gray-300 text-sm">No obligation assessment visit</p>
            </div>
            <div className="text-center">
              <p className="text-golden font-semibold text-lg">Flexible Start Dates</p>
              <p className="text-gray-300 text-sm">Join us when you're ready</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
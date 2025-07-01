import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiEye } = FiIcons;

const MissionVision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-navy mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-dark-grey max-w-3xl mx-auto">
            Guiding principles that drive our commitment to inclusive education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-warm-beige rounded-2xl p-8 text-center"
          >
            <div className="bg-golden p-4 rounded-full inline-flex mb-6">
              <SafeIcon icon={FiTarget} className="h-8 w-8 text-navy" />
            </div>
            <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
              Our Mission
            </h3>
            <p className="text-dark-grey leading-relaxed">
              To provide exceptional inclusive education that recognises and nurtures each child's unique abilities, ensuring every learner develops the confidence, skills, and strength needed to reach their full potential in a supportive, therapeutic environment.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-navy rounded-2xl p-8 text-center text-white"
          >
            <div className="bg-golden p-4 rounded-full inline-flex mb-6">
              <SafeIcon icon={FiEye} className="h-8 w-8 text-navy" />
            </div>
            <h3 className="text-2xl font-poppins font-bold mb-4">
              Our Vision
            </h3>
            <p className="text-gray-200 leading-relaxed">
              To be Zimbabwe's leading inclusive educational institution, where diversity is celebrated, individual learning needs are met with excellence, and every child becomes a pillar of strength in their community and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
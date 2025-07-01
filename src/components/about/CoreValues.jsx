import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiStar, FiShield, FiBrain, FiSun } = FiIcons;

const CoreValues = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredValue, setHoveredValue] = useState(null);

  const values = [
    {
      icon: FiHeart,
      title: 'Compassion',
      description: 'We approach every child with empathy, understanding, and genuine care for their individual journey.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: FiUsers,
      title: 'Inclusion',
      description: 'We celebrate diversity and ensure every child feels valued, respected, and included in our learning community.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: FiStar,
      title: 'Excellence',
      description: 'We strive for the highest standards in education, therapy, and care, continuously improving our practices.',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: FiShield,
      title: 'Safety',
      description: 'We provide a secure, nurturing environment where children can learn, grow, and express themselves freely.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: FiBrain,
      title: 'Innovation',
      description: 'We embrace creative teaching methods and adaptive technologies to meet each child\'s unique learning needs.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: FiSun,
      title: 'Hope',
      description: 'We believe in every child\'s potential and work tirelessly to help them achieve their dreams and aspirations.',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-navy mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-dark-grey max-w-3xl mx-auto">
            The fundamental principles that guide everything we do at Pillar of Strength
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <motion.div
                  className={`${value.color} p-4 rounded-full inline-flex mb-4`}
                  animate={{
                    scale: hoveredValue === index ? 1.1 : 1,
                    rotate: hoveredValue === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <SafeIcon icon={value.icon} className="h-8 w-8" />
                </motion.div>
                
                <h3 className="text-xl font-poppins font-bold text-navy mb-3 group-hover:text-golden transition-colors duration-300">
                  {value.title}
                </h3>
                
                <motion.p
                  className="text-dark-grey leading-relaxed"
                  animate={{
                    opacity: hoveredValue === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {value.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-navy rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-white text-lg leading-relaxed">
              <span className="text-golden font-semibold">Our promise:</span> These values aren't just words on a wall – they're lived experiences that shape every interaction, every lesson, and every moment your child spends with us. We're committed to creating an environment where these principles come alive every single day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
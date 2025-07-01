import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiClock, FiHeart, FiStar, FiArrowRight } = FiIcons;

const ProgrammesOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programmes = [
    {
      icon: FiSun,
      title: 'Half-Day Programme',
      time: '7:30 AM - 12:00 PM',
      description: 'Perfect for younger learners',
      features: ['Morning snack included', 'Core learning activities', 'Social development'],
      color: 'bg-yellow-50 border-yellow-200',
      iconColor: 'text-yellow-600',
    },
    {
      icon: FiClock,
      title: 'Full-Day Programme',
      time: '7:30 AM - 4:00 PM',
      description: 'Comprehensive care & education',
      features: ['All meals included', 'Rest time', 'Extended learning'],
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
    },
    {
      icon: FiHeart,
      title: 'Therapeutic Services',
      time: 'Flexible scheduling',
      description: 'Specialised therapeutic support',
      features: ['Speech therapy', 'Occupational therapy', 'Aquatic therapy'],
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
    },
    {
      icon: FiStar,
      title: 'Special Support',
      time: 'Integrated daily',
      description: 'Individual Education Plans',
      features: ['Multisensory approaches', 'Adaptive technologies', 'Personal growth'],
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
    },
  ];

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
            Our Programmes
          </h2>
          <p className="text-xl text-dark-grey max-w-3xl mx-auto">
            Tailored educational programmes designed to meet every child's unique needs and developmental stage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programmes.map((programme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${programme.color} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer`}
            >
              <div className="text-center mb-4">
                <div className={`inline-flex p-4 rounded-full ${programme.iconColor} bg-white/50 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={programme.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-navy mb-2">
                  {programme.title}
                </h3>
                <p className="text-sm font-medium text-dark-grey mb-1">
                  {programme.time}
                </p>
                <p className="text-dark-grey">
                  {programme.description}
                </p>
              </div>

              <ul className="space-y-2 mb-6">
                {programme.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-dark-grey">
                    <div className="w-2 h-2 bg-golden rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/programmes"
            className="inline-flex items-center space-x-2 bg-navy text-white px-8 py-4 rounded-full font-poppins font-semibold btn-primary hover:bg-blue-900 transition-all duration-300"
          >
            <span>Learn More About Our Programmes</span>
            <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammesOverview;
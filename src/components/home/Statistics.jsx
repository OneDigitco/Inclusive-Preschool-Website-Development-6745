import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiUserCheck, FiAward, FiCalendar } = FiIcons;

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: FiUsers,
      number: 80,
      label: 'Maximum Capacity',
      description: 'Students we can accommodate',
      suffix: '',
    },
    {
      icon: FiUserCheck,
      number: 7,
      label: 'Teacher-Student Ratio',
      description: '1 teacher per 7 students',
      prefix: '1:',
      suffix: '',
    },
    {
      icon: FiAward,
      number: 6,
      label: 'Qualified Staff Members',
      description: 'Experienced educators',
      suffix: '+',
    },
    {
      icon: FiCalendar,
      number: 3,
      label: 'Years Age Group',
      description: 'Starting from 3 years old',
      suffix: '+',
    },
  ];

  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFC400' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These numbers represent our commitment to providing quality, personalised education for every child
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="bg-golden p-4 rounded-full inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                  <SafeIcon icon={stat.icon} className="h-8 w-8 text-navy" />
                </div>
                
                <div className="mb-4">
                  <div className="text-4xl sm:text-5xl font-poppins font-bold text-golden mb-2">
                    {stat.prefix}
                    {inView && (
                      <CountUp
                        end={stat.number}
                        duration={2}
                        delay={index * 0.1}
                      />
                    )}
                    {stat.suffix}
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-200 leading-relaxed">
              <span className="text-golden font-semibold">Quality over quantity:</span> Our small class sizes ensure that every child receives the individual attention they deserve, while our qualified staff bring years of experience in inclusive education and special needs support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
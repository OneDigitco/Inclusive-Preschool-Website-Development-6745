import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiTarget, FiShield } = FiIcons;

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: FiAward,
      title: 'Expert Special Needs Support',
      description: 'Our qualified special education teachers provide evidence-based therapeutic interventions tailored to each child\'s unique requirements and developmental needs.',
      image: 'https://auth.adpt.co.za/file/psrc/home-1.jpg',
      features: [
        'Qualified special education teachers',
        'Therapeutic interventions',
        'Evidence-based practices'
      ],
    },
    {
      icon: FiTarget,
      title: 'Individualised Education Plans',
      description: 'We create personalised learning experiences that address each child\'s specific needs, strengths, and goals through comprehensive assessment and planning.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1086&q=80',
      features: [
        'Personalised learning plans',
        'Comprehensive assessments',
        'Goal-oriented approach',
        'Regular progress monitoring'
      ],
    },
    {
      icon: FiShield,
      title: 'Safe & Inclusive Environment',
      description: 'Our secure facilities provide a nurturing space where children with special needs feel valued, supported, and empowered to reach their full potential.',
      image: 'https://auth.adpt.co.za/file/psrc/home-4.jpg',
      features: [
        'Secure, accessible facilities',
        'Supportive environment',
        'Celebrating uniqueness',
        'Building confidence'
      ],
    },
  ];

  return (
    <section className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-navy mb-4">
            Why Choose Pillar of Strength?
          </h2>
          <p className="text-xl text-dark-grey max-w-3xl mx-auto">
            Discover what makes our specialised education approach uniquely effective for children with special needs
          </p>
        </motion.div>

        <div className="space-y-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Text Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-golden p-4 rounded-full">
                    <SafeIcon icon={reason.icon} className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-navy">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-dark-grey text-lg leading-relaxed mb-6">
                  {reason.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {reason.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      <span className="text-dark-grey font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
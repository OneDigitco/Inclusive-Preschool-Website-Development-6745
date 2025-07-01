import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiHeart, FiBrain } = FiIcons;

const OurTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamHighlights = [
    {
      icon: FiAward,
      title: 'Qualified Educators',
      description: 'Our teachers hold specialized degrees in special education and therapeutic interventions',
      stats: '100% Certified',
    },
    {
      icon: FiHeart,
      title: 'Passionate Caregivers',
      description: 'Every team member is dedicated to creating a supportive environment where children with special needs thrive',
      stats: '6+ Staff Members',
    },
    {
      icon: FiBrain,
      title: 'Continuous Learning',
      description: 'We invest in ongoing professional development in special needs education and therapeutic practices',
      stats: 'Regular Training',
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
            Our Dedicated Team
          </h2>
          <p className="text-xl text-dark-grey max-w-3xl mx-auto">
            Meet the passionate special education professionals who make the difference in every child's life
          </p>
        </motion.div>

        {/* Team Image - UPDATED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://auth.adpt.co.za/file/psrc/about-2.jpg"
              alt="Dedicated team of special education professionals working together"
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-poppins font-bold mb-2">
                United in Our Mission
              </h3>
              <p className="text-gray-200">
                Every member of our team brings specialized skills and unwavering dedication to supporting children with special needs
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="text-center bg-warm-beige rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-golden p-4 rounded-full inline-flex mb-6">
                <SafeIcon icon={highlight.icon} className="h-8 w-8 text-navy" />
              </div>
              <div className="mb-4">
                <p className="text-2xl font-poppins font-bold text-golden mb-2">
                  {highlight.stats}
                </p>
                <h3 className="text-xl font-poppins font-bold text-navy mb-3">
                  {highlight.title}
                </h3>
                <p className="text-dark-grey leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-navy rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold text-golden mb-4">
              Our Team Philosophy
            </h3>
            <p className="text-white text-lg leading-relaxed">
              We believe that the best learning happens when children with special needs feel safe, valued, and understood. Our team combines professional expertise in special education with genuine care, creating an environment where every child can flourish. We're not just educators – we're advocates for your child's journey toward independence and success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
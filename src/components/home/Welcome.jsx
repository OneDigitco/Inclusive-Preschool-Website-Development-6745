import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiUsers, FiHeart, FiBrain, FiShield } = FiIcons;

const Welcome = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    { icon: FiUsers, text: 'Small class sizes (1:7 ratio)' },
    { icon: FiHeart, text: 'Specialised therapeutic services' },
    { icon: FiBrain, text: 'Individualised education plans' },
    { icon: FiShield, text: 'Inclusive, diverse environment' },
  ];

  return (
    <section className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-navy mb-6">
              Welcome to Pillar of Strength Resource Centre
            </h2>
            <div className="space-y-4 text-dark-grey leading-relaxed mb-8">
              <p>
                At Pillar of Strength, we provide specialised education and therapeutic support for children with special needs. Located in Greenhill, Bulawayo, our centre offers a nurturing environment where every child can thrive and reach their full potential.
              </p>
              <p>
                Our experienced team combines academic excellence with therapeutic interventions, creating individualised education plans that celebrate each child's unique abilities and support their developmental journey.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                >
                  <div className="bg-golden/20 p-2 rounded-full">
                    <SafeIcon icon={feature.icon} className="h-5 w-5 text-navy" />
                  </div>
                  <span className="text-dark-grey font-medium text-sm">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image - UPDATED WITH NEW IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Children with special needs learning in supportive classroom environment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-medium-grey"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-success-green p-3 rounded-full">
                  <SafeIcon icon={FiCheck} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-poppins font-semibold text-navy">
                    Certified Excellence
                  </p>
                  <p className="text-dark-grey text-sm">
                    Qualified special education teachers
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
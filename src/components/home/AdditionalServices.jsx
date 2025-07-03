import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDroplet, FiHeart, FiCoffee } = FiIcons;

const AdditionalServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FiDroplet,
      title: 'Aquatic Therapy',
      description: 'Water-based therapeutic interventions that improve motor skills, sensory processing, and emotional regulation in a safe, supportive aquatic environment.',
      features: [
        'Sensory integration',
        'Motor skill development',
        'Relaxation & confidence building',
        'Individual & group sessions'
      ],
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: FiHeart,
      title: 'Equine-Assisted Therapy',
      description: 'Therapeutic interactions with horses that promote emotional growth, social skills, and physical development through structured activities.',
      features: [
        'Emotional regulation',
        'Social skill development',
        'Physical coordination',
        'Confidence building'
      ],
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80'
    },
    {
      icon: FiCoffee,
      title: 'Culinary Therapy',
      description: 'Hands-on cooking experiences that develop life skills, sensory awareness, and independence while building confidence through creative expression.',
      features: [
        'Life skills development',
        'Sensory exploration',
        'Independence building',
        'Creative expression'
      ],
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
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
            Additional Services
          </h2>
          <p className="text-xl text-dark-grey max-w-3xl mx-auto">
            Specialized therapeutic services that complement our educational programmes and support holistic development
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
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
                  <div className={`${service.color.replace('bg-', 'bg-').replace('border-', '')} p-4 rounded-full`}>
                    <SafeIcon icon={service.icon} className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-navy">
                    {service.title}
                  </h3>
                </div>
                <p className="text-dark-grey text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
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
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-navy rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold text-golden mb-4">
              Interested in Our Additional Services?
            </h3>
            <p className="text-white text-lg leading-relaxed mb-6">
              These specialized therapeutic services are designed to complement your child's educational journey. 
              Contact us to learn more about how these services can benefit your child's development.
            </p>
            <a
              href="/contact#contact-form"
              className="inline-flex items-center space-x-2 bg-golden text-navy px-8 py-4 rounded-full font-poppins font-semibold btn-primary hover:bg-yellow-500 transition-all duration-300"
            >
              <span>Learn More About Services</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalServices;
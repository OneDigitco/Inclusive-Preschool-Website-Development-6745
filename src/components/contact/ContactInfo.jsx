import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiMapPin, FiPhone, FiMail, FiClock, FiMessageCircle} = FiIcons;

const ContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: FiMapPin,
      title: 'Visit Us',
      details: ['78 Matopos Road, Greenhill, Bulawayo'],
      action: 'Get Directions',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      details: ['+263 781 490 181'],
      action: 'Call Now',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: FiMail,
      title: 'Email Us',
      details: ['info@pillarofstrength.net'],
      action: 'Send Email',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: FiMessageCircle,
      title: 'WhatsApp',
      details: ['+263 781 490 181'],
      action: 'Chat Now',
      color: 'bg-green-100 text-green-600',
    },
  ];

  const operatingHours = [
    {
      day: 'Monday - Friday',
      hours: '7:30 AM - 4:00 PM'
    },
    {
      day: 'Half-Day Programme',
      hours: '7:30 AM - 12:00 PM'
    },
    {
      day: 'Saturday - Sunday',
      hours: 'Closed'
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
            Get in Touch
          </h2>
          <p className="text-xl text-dark-grey max-w-3xl mx-auto">
            We're here to answer your questions and help you take the next step in your child's educational journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className={`${method.color} p-3 rounded-full inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <SafeIcon icon={method.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-navy mb-2">
                    {method.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {method.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-dark-grey">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <button className="text-golden font-semibold hover:text-yellow-600 transition-colors duration-200">
                    {method.action} →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Operating Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-navy rounded-2xl p-8 text-white"
          >
            <div className="bg-golden p-3 rounded-full inline-flex mb-6">
              <SafeIcon icon={FiClock} className="h-6 w-6 text-navy" />
            </div>
            <h3 className="text-xl font-poppins font-bold mb-6">
              Operating Hours
            </h3>
            <div className="space-y-4">
              {operatingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-600 last:border-b-0">
                  <span className="text-gray-200">{schedule.day}</span>
                  <span className="text-golden font-semibold">{schedule.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-gray-200">
                <strong className="text-golden">Note:</strong> We're available for emergency consultations outside regular hours by appointment.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-golden rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
            Emergency Contact
          </h3>
          <p className="text-navy mb-4">
            For urgent matters outside operating hours, please contact us immediately
          </p>
          <a
            href="tel:+263781490181"
            className="inline-flex items-center space-x-2 bg-navy text-white px-6 py-3 rounded-full font-semibold btn-primary hover:bg-blue-900 transition-all duration-300"
          >
            <SafeIcon icon={FiPhone} className="h-5 w-5" />
            <span>+263 781 490 181</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
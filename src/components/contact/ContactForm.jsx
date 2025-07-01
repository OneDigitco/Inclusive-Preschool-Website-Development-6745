import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import supabase from '../../lib/supabase';
import { sendContactEmail } from '../../lib/emailService';

const { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare } = FiIcons;

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiry_type: 'general',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Send email notification
      const emailResult = await sendContactEmail(formData);
      
      if (!emailResult.success) {
        throw new Error('Failed to send email notification');
      }

      // Try to save to Supabase (optional - for backup)
      try {
        await supabase
          .from('contact_inquiries_pillar2025')
          .insert([{
            ...formData,
            created_at: new Date().toISOString()
          }]);
      } catch (dbError) {
        console.log('Database save failed (non-critical):', dbError);
      }

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiry_type: 'general',
      });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ve received your inquiry and will respond within 24 hours.'
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or call us directly at +263 781 490 181.'
      });
    }

    setIsSubmitting(false);
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'enrolment', label: 'Enrolment Information' },
    { value: 'tour', label: 'Schedule a Tour' },
    { value: 'programmes', label: 'Programme Details' },
    { value: 'support', label: 'Special Needs Support' },
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
            Send Us a Message
          </h2>
          <p className="text-xl text-dark-grey max-w-3xl mx-auto">
            Have questions about our special needs programmes or want to schedule a visit? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-warm-beige rounded-2xl p-8 shadow-lg"
          >
            {/* Status Message */}
            {submitStatus.message && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-navy font-semibold mb-2">
                  <SafeIcon icon={FiUser} className="inline h-4 w-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-medium-grey focus:border-golden focus:outline-none transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-navy font-semibold mb-2">
                  <SafeIcon icon={FiMail} className="inline h-4 w-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-medium-grey focus:border-golden focus:outline-none transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-navy font-semibold mb-2">
                  <SafeIcon icon={FiPhone} className="inline h-4 w-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-medium-grey focus:border-golden focus:outline-none transition-colors duration-200"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiry_type" className="block text-navy font-semibold mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  value={formData.inquiry_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-medium-grey focus:border-golden focus:outline-none transition-colors duration-200"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-navy font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-medium-grey focus:border-golden focus:outline-none transition-colors duration-200"
                placeholder="What is your message about?"
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-navy font-semibold mb-2">
                <SafeIcon icon={FiMessageSquare} className="inline h-4 w-4 mr-2" />
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-medium-grey focus:border-golden focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Please share your questions or tell us how we can help..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`inline-flex items-center space-x-3 px-8 py-4 rounded-full font-poppins font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-golden text-navy btn-primary hover:bg-yellow-500'
                }`}
              >
                <SafeIcon icon={FiSend} className={`h-5 w-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </motion.button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-dark-grey text-sm">
                We typically respond within 24 hours. For urgent matters, please call us directly at{' '}
                <a href="tel:+263781490181" className="text-golden font-semibold hover:underline">
                  +263 781 490 181
                </a>
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
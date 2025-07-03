import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { sendNewsletterEmail } from '../../lib/emailService';

const { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter } = FiIcons;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const result = await sendNewsletterEmail(email);
      if (result.success) {
        setEmail('');
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for subscribing! We\'ll keep you updated with our latest news.'
        });
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error. Please try again later.'
      });
    }

    setIsSubmitting(false);

    // Clear status message after 5 seconds
    setTimeout(() => {
      setSubmitStatus({ type: '', message: '' });
    }, 5000);
  };

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Programmes', href: '/programmes' },
    { name: 'Enrolment', href: '/enrolment' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751288779360-logo-600-trns.png"
                alt="Pillar of Strength Resource Centre"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-poppins font-bold">
                  Pillar of Strength
                </h3>
                <p className="text-sm text-gray-300">Resource Centre</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Where every child's potential becomes their strength. Providing inclusive, specialised education in Bulawayo.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-golden transition-colors duration-200"
                aria-label="Facebook"
              >
                <SafeIcon icon={FiFacebook} className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-golden transition-colors duration-200"
                aria-label="Instagram"
              >
                <SafeIcon icon={FiInstagram} className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-golden transition-colors duration-200"
                aria-label="Twitter"
              >
                <SafeIcon icon={FiTwitter} className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-golden transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  78 Matopos Road, Greenhill, Bulawayo
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="h-5 w-5 text-golden" />
                <a
                  href="tel:+263781490181"
                  className="text-gray-300 hover:text-golden transition-colors duration-200 text-sm"
                >
                  +263 781 490 181
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="h-5 w-5 text-golden" />
                <a
                  href="mailto:info@pillarofstrength.net"
                  className="text-gray-300 hover:text-golden transition-colors duration-200 text-sm"
                >
                  info@pillarofstrength.net
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Operating Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiClock} className="h-5 w-5 text-golden flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-golden">Full-day Programme</p>
                  <p>Mon-Thu: 7:30 AM - 4:00 PM</p>
                  <p>Fri: 7:30 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="text-gray-300 text-sm ml-8">
                <p className="font-medium text-golden">Half-day Programme</p>
                <p>Mon-Fri: 7:30 AM - 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-lg font-poppins font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest news and events
            </p>

            {/* Status Message */}
            {submitStatus.message && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:border-golden focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="bg-golden text-navy px-6 py-2 rounded-lg font-semibold btn-primary hover:bg-yellow-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 sm:mb-0">
            <p>&copy; 2025 Pillar of Strength Resource Centre. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-golden transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-golden transition-colors duration-200">
              Terms of Service
            </a>
            <a 
              href="https://www.primehost.co.za/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-golden transition-colors duration-200"
            >
              Website by Primehost
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiChevronDown } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programmes', href: '/programmes' },
    { name: 'Enrolment', href: '/enrolment' },
    { name: 'Our Facilities', href: '/facilities' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Contact Us', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751288779360-logo-600-trns.png"
              alt="Pillar of Strength Resource Centre"
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-poppins font-bold text-navy">
                Pillar of Strength
              </h1>
              <p className="text-xs text-dark-grey -mt-1">Resource Centre</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'bg-golden text-navy font-semibold'
                    : 'text-dark-grey hover:text-navy hover:bg-light-grey'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - UPDATED */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact#contact-form"
              className="bg-golden text-navy px-6 py-2 rounded-full font-semibold text-sm btn-primary hover:bg-yellow-500 transition-all duration-300"
            >
              Book a Tour
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-dark-grey hover:text-navy hover:bg-light-grey transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-medium-grey"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-golden text-navy font-semibold'
                      : 'text-dark-grey hover:text-navy hover:bg-light-grey'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact#contact-form"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full mt-4 bg-golden text-navy px-6 py-3 rounded-full font-semibold text-center btn-primary hover:bg-yellow-500 transition-all duration-300"
              >
                Book a Tour
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
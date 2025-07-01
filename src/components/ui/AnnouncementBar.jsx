import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiStar } = FiIcons;

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-golden text-navy py-2 px-4 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 flex-1 justify-center">
            <SafeIcon icon={FiStar} className="h-4 w-4 text-navy" />
            <p className="text-sm font-medium">
              🎉 Enrolment for 2025 Now Open! Limited spaces available - Book your tour today!
            </p>
            <SafeIcon icon={FiStar} className="h-4 w-4 text-navy" />
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 hover:bg-yellow-500 rounded-full transition-colors duration-200"
            aria-label="Close announcement"
          >
            <SafeIcon icon={FiX} className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnnouncementBar;
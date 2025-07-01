import React from 'react';
import PageHero from '../components/common/PageHero';

const Programmes = () => {
  return (
    <div>
      <PageHero
        title="Our Programmes"
        subtitle="Tailored Learning Experiences"
        description="Discover our comprehensive range of educational programmes designed to meet every child's unique needs and developmental stage."
        backgroundImage="https://auth.adpt.co.za/file/psrc/programmes-background.jpg"
      />
      <div className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-poppins font-bold text-navy mb-6">
            Programmes Content Coming Soon
          </h2>
          <p className="text-dark-grey">
            Detailed programme information will be available here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
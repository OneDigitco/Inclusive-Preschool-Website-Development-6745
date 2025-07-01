import React from 'react';
import PageHero from '../components/common/PageHero';

const Facilities = () => {
  return (
    <div>
      <PageHero
        title="Our Facilities"
        subtitle="Modern Learning Environments"
        description="Explore our state-of-the-art facilities designed to provide safe, inclusive, and stimulating learning environments."
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1486&q=80"
      />
      <div className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-poppins font-bold text-navy mb-6">
            Facilities Information Coming Soon
          </h2>
          <p className="text-dark-grey">
            Detailed facilities information and virtual tour will be available here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
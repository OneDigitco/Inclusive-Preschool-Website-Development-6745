import React from 'react';
import PageHero from '../components/common/PageHero';

const SuccessStories = () => {
  return (
    <div>
      <PageHero
        title="Success Stories"
        subtitle="Celebrating Achievement"
        description="Read inspiring stories from families and discover the positive impact of inclusive education on our students' lives."
        backgroundImage="https://auth.adpt.co.za/file/psrc/success-stories.jpg"
      />
      <div className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-poppins font-bold text-navy mb-6">
            Success Stories Coming Soon
          </h2>
          <p className="text-dark-grey">
            Inspiring testimonials and success stories will be featured here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
import React from 'react';
import PageHero from '../components/common/PageHero';

const Enrolment = () => {
  return (
    <div>
      <PageHero
        title="Enrolment"
        subtitle="Join Our Learning Community"
        description="Start your child's journey with us. Learn about our enrolment process, requirements, and how to secure your child's place."
        backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />
      <div className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-poppins font-bold text-navy mb-6">
            Enrolment Information Coming Soon
          </h2>
          <p className="text-dark-grey">
            Detailed enrolment process and requirements will be available here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enrolment;
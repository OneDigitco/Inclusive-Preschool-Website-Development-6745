import React from 'react';
import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import ProgrammesOverview from '../components/home/ProgrammesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Statistics from '../components/home/Statistics';
import CTABanner from '../components/home/CTABanner';

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <ProgrammesOverview />
      <WhyChooseUs />
      <Statistics />
      <CTABanner />
    </div>
  );
};

export default Home;
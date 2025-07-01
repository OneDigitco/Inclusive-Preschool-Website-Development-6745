import React from 'react';
import PageHero from '../components/common/PageHero';
import OurStory from '../components/about/OurStory';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import OurTeam from '../components/about/OurTeam';

const About = () => {
  return (
    <div>
      <PageHero
        title="About Us"
        subtitle="Building Pillars of Strength Since Our Foundation"
        description="Learn about our journey, mission, and the dedicated team that makes Pillar of Strength Resource Centre a beacon of inclusive education."
        backgroundImage="https://auth.adpt.co.za/file/psrc/hero-background.jpg"
      />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <OurTeam />
    </div>
  );
};

export default About;
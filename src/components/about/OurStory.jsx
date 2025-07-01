import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-navy mb-6">
              Building Pillars of Strength Since Our Foundation
            </h2>
            <div className="space-y-6 text-dark-grey leading-relaxed">
              <p>
                Pillar of Strength Resource Centre was established with a mission to provide specialised education and support for children with special needs in Bulawayo. Located in Greenhill, our centre has become a beacon of hope for families seeking comprehensive, individualised care for their children.
              </p>
              <p>
                Our centre stands as a testament to the belief that every child, regardless of their challenges, deserves quality education and the opportunity to reach their full potential. We combine therapeutic interventions with academic learning to create a holistic approach to special needs education.
              </p>
              <p>
                What began as a vision to serve our community has evolved into a thriving educational institution that provides evidence-based practices, qualified special education teachers, and a nurturing environment where children aged 3+ can discover their abilities and build confidence for life.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://auth.adpt.co.za/file/psrc/about-1.jpeg"
                alt="Modern special needs education facility exterior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
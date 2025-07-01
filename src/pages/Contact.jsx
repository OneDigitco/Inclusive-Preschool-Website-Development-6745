import React from 'react';
import PageHero from '../components/common/PageHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Get in Touch"
        description="Ready to learn more? Contact us today to schedule a visit or ask any questions about our programmes."
        backgroundImage="https://auth.adpt.co.za/file/psrc/contact-us.jpg"
      />
      <ContactInfo />
      <div id="contact-form">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
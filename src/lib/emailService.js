import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_PillarOS';
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_contact_form';
const EMAILJS_TEMPLATE_ID_NEWSLETTER = 'template_newsletter';
const EMAILJS_PUBLIC_KEY = 'fSy4yJjy60z2tXiuB';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      subject: formData.subject,
      message: formData.message,
      inquiry_type: formData.inquiry_type,
      to_email: 'info@pillarofstrength.net',
      reply_to: formData.email,
      submission_date: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    return { success: true, data: response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

export const sendNewsletterEmail = async (email) => {
  try {
    const templateParams = {
      subscriber_email: email,
      to_email: 'info@pillarofstrength.net',
      subscription_date: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_NEWSLETTER,
      templateParams
    );

    return { success: true, data: response };
  } catch (error) {
    console.error('Newsletter subscription failed:', error);
    return { success: false, error: error.message };
  }
};
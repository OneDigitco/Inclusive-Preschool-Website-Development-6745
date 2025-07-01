# Email Setup Instructions for Pillar of Strength Website

## Overview
This website uses EmailJS to send emails directly from the frontend to info@pillarofstrength.net when visitors:
1. Fill out the contact form
2. Subscribe to the newsletter

## Setup Required

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Configure with your email credentials for info@pillarofstrength.net
5. Note the Service ID (should be something like `service_pillar_strength`)

### 3. Create Email Templates

#### Contact Form Template
1. Go to "Email Templates" → "Create New Template"
2. Template ID: `template_contact_form`
3. Subject: `New Contact Form Submission - {{subject}}`
4. Content:
```
New contact form submission from Pillar of Strength website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Inquiry Type: {{inquiry_type}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from: Pillar of Strength Website
Reply to: {{reply_to}}
Date: {{submission_date}}
```

#### Newsletter Subscription Template
1. Create another template
2. Template ID: `template_newsletter`
3. Subject: `New Newsletter Subscription`
4. Content:
```
New newsletter subscription:

Email: {{subscriber_email}}
Subscription Date: {{subscription_date}}

---
Sent from: Pillar of Strength Website
```

### 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your Public Key
3. Replace `YOUR_EMAILJS_PUBLIC_KEY` in `src/lib/emailService.js`

### 5. Update Configuration
Open `src/lib/emailService.js` and update:
- `EMAILJS_SERVICE_ID`: Your service ID
- `EMAILJS_TEMPLATE_ID_CONTACT`: `template_contact_form`
- `EMAILJS_TEMPLATE_ID_NEWSLETTER`: `template_newsletter`
- `EMAILJS_PUBLIC_KEY`: Your public key from step 4

### 6. Test the Setup
1. Run the development server: `npm run dev`
2. Fill out the contact form on the Contact page
3. Subscribe to newsletter in the footer
4. Check info@pillarofstrength.net for emails

## Features Implemented

### Contact Form
- Sends detailed email with all form fields
- Includes inquiry type categorization
- Shows success/error messages
- Fallback error handling
- Still saves to Supabase as backup

### Newsletter Subscription
- Simple email capture
- Sends notification to admin email
- Success/error feedback
- Auto-clears form on success

## Security Notes
- EmailJS public key is safe to expose in frontend
- All emails go directly to info@pillarofstrength.net
- No sensitive data is stored in the frontend
- Rate limiting handled by EmailJS

## Troubleshooting
- Check EmailJS dashboard for delivery status
- Verify email templates are published
- Ensure service is connected and active
- Check browser console for JavaScript errors

## Upgrade Options
- Free plan: 200 emails/month
- Personal plan: $15/month for 1,000 emails
- Team plan: $50/month for 5,000 emails
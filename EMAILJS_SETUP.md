# EmailJS Setup Guide

To enable the contact form to send emails, you need to set up EmailJS:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** `{{subject}}`

**Content:**
```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

{{message}}

---
Reply to: {{reply_to}}
```

4. Note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Update Contact Component
Replace the placeholder values in `components/Contact.tsx`:

```typescript
const serviceId = 'YOUR_SERVICE_ID' // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID' // Replace with your actual template ID  
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your actual public key
```

## 6. Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email (gargi.p.sukhatankar@gmail.com) for the message

## Email Format
The email will be sent to `gargi.p.sukhatankar@gmail.com` with:
- **Subject:** User's input subject
- **Body:** 
  - First line: User's name
  - Rest: User's message
  - Reply-to: User's email address

## Troubleshooting
- Make sure all three IDs are correctly replaced
- Check browser console for any error messages
- Verify your EmailJS service is active
- Ensure the template variables match the ones in the code

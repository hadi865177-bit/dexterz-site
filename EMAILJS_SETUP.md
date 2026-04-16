# EmailJS Setup Guide for Career Application Form

## Overview

The career application form is now integrated with EmailJS to send job applications directly to your email. When a user submits an application, it will send an email with their details and job position.

## Setup Steps

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

### 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

### 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Job Application - {{job_position}} Hello {{to_name}}, A new job application has been
received: **Applicant Details:** - Name: {{from_name}} - Email: {{from_email}} - Position:
{{job_position}} **Message:** {{message}} Best regards, EmailJS
```

4. Note down your **Template ID**

### 4. Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "your_actual_service_id_here",
  TEMPLATE_ID: "your_actual_template_id_here",
  PUBLIC_KEY: "your_actual_public_key_here",
};
```

## How It Works

1. **User fills out the form** with:

   - Full Name
   - Email Address
   - Job Position (auto-filled)
   - CV/Resume file

2. **Form submission triggers EmailJS** to send an email with:

   - Applicant's name and email
   - Job position they're applying for
   - Custom message

3. **Email is sent to your configured email address** with all the application details

## File Upload Note

Currently, the CV file is collected but not attached to the email (EmailJS free tier limitation). To handle file attachments, you would need:

- EmailJS paid plan, OR
- Custom backend server, OR
- File upload to cloud storage (Google Drive, Dropbox, etc.)

## Testing

1. Fill out the application form
2. Submit the form
3. Check your email for the application
4. Check browser console for success/error logs

## Troubleshooting

- Ensure all EmailJS credentials are correct
- Check browser console for error messages
- Verify EmailJS service is active
- Check email spam folder

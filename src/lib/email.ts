// Email Service for Magic Link Authentication

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
})

export async function sendMagicLinkEmail(email: string, url: string): Promise<void> {
  const emailTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign in to Tender Automator</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .button { display: inline-block; background: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 Tender Automator</h1>
    </div>
    <div class="content">
      <h2>Sign in to your account</h2>
      <p>Click the button below to sign in to Tender Automator. This link will expire in 24 hours.</p>

      <a href="${url}" class="button">Sign In to Tender Automator</a>

      <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
      <p style="background: #e5e7eb; padding: 10px; border-radius: 4px; word-break: break-all; font-family: monospace;">
        ${url}
      </p>

      <div class="footer">
        <p>This email was sent to ${email}. If you didn't request this sign-in link, you can safely ignore this email.</p>
        <p>© 2024 Tender Automator. Secure tender processing system.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Sign in to Tender Automator',
    html: emailTemplate,
    text: `Sign in to Tender Automator\n\nClick this link to sign in: ${url}\n\nThis link will expire in 24 hours. If you didn't request this, you can safely ignore this email.`,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log(`Magic link email sent to ${email}`)
  } catch (error) {
    console.error('Failed to send email:', error)
    throw error
  }
}
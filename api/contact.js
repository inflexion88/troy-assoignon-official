// Vercel Serverless Function for Contact Form
// Sends emails using Resend API

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get form data from request body
    const { name, email, company, challenge } = req.body;

    // Validate required fields
    if (!name || !email || !company || !challenge) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'company', 'challenge']
      });
    }

    // Get Resend API key from environment variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return res.status(500).json({
        error: 'Email service not configured',
        message: 'Please add RESEND_API_KEY to Vercel environment variables'
      });
    }

    // Send email using Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>', // Update this after domain verification
        to: 'positioningiq@gmail.com', // Your email
        subject: 'New positioning consultation inquiry',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Challenge/Need:</strong></p>
          <p>${challenge.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Submitted from troyassoignon.com contact form</small></p>
        `
      })
    });

    const emailData = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error('Resend API error:', emailData);
      return res.status(500).json({
        error: 'Failed to send email',
        details: emailData
      });
    }

    // Optional: Send auto-response to user
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'Troy Assoignon <onboarding@resend.dev>', // Update this after domain verification
          to: email,
          subject: 'Thank you for reaching out!',
          html: `
            <h2>Thank You, ${name}!</h2>
            <p>I've received your inquiry and will get back to you within 24 hours to discuss your positioning challenge.</p>
            <p>In the meantime, feel free to check out some of our insights at <a href="https://troyassoignon.com">troyassoignon.com</a>.</p>
            <p>Best regards,<br>Troy Assoignon</p>
          `
        })
      });
    } catch (autoResponseError) {
      console.error('Auto-response failed:', autoResponseError);
      // Don't fail the whole request if auto-response fails
    }

    // Success!
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      id: emailData.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}

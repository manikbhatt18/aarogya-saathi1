import nodemailer from "nodemailer";

export const sendContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    const mailOptions = {
      from: `"Aarogya Saathi Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL,
      subject: "📩 New Contact Form Submission",
     html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
    <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #14b8a6;">
      <h1 style="color: #14b8a6;">Aarogya Saathi</h1>
      <h3 style="margin-top: 10px; color: #2563eb;">New Contact Form Submission</h3>
    </div>

    <div style="margin-top: 20px;">
      <p style="font-size: 16px;">👋 <strong>Hey Team,</strong></p>
      <p style="font-size: 15px; line-height: 1.6;">
        You’ve received a new message from the <strong>Contact Us</strong> form on the Aarogya Saathi website.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 150px;">First Name:</td>
          <td style="padding: 8px; background: #f1f5f9;">${firstName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Last Name:</td>
          <td style="padding: 8px; background: #f1f5f9;">${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Email:</td>
          <td style="padding: 8px; background: #f1f5f9;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td>
          <td style="padding: 8px; background: #f1f5f9;">${message}</td>
        </tr>
      </table>

      <p style="margin-top: 30px; font-size: 15px; line-height: 1.6;">
        🩺 <strong>Thanks for reaching out!</strong> Our support team will review your message and get back to you soon.
      </p>

      <p style="margin-top: 10px; font-size: 15px;">
        You can also reach us faster via WhatsApp at <strong style="color: #14b8a6;">+1 (555) 646-8562</strong>.
      </p>

      <p style="margin-top: 20px; color: #555; font-size: 13px;">
        — The Aarogya Saathi Support Team 💚
      </p>
    </div>
  </div>
`,

    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};

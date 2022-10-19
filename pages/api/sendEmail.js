require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  let { html, subject } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.carbooking.me',
    port: 587,
    secure: false,
    ignoreTLS: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  const mailOption = {
    from: ` "Car Booking Montenegro" <${process.env.NEXT_PUBLIC_EMAIL}>`,
    to: `stevanzecevic3@gmail.com`,
    subject,
    html,
  };

  const result = await transporter.sendMail(mailOption);

  console.log(result);

  return res.json({ status: 'success' });
};

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function contactForm(req: NextApiRequest, res: NextApiResponse) {
  const { fullName, email, subject, message } = req.body;
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_USER,
      pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: `${fullName} <${email}>`,
      to: process.env.NEXT_PUBLIC_GMAIL_USER,
      subject: `${subject}`,
      text: `${message}`,
      html: `<p>${message}</p>`,
    });
    console.log('Your email was sent successfully', emailRes.messageId);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(req.body);
}

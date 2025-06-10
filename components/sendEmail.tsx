"use server";

import nodemailer from "nodemailer";

const { EMAIL_USER, EMAIL_PASS } = process.env;

export async function sendEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: EMAIL_USER,
    subject: "New Message from Portfolio Contact Form",
    text: `
    You received a new message from your portfolio contact form:

    Name: ${name}
    Email: ${email}
    Message: ${message.trim()}
    `,
  });
}

import nodemailer from "nodemailer";
import {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASSWORD,
  MAIL_ENCRYPTION,
} from "../config/config.js";

const EmailSender = async (EmailTo, EmailText, EmailSubject, EmailHTMLBody) => {
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: true,
    auth: { user: EMAIL_USER, pass: EMAIL_PASSWORD },
    tls: { rejectUnauthorized: false },
  });
  const mailOptions = {
    from: EMAIL_USER,
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
    html: EmailHTMLBody,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    return true;
  } catch (err) {
    console.error(err);
  }
};

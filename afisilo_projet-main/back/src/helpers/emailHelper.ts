import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { compileTemplate } from './templateHelper';
import { IUser } from '../models/User';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
    },
    tls: {
        rejectUnauthorized: false
      }
});

export const sendEmail = async (to: string, subject: string, bodyContent: string) => {
    const htmlContent = compileTemplate('emailTemplate', { subject, body: bodyContent });


    const mailOptions = {
        from: process.env.SMTP_USER,
        to,
        subject,
        html: htmlContent,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error(`Error sending email to ${to}:`, error);
        // throw new Error(`Error sending email to ${to}`);
    }
};

import { NextResponse } from "next/server";
import connection from "@/lib/db.js";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";

// Middleware for Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Max 10 requests per window
  message: { success: false, error: "Too many requests, please try later." },
});

// Connect to Database
connection();

// Define Schema & Model
const emailSchema = new mongoose.Schema({
  to: String,
  subject: String,
  message: String,
  name: String,
  email: String,
});

const Email = mongoose.models.Email || mongoose.model("Email", emailSchema);

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Use named export for POST method
export async function POST(req: Request) {
  try {
    console.log("Inside POST request");
    
    const body = await req.json();
    const { message, subject, email, name } = body;
    const to = process.env.EMAIL_USER;

    if (!name || !email || !message || !subject) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 });
    }

    // Save email data to MongoDB
    const emailEntry = new Email({ to, subject, message, name, email });
    await emailEntry.save();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: `From: ${name}, Message: ${message}, Email: ${email}`,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <p>Best regards,<br/>Your Company</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

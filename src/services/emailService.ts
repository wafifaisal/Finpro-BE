import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `<${process.env.MAIL_USER}> dari Nginepin`,
      to,
      subject,
      html,
    });

    console.log(`✅ Email sent successfully to ${to}: ${info.messageId}`);
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
};

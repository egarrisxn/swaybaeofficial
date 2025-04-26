import nodemailer from "nodemailer";
import { parse } from "querystring";

export async function POST(request) {
  try {
    const data = await request.text();
    const formData = parse(data);

    const name = formData.name;
    const email = formData.email;
    const subject = formData.subject;
    const message = formData.message;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mail = transporter.sendMail({
      from: name,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `From Your Website - ${name}: ${subject}`,
      html: `
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    console.log("Message sent:", mail.messageId);

    return new Response(
      JSON.stringify({ message: "Success: email was sent" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "COULD NOT SEND MESSAGE" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

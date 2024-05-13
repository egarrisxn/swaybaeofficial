import {NextResponse, NextRequest} from 'next/server'
const nodemailer = require('nodemailer')

export async function POST(request) {
  const User = process.env.EMAIL_USER
  const Pass = process.env.EMAIL_PASS
  const Me = process.env.EMAIL_ME

  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const message = formData.get('message')

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: User,
      pass: Pass,
    },
  })

  try {
    const mail = await transporter.sendMail({
      from: name,
      to: Me,
      replyTo: email,
      subject: `From Your Website - ${name}: ${subject}`,
      html: `
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    })

    console.log('Message sent:', mail.messageId)

    return NextResponse.json({message: 'Success: email was sent'})
  } catch (error) {
    console.log(error)
    NextResponse.status(500).json({message: 'COULD NOT SEND MESSAGE'})
  }
}

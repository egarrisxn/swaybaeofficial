import {NextResponse, NextRequest} from 'next/server'
import nodemailer from 'nodemailer'

const email_user = process.env.NODEMAILER_USER
const email_password = process.env.NODEMAILER_PASSWORD

export async function POST(request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const message = formData.get('message')

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: email_user,
      pass: email_password,
    },
  })

  try {
    const mail = await transporter.sendMail({
      from: email_user,
      to: email_user,
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

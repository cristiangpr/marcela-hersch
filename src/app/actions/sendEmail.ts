'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const email = formData.get('email') as string
  const nombre = formData.get('nombre') as string
  const asunto = formData.get('asunto') as string
  const mensaje = formData.get('mensaje') as string

  try {
    await resend.emails.send({
      from: 'noreply@yourdomain.com', // Use a verified domain or a free Resend address
      to: email,
      subject: asunto,
      text: `Name: ${nombre}\nEmail: ${email}\nMessage: ${mensaje}`
    })

    return { success: true, message: 'Email sent!' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to send email.' }
  }
}

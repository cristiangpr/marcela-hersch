/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Snackbar,
  Alert
} from '@mui/material'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [status, setStatus] = useState<string | null>(null)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [messageType, setMessageType] = useState<'success' | 'error'>('success')

  async function sendEmail(formData: FormData) {
    const email = formData.get('email') as string
    const nombre = formData.get('nombre') as string
    const asunto = formData.get('asunto') as string
    const mensaje = formData.get('mensaje') as string
    const templateParams = {
      nombre,
      email,
      asunto,
      mensaje

      // Send to client or your default email
    }
    console.log(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
    emailjs.init(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        templateParams
      )

      return {
        success: true,
        message: 'Email sent successfully!'
      }
    } catch (error) {
      console.error('Error sending email:', error)
      return {
        success: false,
        message: 'Failed to send email. Please try again later.'
      }
    }
  }

  const onSubmit = async (data: any) => {
    const formData = new FormData()
    formData.append('nombre', data.nombre)
    formData.append('email', data.email)
    formData.append('asunto', data.asunto)
    formData.append('mensaje', data.mensaje)

    const result = await sendEmail(formData)
    if (result.success) {
      setStatus('Email enviado!')
      setMessageType('success')
    } else {
      setStatus('Email fallo')
      setMessageType('error')
    }

    setOpenSnackbar(true) // Open the snackbar on submit
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false) // Close the snackbar
  }

  return (
    <Box width="90%" ml={2}>
      <Typography color="text.secondary">Gracias por su visita</Typography>

      <Typography color="text.primary">
        Escriba su comentario o cualquier duda al siguiente correo.
      </Typography>
      <Box
        sx={{
          borderBottom: '4px solid',
          borderColor: 'divider',
          marginY: 2 // margin-left for spacing
        }}
      />
      <Typography color="text.primary">
        También puede solicitar la compra de discos físicos o el envío de algún
        capítulo de la tesis que le interese.
      </Typography>
      <Box
        sx={{
          borderBottom: '4px solid',
          borderColor: 'divider',
          marginY: 2 // margin-left for spacing
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Stack spacing={2}>
          {' '}
          <TextField
            {...register('nombre', { required: 'su nombre es requerido' })}
            placeholder="Nombre..."
          />
          {errors.name && (
            <p className="text-red-500">{errors.name.message as string}</p>
          )}
          <TextField
            color="primary"
            {...register('email', { required: 'Email es requerido' })}
            placeholder="Email....."
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message as string}</p>
          )}
          <TextField {...register('asunto')} placeholder="Asunto..." />
          <TextField
            multiline
            minRows={4}
            {...register('mensaje', { required: 'Mensaje es obligatorio' })}
            placeholder="Su mensaje"
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message as string}</p>
          )}
          <Button type="submit" variant="outlined">
            enviar
          </Button>
        </Stack>
      </form>

      {/* Snackbar for success/error messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={messageType}
          sx={{ '& .MuiAlert-message': { typography: 'body1' } }}
        >
          {status}
        </Alert>
      </Snackbar>
    </Box>
  )
}

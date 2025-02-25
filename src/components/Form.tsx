/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
//import { sendEmail } from '../app/actions/sendEmail'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [status /*setStatus*/] = useState<string | null>(null)

  const onSubmit = async (data: any) => {
    const formData = new FormData()
    formData.append('nombre', data.nombre)
    formData.append('email', data.email)
    formData.append('asunto', data.asunto)
    formData.append('mensaje', data.mensaje)

    console.log(formData)

    /* const result = await sendEmail(formData)
    if (result.success) {
      setStatus('Email sent successfully!')
    } else {
      setStatus('Failed to send email.')
    }*/
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
      {status && <p className="mt-4">{status}</p>}
    </Box>
  )
}

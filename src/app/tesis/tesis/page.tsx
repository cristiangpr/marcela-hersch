'use client'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/material'

export default function Tesis() {
  return (
    <Box
      sx={{
        bgcolor: 'bacground.default',
        width: '100%',
        height: '100vh'
      }}
    >
      <Container
        sx={{
          bgcolor: 'bacground.default'
        }}
      >
        {' '}
        <Typography variant="h1">tesis</Typography>
      </Container>
    </Box>
  )
}

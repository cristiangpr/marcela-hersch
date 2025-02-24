import Form from '@/components/Form'
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function Contacto() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: 'background.default'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          padding: 8,
          gap: 4,
          width: '100%',
          flex: 1
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            flexShrink: 0,
            flexGrow: 0,
            display: 'flex', // Add this
            alignItems: 'stretch' // Add this
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h3">Contacto</Typography>
            <Image
              width={400}
              height={550}
              alt="image"
              src={'/contacto.avif'}
            />
          </Stack>
          <Box
            sx={{
              borderRight: '4px solid',
              borderColor: 'divider',
              margin: 2, // margin-left for spacing
              display: { xs: 'none', md: 'block' } // Hide on mobile
            }}
          />
        </Box>
        <Form />
      </Box>
    </Container>
  )
}

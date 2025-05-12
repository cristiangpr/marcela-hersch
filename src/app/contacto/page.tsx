import Form from '@/components/Form'
import Paola from '@/components/Paola'
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function Contacto() {
  return (
    <Container maxWidth="xl">
      <Box paddingX={{ xs: 2, sm: 4, md: 8 }} sx={{ textAlign: 'left', mt: 4 }}>
        <Typography variant="h3">Contacto</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          padding: { xs: 2, sm: 4, md: 8 },

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
            display: 'flex' // Add this
          }}
        >
          <Stack spacing={1}>
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={0}
              height={0}
              sizes="(max-width: 600px) 100vw, 600px"
              alt="image"
              src={'/contacto.avif'}
            />
            <Paola />
          </Stack>
          <Box
            sx={{
              borderRight: '4px solid',
              borderColor: 'divider',
              marginX: 2, // margin-left for spacing
              display: { xs: 'none', md: 'block' } // Hide on mobile
            }}
          />
        </Box>
        <Box>
          <Form />
        </Box>
      </Box>
    </Container>
  )
}

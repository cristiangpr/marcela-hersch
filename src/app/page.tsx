import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: 'background.default'
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.default',
          width: '100%',
          paddingTop: 13,
          textAlign: 'center'
        }}
      >
        <Typography color="text.primary" variant="body2">
          La Música lleva un mensaje de eternidad que llena de buenos
          sentimientos al hombre y lo hace sentir amor.
        </Typography>

        <Typography color="text.primary" variant="body2">
          Ser intérprete es llevar al que escucha y a uno mismo a ese lugar, a
          ese momento de unión con el infinito.
        </Typography>
      </Box>
      <Box textAlign={'right'} marginInlineEnd={30}>
        <Typography color="text.primary" variant="body2">
          MHersch
        </Typography>
      </Box>

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
            width: { xs: '100%', md: '25%' },
            flexShrink: 0,
            flexGrow: 0,
            display: 'flex', // Add this
            alignItems: 'stretch' // Add this
          }}
        >
          <Stack spacing={10}>
            <Typography color="text.secondary">
              Marcela Hersch tiene una sólida formación como pianista
              concertista. Su preparación como compositora la ha llevado a
              hacerse un camino propio en el que incorpora diferentes estilos
              musicales en el que crea sus obras con libertad
            </Typography>
            <Typography color="text.primary">
              Marcela Hersch has a solid concert pianist education, and has
              trained herself as a composer in a nonacademic way which has led
              her to freely walk in that ambience creating a unique musical
              style in her compositions.
            </Typography>
          </Stack>
          <Box
            sx={{
              borderRight: '4px solid',
              borderColor: 'divider',
              ml: 4, // margin-left for spacing
              display: { xs: 'none', md: 'block' } // Hide on mobile
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '75%' },
            flexShrink: 0,
            flexGrow: 0
          }}
        >
          <Image width={700} height={500} alt="image" src={'/home.avif'} />
          <Typography color="text.primary" fontSize={'xs'}>
            Foto: Paola Leon
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

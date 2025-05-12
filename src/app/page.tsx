import Paola from '@/components/Paola'
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: 'background.default',
        px: { xs: 2, sm: 3, md: 4 } // Responsive padding
      }}
    >
      {/* Quote Section */}
      <Box
        sx={{
          bgcolor: 'background.default',
          width: '100%',
          paddingTop: { xs: 6, sm: 8, md: 13 }, // Responsive top padding
          textAlign: 'center',
          mb: 2
        }}
      >
        <Typography
          color="text.primary"
          variant="body2"
          sx={{
            mb: 2,
            px: { xs: 2, sm: 4 } // Add padding on smaller screens
          }}
        >
          La Música lleva un mensaje de eternidad que llena de buenos
          sentimientos al hombre y lo hace sentir amor. <br />
          Ser intérprete es llevar al que escucha y a uno mismo a ese lugar, a
          ese momento de unión con el infinito.
        </Typography>
      </Box>

      {/* Attribution */}
      <Box
        textAlign="right"
        sx={{
          mr: { xs: 2, sm: 4, md: 20 },
          mb: { xs: 4, md: 2 }
        }}
      >
        <Typography color="text.primary" variant="body2">
          MHersch
        </Typography>
      </Box>

      {/* Main Content Section - CSS-only responsive design */}
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, md: 8 },
          width: '100%'
        }}
      >
        {/* Image on mobile, will be reordered via CSS for larger screens */}
        <Box
          sx={{
            width: '100%',
            mb: 4,
            order: { xs: 1, md: 2 }, // Image first on mobile, second on desktop
            display: { xs: 'block', md: 'none' } // Only show this on mobile
          }}
        >
          <Image
            width={700}
            height={500}
            alt="image"
            src={'/home.avif'}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '500px',
              objectFit: 'contain'
            }}
          />
          <Paola />
        </Box>

        {/* Flex container for responsive layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 4 }
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              width: { xs: '100%', md: '25%' },
              position: 'relative',
              mb: { xs: 4, md: 0 },
              order: { xs: 2, md: 1 } // Text second on mobile, first on desktop
            }}
          >
            <Stack spacing={{ xs: 6, md: 10 }}>
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

            {/* Divider - only visible on desktop */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: -20,
                bottom: 0,
                borderRight: '4px solid',
                borderColor: 'divider',
                display: { xs: 'none', md: 'block' }
              }}
            />
          </Box>

          {/* Desktop image section */}
          <Box
            sx={{
              width: { xs: '100%', md: '75%' },
              pl: { md: 4 },
              display: { xs: 'none', md: 'block' }, // Only show on desktop
              order: { md: 2 }
            }}
          >
            <Image
              width={700}
              height={500}
              alt="image"
              src={'/home.avif'}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'contain'
              }}
            />
            <Paola />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

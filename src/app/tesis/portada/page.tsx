import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function PortadaTesis() {
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
          flexDirection: 'column',
          paddingX: 8,
          paddingTop: 4,
          paddingBottom: 0,
          gap: 1,
          width: '100%',
          flex: 1,
          alignItems: 'left'
        }}
      >
        <Typography variant="h5">Tesis</Typography>
        <Typography variant="h6">
          El raga Báirava: una expresión musical y pictográfica de Shiva
        </Typography>
        <Typography variant="subtitle1">
          La tesis, por la que obtuvo mención honorífica, consta de cuatro
          capítulos y dos anexos, uno de entrevistas a reconocidos músicos de la
          India sobre el raga Bháirava y el otro con un catálogo de imágenes de
          pinturas miniatura de Bháirava a lo largo de aproximadamente mil años.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingX: 8,
          paddingY: 0,

          width: '100%',
          flex: 1,
          textAlign: 'right'
        }}
      >
        <Typography fontSize={'0.8rem'} variant="body1">
          Cuernavaca, Morelos, 12 de enero de 2017 <br /> Colegio de Morelos
          COLMOR
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          padding: 8,
          gap: 4,
          width: '100%',
          flex: 1,
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },

            display: 'flex', // Add this
            textAlign: { xs: 'center', md: 'right' }, // Centers content on mobile
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}
        >
          <Stack alignItems="flex-end" spacing={3}>
            <Image width={250} height={250} alt="image" src={'/tesis-2.avif'} />
            <Typography fontSize={'xs'}>Juramento</Typography>
            <Image width={400} height={250} alt="image" src={'/tesis-3.avif'} />
            <Typography variant="body1">
              Sinodales de izquierda a derecha <br />
              Dr. Oscar Figueroa Castro <br />
              Dr. Xicoténcatl Octavio Martínez Ruiz <br />
              Dra. Elsa Cross Anzaldúa Dr. <br />
              Antonio García de León Dr Jesús Nieto Sotelo <br />
            </Typography>
          </Stack>
          <Box
            sx={{
              borderRight: '4px solid',
              borderColor: 'divider',
              marginX: 2,
              width: { xs: '100%', md: '50%' },
              height: 800
            }}
          />
        </Box>
        <Box
          sx={{
            order: { xs: -1, md: 1 }, // Moves to the top only on mobile
            width: { xs: '100%', md: '50%' }, // Full width on mobile, 50% on desktop
            display: 'flex',
            justifyContent: 'center',
            transform: { xs: 'scale(1.25)', md: 'none' },
            paddingBottom: { xs: 5 }
          }}
        >
          <Image
            width={600}
            height={800}
            style={{
              width: '100%',
              height: 'auto'
            }}
            alt="image"
            src={'/tesis-1.avif'}
          />
        </Box>
      </Box>
    </Container>
  )
}

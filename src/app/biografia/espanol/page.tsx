/* eslint-disable react/no-unescaped-entities */
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function English() {
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
            <Typography variant="h3">Espanol</Typography>
            <Image width={400} height={550} alt="image" src={'/espanol.avif'} />
          </Stack>
          <Box
            sx={{
              borderRight: '4px solid',
              borderColor: 'divider',
              ml: 2, // margin-left for spacing
              display: { xs: 'none', md: 'block' } // Hide on mobile
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '60%' },
            flexShrink: 0,
            flexGrow: 0
          }}
        >
          <Typography variant="h5" color="text.disabled">
            Marcela Hersch
          </Typography>
          <Typography variant="h5" color="text.disabled">
            Pianista y Compositora
          </Typography>
          <Typography color="text.primary" component={'p'}>
            Marcela Hersch es una pianista y compositora mexicana con una sólida
            formación como concertista. Su preparación como compositora la ha
            llevado a forjar un camino propio en el que incorpora diferentes
            estilos musicales con libertad.
          </Typography>

          <Typography color="text.primary" component={'p'}>
            Fue una artista precoz: comenzó a estudiar piano a los cuatro años
            con su madre, también pianista concertista. A los siete años dio su
            primer recital y, a partir de los nueve, fue solista de orquestas de
            cámara.
          </Typography>

          <Typography color="text.primary" component={'p'}>
            Estudió con importantes pedagogas como Stella Contreras, Luz María
            Puente y Aurora Serratos en el Conservatorio Nacional de Música. A
            los diecisiete años, fue solista de la Orquesta Sinfónica del
            Conservatorio y obtuvo su título como pianista ejecutante y
            concertista. Posteriormente, obtuvo el grado de Master of Music en
            la Indiana University, donde estudió con maestros como Alfonso
            Montecinos y Michel Block. También tomó cursos de especialización en
            Alemania y perfeccionamiento pianístico con figuras como George
            Demus, Menahem Pressler y Cyprien Katsaris.
          </Typography>

          <Typography color="text.primary" component={'p'}>
            Hersch obtuvo un Doctorado en Historia del Arte por el Colegio de
            Morelos, con una tesis transdisciplinaria que relaciona filosofía,
            música y pintura de la India, centrada en el Raga Bháirava. En el
            marco de esta investigación, compuso un cuarteto para piano, sitar,
            tabla, tanpura y voz invitada.
          </Typography>

          <Typography color="text.primary" component={'p'}>
            Paralelamente, ha desarrollado una amplia trayectoria como
            compositora. Desde niña estudió solfeo y armonía con el maestro
            Alfonso de Elías y continuó su formación en el Conservatorio
            Nacional de Música con Gonzalo Ruiz Esparza, David Domínguez y José
            Suárez. Estudió composición con Juan Carlos Areán y Mariana
            Villanueva, así como orquestación con Arturo Márquez. También
            participó en talleres de composición con el cuarteto Arditti y en
            análisis de música atonal con Hebert Vázquez.
          </Typography>

          <Typography color="text.primary" component={'p'}>
            Su formación musical se ha complementado con estudios de armonía
            moderna con Tony Bravo, ritmos afroamericanos con Carlos Rivarola y
            jazz con Juan José Calatayud. Su interés por la música de la India
            la llevó a estudiar con Paul Livingstone, Holving Argáez y la Dra.
            Karunamayi en la India. Esta exploración la acercó a la
            musicoterapia, disciplina en la que también se ha formado.
          </Typography>

          <Typography color="text.primary" component={'p'}>
            Ha trabajado con la infancia en diversos proyectos y creó el Centro
            de Educación Musical Pauta. En 2006 lanzó su primer disco de
            canciones de cuna "Me cantas, ma?", y posteriormente "¿Me cantas un
            cuento?", inspirado en
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

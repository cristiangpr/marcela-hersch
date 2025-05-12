/* eslint-disable react/no-unescaped-entities */
import Paola from '@/components/Paola'
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function English() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingX: { xs: 2, sm: 4, md: 8 },
          paddingY: 5,
          gap: 1,
          width: '100%',
          flex: 1,
          alignItems: 'left'
        }}
      >
        {' '}
        <Typography variant="h4">English</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          paddingX: { xs: 2, sm: 4, md: 8 },
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            position: 'relative' // Add this
          }}
        >
          <Stack spacing={1} sx={{ width: '100%', alignItems: 'center' }}>
            <Box
              sx={{
                width: '100%',
                maxWidth: { xs: '300px', sm: '400px' },
                position: 'relative',
                pr: 2
              }}
            >
              <Image
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                width={400}
                height={550}
                alt="image"
                src={'/english.avif'}
              />
            </Box>
            <Box sx={{ width: '100%', maxWidth: { xs: '300px', sm: '400px' } }}>
              <Paola />
            </Box>
          </Stack>
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,

              borderRight: '4px solid',
              borderColor: 'divider',
              display: { xs: 'none', md: 'block' }
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
          <Typography color="text.primary" component={'p'} paragraph>
            Marcela Hersch, a Mexican pianist and composer, was born to an
            American father and a Mexican concert pianist mother, Marcela
            Martínez Barranco. She began studying piano at the age of four under
            her mother's guidance and made her debut at the age of seven. In
            Mexico, she trained with renowned piano teachers Stella Contreras,
            Luz María Puente, and Aurora Serratos.
          </Typography>

          <Typography color="text.primary" component={'p'} paragraph>
            She graduated as a Concert Pianist from the National Conservatory of
            Music in Mexico and earned a Master's of Music in Piano Performance
            from Indiana University. In 2017, she graduated with honors from
            Colegio de Morelos (COLMOR) with a transdisciplinary Ph.D.
            dissertation combining philosophy, music, and miniature painting
            from India.
          </Typography>

          <Typography color="text.primary" component={'p'} paragraph>
            Throughout her career, she studied with distinguished international
            musicians, including Michel Block, Alfonso Montecinos (a pupil of
            Claudio Arrau), and Edith Picht-Axenfeld (a student of Wanda
            Landowska). Her composition studies were guided by Juan Carlos Areán
            and Mariana Villanueva, while she studied orchestration under Arturo
            Márquez. She has also conducted research on Indian Classical Music
            with Paul Livingstone and Hollving Argáez and explored pop music
            with Tony Bravo and jazz with Juan José Calatayud.
          </Typography>

          <Typography color="text.primary" component={'p'} paragraph>
            Marcela Hersch has released eight recordings on compact discs, five
            of which feature her own compositions. She has performed as an
            orchestral soloist since childhood and has given concerts in Mexico,
            the United States, Costa Rica, Spain, Germany, Cuba, and India. In
            2012, she premiered her compositions in India, including solo piano
            works and "Tiger's Flower" and "So it is" for piano, sitar, tabla,
            and tanpura, featuring Shubhendra Rao (a protégé and top student of
            Ravi Shankar) on sitar and Zoheb Khan on tabla. In 2014, she
            performed in Delhi with an ensemble featuring tabla, soprano,
            tanpura, and electric guitar.
          </Typography>

          <Typography color="text.primary" component={'p'} paragraph>
            She began teaching piano at the age of fourteen, and since the age
            of twenty-four, she has continuously taught both privately and at
            her own music school, the Centre for Musical Education Pauta.
            Additionally, she was a faculty member at the Centro Morelense de
            las Artes University in Cuernavaca, Morelos, until 2020.
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

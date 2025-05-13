import { Container, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2'
import SelectedImageTrigger from '@/components/SelectedImageTrigger'
import { getImageUrls } from '../actions/getImages'

const info: string[] = [
  'Cuartetos para piano, sitar, tanpura y tabla, en el que logra la fusión de las dos grandes vertientes de la música clásica del mundo: la música clásica de la India y la música clásica de occidente.',
  'Composiciones para piano, sitar, tanpura y tabla, en el que logra la fusión de las dos grandes vertientes de la música clásica del mundo: la música clásica de la India y la música clásica de occidente.',
  'Marcela Hersch interpreta música para piano solo de Bach, Mozart, Beethoven, Chopin, Debussy, Ginastera, Villalobos y Marcela Hersch',
  'Composiciones de Marcela Hersch escritas para su grupo FUSION CREATIVA ensamble en las que fusiona música de oriente y occidente.',
  'Composiciones  y arreglos de Marcela Hersch sobre canciones de la lírica infantil mexicana en los que fusiona instrumentos occidentales con instrumentos de otras culturas.',
  'Composiciones de Marcela Hersch para piano solo creadas e interpretada por ella misma.',
  'Marcela Hersch interpreta música para piano solo de este excelente y fallecido compositor mexicano.',
  'Grabación en vivo del concierto del gran flautista de la India Hari Prassad Chaurasia en el que Marcela Hersch fue invitada a acompañarlo  tocando la Tanpura.'
]

// This is a Server Component, it runs server-side.
export default async function Discografia() {
  const bucket = 'portadas-discos'

  // Fetch the list of files from the bucket
  const { imageUrls, error } = await getImageUrls(bucket)

  if (error) {
    return <p className="text-red-500">Error: {error}</p>
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingBottom: 50
      }}
    >
      <Box paddingX={{ xs: 2, sm: 4, md: 8 }} sx={{ textAlign: 'left', mt: 4 }}>
        <Typography paddingY={2} variant="h4">
          Disocografia
        </Typography>
        <Typography>Haz click en al imagen para grandar</Typography>
      </Box>
      <Box paddingX={{ xs: 2, sm: 4, md: 8 }}>
        <Grid container justifyContent="center">
          {imageUrls?.map((url, index) => (
            <>
              <Grid
                container
                justifyContent="center"
                textAlign="center"
                key={url}
                size={{ xs: 12, md: 6, lg: 4 }}
                paddingX={2}
                paddingY={4}
              >
                <SelectedImageTrigger
                  images={imageUrls}
                  startingIndex={index}
                  isText={false}
                >
                  <Image
                    key={url}
                    src={url}
                    alt={`Image ${index}`}
                    width={500}
                    height={315}
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                </SelectedImageTrigger>
                <Typography
                  marginTop={2}
                  fontSize={'xs'}
                  sx={{
                    alignSelf: 'flex-start',
                    height: '100%'
                  }}
                >
                  {info[index]}
                </Typography>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

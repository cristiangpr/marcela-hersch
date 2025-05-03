import { createClient } from '@/utils/supabase/server'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2'
import SelectedImageTrigger from '@/components/SelectedImageTrigger'

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
  const supabase = await createClient()

  const bucket = 'portadas-discos'

  // Fetch the list of files from the bucket
  const { data, error } = await supabase.storage.from(bucket).list()
  console.log('Supabase response data:', data)
  console.log('Supabase response error:', error)

  if (error) {
    return <Typography variant="h6">Error fetching images</Typography>
  }

  const imageUrls: string[] = data.map((file) => {
    return supabase.storage.from(bucket).getPublicUrl(file.name).data.publicUrl // Get the public URL for each file
  })

  return (
    <Container
      sx={{
        bgcolor: 'background.default',

        paddingBottom: 30
      }}
    >
      <Box sx={{ bgcolor: 'background.default', width: '100%' }}>
        <Typography padding={5} variant="h4">
          Disocografia
        </Typography>
        <Grid container justifyContent="center">
          {imageUrls.map((url, index) => (
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

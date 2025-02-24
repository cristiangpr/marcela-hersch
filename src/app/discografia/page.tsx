import { createClient } from '@/utils/supabase/server'
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2'
import { Titulo } from '@/interfaces'

const info: string[] = [
  'Cuartetos para piano, sitar, tanpura y tabla, en el que logra la fusión de las dos grandes vertientes de la música clásica del mundo: la música clásica de la India y la música clásica de occidente.',
  'Composiciones para piano, sitar, tanpura y tabla, en el que logra la fusión de las dos grandes vertientes de la música clásica del mundo: la música clásica de la India y la música clásica de occidente.',
  'Marcela Hersch interpreta música para piano solo de Bach, Mozart, Beethoven, Chopin, Debussy, Ginastera, Villalobos y Marcela Hersch',
  'Composiciones de Marcela Hersch escritas para su grupo FUSION CREATIVA ensamble en las que fusiona música de oriente y occidente.',
  'Composiciones  y arreglos de Marcela Hersch sobre canciones de la lírica infantil mexicana en los que fusiona instrumentos occidentales con instrumentos de otras culturas.',
  'Marcela Hersch interpreta música para piano solo de este excelente y fallecido compositor mexicano.',
  ''
]

// This is a Server Component, it runs server-side.
export default async function Discografia() {
  const supabase = await createClient()

  const bucket = 'portadas'

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
    <Box
      paddingBottom={10}
      sx={{ bgcolor: 'background.default', width: '100%' }}
    >
      <Container
        sx={{
          bgcolor: 'background.default',
          textAlign: 'center',
          paddingTop: [5]
        }}
      >
        <Typography padding={10} variant="h4">
          Disocografia
        </Typography>
        <Grid container justifyContent="center" sx={{ pointerEvents: 'none' }}>
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
                <Image
                  key={url}
                  src={url}
                  alt={`Image ${index}`}
                  style={{
                    width: '100%',
                    height: 400
                  }}
                  width={500}
                  height={300}
                />
                <Typography paddingTop={1} fontSize={'xs'}>
                  {info[index]}
                </Typography>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

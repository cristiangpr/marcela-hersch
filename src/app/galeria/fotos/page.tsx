import { createClient } from '../../../utils/supabase/server'
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2'
import { Titulo } from '@/interfaces'

// This is a Server Component, it runs server-side.
export default async function Galeria() {
  const supabase = await createClient()

  const bucket = 'galeria'

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
        <Typography variant="h4">Galeria</Typography>
        <Grid container justifyContent="center" sx={{ pointerEvents: 'none' }}>
          {imageUrls.map((url, index) => (
            <>
              <Grid
                container
                justifyContent="center"
                textAlign="center"
                key={url}
                size={
                  index === 0 || index === 3
                    ? 5
                    : index === 1 || index === 2
                    ? 7
                    : index === 4 && index <= 7
                    ? 6
                    : index === 8 || index === 9
                    ? 12
                    : 6
                }
                padding={1}
              >
                <Image
                  key={index}
                  src={url}
                  alt={`Image ${index}`}
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                  width={500}
                  height={300}
                />
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

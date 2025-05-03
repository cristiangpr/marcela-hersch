import { createClient } from '../../../utils/supabase/server'
import { Button, Container, Link, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2'
import SelectedImageTrigger from '@/components/SelectedImageTrigger'

// This is a Server Component, it runs server-side.
export default async function Galeria2() {
  const supabase = await createClient()

  const bucket = 'galeria-2'

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
      maxWidth="lg"
      sx={{
        bgcolor: 'background.default',
        width: '100%'
      }}
    >
      <Box sx={{ bgcolor: 'background.default', width: '100%' }} padding={8}>
        <Typography variant="h4">Galeria 2</Typography>

        <Grid container justifyContent="center">
          {imageUrls.map((url, index) => (
            <>
              <Grid
                container
                justifyContent="center"
                textAlign="center"
                key={url}
                size={
                  index >= 12 ? { xs: 12, sm: 6 } : { xs: 12, md: 6, lg: 4 }
                }
                paddingX={{ xs: 0, sm: 2 }}
                paddingY={2}
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
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                    width={500}
                    height={300}
                  />
                </SelectedImageTrigger>
              </Grid>
            </>
          ))}
          <Box
            sx={{
              display: 'flex', // Enables flexbox
              justifyContent: 'center', // Centers horizontally
              alignItems: 'center', // Centers vertically (optional)
              width: '100%', // Ensures full width
              mt: 4 // Adds margin to separate from images
            }}
          >
            <Button variant="outlined" component={Link} href="/galeria/fotos">
              Pagina 1
            </Button>
          </Box>
        </Grid>
      </Box>
    </Container>
  )
}

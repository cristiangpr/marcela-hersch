import { createClient } from '../../../utils/supabase/server'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2'

// This is a Server Component, it runs server-side.
export default async function Programa() {
  const supabase = await createClient()

  const bucket = 'programa-homenaje'

  // Fetch the list of files from the bucket
  const { data, error } = await supabase.storage.from(bucket).list()

  console.log('Supabase response data:', data)
  console.log('Supabase response error:', error)
  const filtered = data?.filter(
    (file) => file.name !== '.emptyFolderPlaceholder'
  )

  if (error) {
    return <Typography variant="h6">Error fetching images</Typography>
  }

  const imageUrls: string[] | undefined = filtered?.map((file) => {
    return supabase.storage.from(bucket).getPublicUrl(file.name).data.publicUrl // Get the public URL for each file
  })

  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: 'background.default'
      }}
    >
      <Box sx={{ bgcolor: 'background.default', width: '100%' }} padding={5}>
        <Typography variant="h4">Homenaje a Beethoven</Typography>
        <Grid container justifyContent="center">
          {imageUrls &&
            imageUrls.map((url, index) => (
              <>
                <Grid
                  container
                  justifyContent="center"
                  textAlign="center"
                  key={url}
                  size={{ xs: 12, sm: 6 }}
                  padding={2}
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
      </Box>
    </Container>
  )
}

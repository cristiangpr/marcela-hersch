import { Button, Container, Link, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2'
import SelectedImageTrigger from '@/components/SelectedImageTrigger'
import { getImageUrls } from '@/app/actions/getImages'

// This is a Server Component, it runs server-side.
export default async function Galeria() {
  const bucket = 'galeria'

  const { imageUrls, error } = await getImageUrls(bucket)

  if (error) {
    return <p className="text-red-500">Error: {error}</p>
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ width: '100%' }} padding={8}>
        <Typography variant="h4">Galeria</Typography>
        <Typography>Haz click en al imagen para grandar</Typography>
        <Grid container justifyContent="center">
          {imageUrls?.map((url, index) => (
            <>
              <Grid
                container
                justifyContent="center"
                textAlign="center"
                key={url}
                size={
                  index === 3 || index === 4
                    ? { xs: 12, md: 6, lg: 6 } // second row → 2 items
                    : { xs: 12, md: 6, lg: 4 } // default → 3 items
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
            <Button variant="outlined" component={Link} href="/galeria/fotos-2">
              Pagina 2
            </Button>
          </Box>
        </Grid>
      </Box>
    </Container>
  )
}

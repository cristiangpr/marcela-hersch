import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2'

import Link from 'next/link'

import SelectedImageTrigger from '@/components/SelectedImageTrigger'
import { getImageUrls } from '@/app/actions/getImages'

// This is a Server Component, it runs server-side.
export default async function PremiosPage() {
  const bucket = 'prem-5'
  const { imageUrls, error } = await getImageUrls(bucket)

  if (error) {
    return <p className="text-red-500">Error: {error}</p>
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ width: '100%' }} padding={5}>
        <Typography variant="h4">Premios y Distinciones Pagina 5</Typography>
        <Typography>Haz click en al imagen para grandar</Typography>
        <Grid container justifyContent="center">
          {imageUrls?.map((url, index) => (
            <>
              <Grid
                container
                justifyContent="center"
                textAlign="center"
                key={url + 'grid'}
                size={{ md: 4, sm: 6, xs: 12 }}
                padding={3}
              >
                <SelectedImageTrigger
                  images={imageUrls}
                  startingIndex={index}
                  isText={true}
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
              justifyContent: 'space-around', // Centers horizontally
              alignItems: 'center', // Centers vertically (optional)
              width: '100%', // Ensures full width
              mt: 4 // Adds margin to separate from images
            }}
          >
            <Button
              variant="outlined"
              component={Link}
              href="/trayectoria/prem-4"
            >
              Pagina 4
            </Button>
          </Box>
        </Grid>
      </Box>
    </Container>
  )
}

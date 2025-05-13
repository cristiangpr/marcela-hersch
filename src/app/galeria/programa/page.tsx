import { Container, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2'
import SelectedImageTrigger from '@/components/SelectedImageTrigger'
import { getImageUrls } from '@/app/actions/getImages'

// This is a Server Component, it runs server-side.
export default async function Programa() {
  const bucket = 'programa-homenaje'

  // Fetch the list of files from the bucket
  const { imageUrls, error } = await getImageUrls(bucket)

  if (error) {
    return <p className="text-red-500">Error: {error}</p>
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ width: '100%' }} padding={5}>
        <Typography variant="h4">Homenaje a Beethoven</Typography>
        <Grid container justifyContent="center">
          {imageUrls?.map((url, index) => (
            <>
              <Grid
                container
                justifyContent="center"
                textAlign="center"
                key={url}
                size={{ xs: 12, sm: 6 }}
                padding={2}
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
        </Grid>
      </Box>
    </Container>
  )
}

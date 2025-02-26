import { createClient } from '../../../utils/supabase/server'
import { Button, Container, Link, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'

import Grid from '@mui/material/Grid2'
import { cleanFileName, getYouTubeEmbedUrls } from '@/utils/functions'

const urls: string[] = [
  'https://youtu.be/s3XAR8pwhdw?si=cGxJb97f7_RYivHp',
  'https://youtu.be/OQccDfVhoPU',
  'https://youtu.be/cOnhUsp61EI',
  'https://youtu.be/aiBcISX9kYQ',
  'https://youtu.be/d05buTTBZn4',
  'https://youtu.be/emjjvqja-qA',
  'https://youtu.be/iHA72PFuBcE',
  'https://youtu.be/Nz29Qe6pSWU'
]

// This is a Server Component, it runs server-side.
export default async function Entrevistas() {
  const embedUrls = getYouTubeEmbedUrls(urls)
  const supabase = await createClient()

  const bucket = 'entrevistas'

  // Fetch the list of files from the bucket
  const { data, error } = await supabase.storage.from(bucket).list('audio')
  console.log('Supabase response data:', data)
  console.log('Supabase response error:', error)

  if (error) {
    return <Typography variant="h6">Error fetching images</Typography>
  }
  const names: string[] = []

  const audioUrls: string[] = data.map((file) => {
    names.push(file.name)
    return supabase.storage.from(bucket).getPublicUrl(file.name).data.publicUrl // Get the public URL for each file
  })

  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: 'background.default'
      }}
    >
      <Box sx={{ bgcolor: 'background.default', width: '100%' }} padding={8}>
        <Typography variant="h4">Entrevistas y Comentarios</Typography>
        <Grid container justifyContent="center">
          {embedUrls &&
            embedUrls.map((url) => (
              <>
                <Grid
                  container
                  justifyContent="center"
                  textAlign="center"
                  key={url}
                  size={{ xs: 12, sm: 6 }}
                  paddingY={3}
                  paddingX={{ xs: 0, sm: 2 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      paddingTop: '56.25%', // 16:9 aspect ratio (9/16 = 0.5625)
                      overflow: 'hidden',
                      mb: 2,
                      transform: { xs: 'scale(1.25)', md: 'none' }
                    }}
                  >
                    <iframe
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        width: '100%',
                        height: '100%'
                      }}
                      src={url}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </Box>
                </Grid>
              </>
            ))}
        </Grid>
        <Grid container justifyContent="center">
          {audioUrls &&
            audioUrls.map((url, index) => (
              <>
                <Grid
                  container
                  justifyContent="center"
                  textAlign="center"
                  key={url}
                  size={{ xs: 12, sm: 6 }}
                  paddingY={2}
                  paddingX={{ xs: 0, sm: 2 }}
                >
                  <Typography variant="h6" color="text.disabled">
                    {cleanFileName(names[index])}
                  </Typography>
                  <audio controls>
                    <source src={url} type="audio/mpeg" />
                    {}
                  </audio>
                </Grid>
              </>
            ))}
        </Grid>
        <Stack spacing={2} display="flex" alignItems="center">
          <Button
            sx={{ width: { xs: '100%', sm: '75%', md: '50%' } }}
            variant="outlined"
            component={Link}
            href="https://www.proceso.com.mx/opinion/2021/12/3/de-sonatas-improvisaciones-ragas-hindues-276916.html"
          >
            Proceso: Entrevista con Samuel Champion
          </Button>
          <Button
            sx={{ width: { xs: '100%', sm: '75%', md: '50%' } }}
            variant="outlined"
            component={Link}
            href="https://www.proceso.com.mx/opinion/2021/12/3/de-sonatas-improvisaciones-ragas-hindues-276916.html"
          >
            Comentario Ismael Álvarez, el coleccionista
          </Button>
          <Button
            sx={{ width: { xs: '100%', sm: '75%', md: '50%' } }}
            variant="outlined"
            component={Link}
            href="https://www.proceso.com.mx/opinion/2021/12/3/de-sonatas-improvisaciones-ragas-hindues-276916.html"
          >
            Comentario Abril Gómez, bailarina y coreógrafa
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}

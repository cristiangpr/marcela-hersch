import { createClient } from '../../../utils/supabase/server'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
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
        <Typography variant="h4">Entrevistas y Comentarios</Typography>
        <Grid container justifyContent="center">
          {embedUrls &&
            embedUrls.map((url, index) => (
              <>
                <Grid
                  container
                  justifyContent="center"
                  textAlign="center"
                  key={url}
                  size={6}
                  padding={2}
                >
                  <iframe
                    width="100%"
                    height="315"
                    src={url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
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
                  size={6}
                  padding={2}
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
      </Container>
    </Box>
  )
}

import { Container, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { getYouTubeEmbedUrls } from '@/utils/functions'

const urls: string[] = [
  'https://youtu.be/YZmmC1L8gaM?si=OBU0umzYF1NPkeG4',
  'https://youtu.be/4fzpMI09WAo?si=TyGWtlUtPkA1xDFO',
  'https://youtu.be/IR3uq5_rAhg?si=iFE-fNF-QMEqBkRl',
  'https://youtu.be/RSpXL1vzdt0?si=id9hdxzfLaJtTlLy',
  'https://youtu.be/Z1s6o9GgoBw?si=23YaDMU3iatuR5oY',
  'https://youtu.be/BaKG-JIVEwQ?si=6pbs0LVcPI-jnG1O',
  'https://youtu.be/6zWNbYejpkc?si=uZwnYADLceifayO2',
  'https://youtu.be/UwKpFswN2lM?si=uFeQFsha7jFsOK5M',
  'https://youtu.be/w6IhVnHqZk8?si=6GxxEXyuXCgJoPia',
  'https://youtu.be/xh33pCJ8wqE?si=yf7OQCums247xqFN'
]

// This is a Server Component, it runs server-side.
export default async function Conciertos() {
  const embedUrls = getYouTubeEmbedUrls(urls)

  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: 'background.default'
      }}
    >
      <Box sx={{ bgcolor: 'background.default', width: '100%' }} padding={8}>
        <Typography variant="h4">Conciertos</Typography>
        <Grid container justifyContent="center">
          {embedUrls &&
            embedUrls.map((url) => (
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
      </Box>
    </Container>
  )
}

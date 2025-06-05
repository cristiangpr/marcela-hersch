import { Container, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { getYouTubeEmbedUrls } from '@/utils/functions'

const urls: string[] = [
  'https://youtu.be/f1clz9RAfZE',
  'https://youtu.be/6Pj6-22XFJQ',
  'https://youtu.be/v1S89uq6k4s',
  'https://youtu.be/Uf_yhLqTdfg',
  'https://youtu.be/U3ZP1Yfbfao',
  'https://youtu.be/8cCw7yKO7pI',
  'https://youtu.be/vLiMZabxPlA',

  'https://youtu.be/xh33pCJ8wqE',
  'https://youtu.be/woML2W7D3-Y',
  'https://youtu.be/0-SmHZF-pO0',
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
    <Container maxWidth="xl">
      <Box sx={{ width: '100%' }} padding={5}>
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
      </Box>
    </Container>
  )
}

import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { getYouTubeEmbedUrls } from '@/utils/functions'
interface Item {
  url: string[]
  title: string
  subtitle: string
}
const items: Item[] = [
  {
    url: getYouTubeEmbedUrls(['https://youtu.be/JHZ9B7it_UE']),
    title: 'Capítulo I',
    subtitle: 'Bendiciones para la tesis Dr. Krishna Kant Shukla'
  },
  {
    url: getYouTubeEmbedUrls(['https://youtu.be/-Z0DTez9tZE']),
    title: 'Capítulo II',
    subtitle: 'Bendiciones para la tesis Dr. Krishna Kant Shukla'
  },
  {
    url: getYouTubeEmbedUrls(['https://youtu.be/0AMXSbKfj74']),
    title: 'Capítulo III',
    subtitle: 'Bendiciones para la tesis Dr. Krishna Kant Shukla'
  },
  {
    url: getYouTubeEmbedUrls(['https://youtu.be/YCDb4xutGCI']),
    title: 'Capítulo IV',
    subtitle: 'Bendiciones para la tesis Dr. Krishna Kant Shukla'
  },
  {
    url: getYouTubeEmbedUrls(['https://youtu.be/r7yxQQuBH9E']),
    title: 'Capítulo V',
    subtitle: 'Bendiciones para la tesis Dr. Krishna Kant Shukla'
  },
  {
    url: getYouTubeEmbedUrls(['https://youtu.be/SFYIjWxqIxc']),
    title: 'Capítulo VI',
    subtitle: 'Bendiciones para la tesis Dr. Krishna Kant Shukla'
  },
  {
    url: getYouTubeEmbedUrls(['https://youtu.be/Wd2X9elIATE']),
    title: 'Capítulo VII',
    subtitle: 'Bendiciones para la tesis Dr. Krishna Kant Shukla'
  },
  {
    url: getYouTubeEmbedUrls(['https://youtu.be/T-zHXL4EqFQ']),
    title: 'Capítulo VIII',
    subtitle: 'Bendiciones para la tesis Dr. Krishna Kant Shukla'
  },
  {
    url: getYouTubeEmbedUrls(['https://youtu.be/DSfmEkEgXq8']),
    title: 'Capítulo IX',
    subtitle: 'Bendiciones para la tesis Dr. Krishna Kant Shukla'
  },
  {
    url: getYouTubeEmbedUrls(['https://youtu.be/wmAMKwkOXYE']),
    title: 'Capítulo X',
    subtitle: 'Bendiciones para la tesis Dr. Krishna Kant Shukla'
  },
  {
    url: getYouTubeEmbedUrls(['https://youtu.be/Ng06feXaDFA']),
    title: 'Capítulo XI',
    subtitle: 'Bendiciones para la tesis Dr. Krishna Kant Shukla'
  },
  {
    url: getYouTubeEmbedUrls(['https://youtu.be/JAOrwLRhcLE']),
    title: 'Capítulo XII',
    subtitle: 'Bendiciones para la tesis Dr. Krishna Kant Shukla'
  }
]

// This is a Server Component, it runs server-side.
export default async function VideosTesis() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: 'background.default'
      }}
    >
      <Box sx={{ bgcolor: 'background.default', width: '100%' }} padding={8}>
        <Stack spacing={1}>
          <Typography variant="h4">Anexo A de la Tesis</Typography>
          <Typography variant="h4">
            Entrevistas a reconocidos músicos de la India
          </Typography>
          <Typography variant="body1">
            Doce capítulos con entrevistas a reconocidos músicos de la India
            sobre el Raga Bháirava. Los videos fueron filmados in situ en el mes
            de noviembre en 2012 en las ciudades de Delhi y Varanasi, India. Los
            dos últimos capítulos son dos versiones de la composición{' '}
            <strong>La Luz de Bháirava</strong> composiciones sobre el ràga
            Bháirava por <strong>Marcela Hersch</strong> para esta tesis. Las
            tomas de video, traducción, subtítulos y edición fueron realizadas
            por la autora de la tesis. Se hicieron las mismas veinte preguntas a
            los músicos.
          </Typography>
        </Stack>
        <Grid key={'grid'} container justifyContent="center">
          {items &&
            items.map((item) => (
              <>
                <Grid
                  container
                  justifyContent="center"
                  textAlign="center"
                  key={item.url[0]}
                  size={{ xs: 12, sm: 6 }}
                  paddingY={3}
                  paddingX={{ xs: 0, sm: 2 }}
                >
                  <Stack key={item.url[0] + 'stack'}>
                    <Typography variant="h5" color="text.disabled">
                      {item.title}
                    </Typography>
                    <Typography variant="h6" color="text.disabled">
                      {item.subtitle}
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      paddingTop: '56.25%', // 16:9 aspect ratio (9/16 = 0.5625)
                      overflow: 'hidden',
                      m: 2,
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
                      src={item.url[0]}
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

import GalleryTrigger from '@/components/Trigger'
import { Button, Container, Link, Typography } from '@mui/material'
import { Box } from '@mui/material'

export default function TesisMedia() {
  interface Item {
    label: string
    bucket: string
    folder: string
    title: string
  }

  const items: Item[] = [
    {
      label: 'anexo b',
      bucket: 'galeria-tesis-1',
      folder: '',
      title: 'Catálogo de imágenes del Raga Bháirava'
    },
    {
      label: 'anexo b',
      bucket: 'galeria-tesis-2',
      folder: '',
      title: 'Catálogo de imágenes del Raga Bháirava Parte 2'
    }
  ]
  return (
    <Container
      sx={{
        bgcolor: 'bacground.default'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingX: { xs: 2, sm: 4, md: 8 },
          paddingTop: 5,
          paddingBottom: 20,
          gap: 1,
          width: '100%',
          flex: 1
        }}
      >
        {' '}
        <Typography variant="h4">Anexos A y B de la Tesis</Typography>
        <Typography variant="body1">Haz click en el botón acceder</Typography>
        <Box
          key={0}
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto auto',
            gridTemplateAreas: '"title" "button"',
            mb: 2,
            rowGap: 2,
            columnGap: 20,
            '@media (min-width: 600px)': {
              gridTemplateColumns: 'auto 1fr',
              gridTemplateRows: '1fr',
              gridTemplateAreas: '"button title"',
              alignItems: 'center'
            }
          }}
        >
          <Button
            component={Link}
            href="/tesis/videos"
            variant="contained"
            sx={{ width: '150px' }}
          >
            Anexo A
          </Button>

          <Typography variant="h6" sx={{ gridArea: 'title' }}>
            Entrevistas a reconocidos músicos de la India sobre el Raga Bháirava
            y dos versiones de la Luz de Bhairava: composición de Marcela Hersch{' '}
          </Typography>
        </Box>
        {items.map((item) => (
          <Box
            key={item.title}
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gridTemplateRows: 'auto auto',
              gridTemplateAreas: '"title" "button"',
              mb: 2,
              rowGap: 2,
              columnGap: 20,
              '@media (min-width: 600px)': {
                gridTemplateColumns: 'auto 1fr',
                gridTemplateRows: '1fr',
                gridTemplateAreas: '"button title"',
                alignItems: 'center'
              }
            }}
          >
            <Box sx={{ gridArea: 'button' }}>
              <GalleryTrigger
                label={item.label}
                bucket={item.bucket}
                folder={item.folder}
                isText={false}
              />
            </Box>

            <Typography variant="h6" sx={{ gridArea: 'title' }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

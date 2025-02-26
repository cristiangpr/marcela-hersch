import GalleryTrigger from '@/components/Trigger'
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'

export default function Tesis() {
  interface Item {
    label: string
    bucket: string
    folder: string
    title: string
  }
  const bucket = 'tesis'
  const items: Item[] = [
    {
      label: 'portada',
      bucket,
      folder: 'portada',
      title: 'Portada, agradecimientos e indice'
    },
    {
      label: 'capitulo 1',
      bucket,
      folder: 'capitulo-1',
      title: 'Shiva'
    },
    {
      label: 'capitulo 2',
      bucket,
      folder: 'capitulo-2',
      title: 'El ràga Bháirava en la música'
    },
    {
      label: 'capitulo 3',
      bucket,
      folder: 'capitulo-3',
      title: 'El ràga Bháirava en la pintura miniatura'
    },
    {
      label: 'capitulo 4',
      bucket,
      folder: 'capitulo-4',
      title: 'Antecedentes de la figura del dios Shiva y del Shivaísmo'
    },
    {
      label: 'conclusiones',
      bucket,
      folder: 'conclusiones',
      title: 'Conclusiones'
    },
    {
      label: 'glosario',
      bucket,
      folder: 'glosario',
      title: 'Glosario'
    },
    {
      label: 'Bibliografía',
      bucket,
      folder: 'bibliografia',
      title: 'Bibliografía y Fonografía'
    }
  ]
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        El raga Báirava: una expresión musical y pictográfica de Shiva
      </Typography>

      <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
        Haz click en el botón para leer
      </Typography>

      {items.map((item) => (
        <Box
          key={item.folder}
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
            />
          </Box>

          <Typography variant="h6" sx={{ gridArea: 'title' }}>
            {item.title}
          </Typography>
        </Box>
      ))}
    </Container>
  )
}

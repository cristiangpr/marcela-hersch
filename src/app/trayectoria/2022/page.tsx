import { createClient } from '../../../utils/supabase/server'
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2'
import { Titulo } from '@/interfaces'

// This is a Server Component, it runs server-side.
export default async function VeintidosPage() {
  const supabase = await createClient()

  const bucket = 'presentaciones-2022'

  // Fetch the list of files from the bucket
  const { data, error } = await supabase.storage
    .from('presentaciones-2022')
    .list()
  console.log('Supabase response data:', data)
  console.log('Supabase response error:', error)

  if (error) {
    return <Typography variant="h6">Error fetching images</Typography>
  }

  const imageUrls: string[] = data.map((file) => {
    return supabase.storage.from(bucket).getPublicUrl(file.name).data.publicUrl // Get the public URL for each file
  })
  const titulos: Titulo[] = [
    {
      titulo: 'Embajada de Del Río, Texas, EUA',
      subTitulo: '7 de mayo de 2022'
    },
    {
      titulo: 'Estudio - Foro - Hersch Cuernavaca, Morelos',
      subTitulo: '28 de mayo de 2022'
    },
    {
      titulo: 'Auditorio de la Reforma Puebla',
      subTitulo: '10 de junio de 2022'
    },
    {
      titulo: 'Alcázar del Castillo de Chapultepec, CDMX',
      subTitulo: '16 de Julio de 2022'
    },
    {
      titulo: 'Estudio - Foro - Hersch Cuernavaca, Morelos',
      subTitulo: '24 y 26 de Noviembre de 2022'
    },
    {
      titulo: 'Estudio - Foro - Hersch Cuernavaca, Morelos',
      subTitulo: '24 y 26 de Noviembre de 2022'
    },
    {
      titulo: 'Centro de Encuentros y Diálogos Hueyapan, Morelos',
      subTitulo: '10 de Diciembre de 2022'
    }
  ]

  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: 'background.default'
      }}
    >
      <Box sx={{ bgcolor: 'background.default', width: '100%' }} padding={5}>
        <Typography variant="h4">Presentaciones en 2022</Typography>
        <Grid container justifyContent="center">
          {imageUrls.map((url, index) => (
            <>
              <Grid
                container
                justifyContent="center"
                textAlign="center"
                key={url + 'grid'}
                size={{ md: index == 0 || index === 3 ? 6 : 4, sm: 6, xs: 12 }}
                padding={3}
              >
                <Stack key={url + 'stack'}>
                  <Typography variant="h5" color="text.disabled">
                    {titulos[index].titulo}
                  </Typography>
                  <Typography variant="h6" color="text.disabled">
                    {titulos[index].subTitulo}
                  </Typography>
                </Stack>

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
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

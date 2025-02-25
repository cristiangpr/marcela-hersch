import { createClient } from '../../../utils/supabase/server'
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2'
import { Titulo } from '@/interfaces'

// This is a Server Component, it runs server-side.
export default async function Beethoven() {
  const supabase = await createClient()

  const bucket = 'homenaje-beethoven'

  // Fetch the list of files from the bucket
  const { data, error } = await supabase.storage.from(bucket).list()
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
      titulo: 'Teatro Ocampo',
      subTitulo: '22 de Noviembre 2020'
    },
    {
      titulo: 'Teatro de la Ciudad Esperanza Iris',
      subTitulo: '3 de Octubre 2021'
    },
    {
      titulo: 'Auditorio Teopanzolco',
      subTitulo: '9 de Diciembre 2021'
    }
  ]

  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: 'background.default'
      }}
    >
      <Box sx={{ bgcolor: 'background.default', width: '100%' }} padding={8}>
        <Typography variant="h4">Homenaje a Beethoven</Typography>
        <Grid container justifyContent="center">
          {imageUrls.map((url, index) => (
            <>
              <Grid
                container
                justifyContent="center"
                textAlign="center"
                key={url}
                size={4}
                padding={2}
              >
                <Stack>
                  <Typography variant="h5" color="text.disabled">
                    {titulos[index].titulo}
                  </Typography>
                  <Typography variant="h6" color="text.disabled">
                    {titulos[index].subTitulo}
                  </Typography>
                </Stack>

                <Image
                  key={index}
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

import { createClient } from '@/utils/supabase/server'
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'

export default async function Prensa() {
  const supabase = await createClient()

  const bucket = 'prensa'

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

  return (
    <Box
      paddingBottom={10}
      paddingTop={5}
      textAlign={'center'}
      sx={{
        bgcolor: 'bacground.default',
        width: '100%'
      }}
    >
      <Container
        sx={{
          bgcolor: 'bacground.default'
        }}
        maxWidth="lg"
      >
        {' '}
        <Typography variant="h2">Prensa</Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          paddingTop={5}
        >
          <Stack width="30%" spacing={3}>
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[0]}
            />
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[1]}
            />
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[2]}
            />
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[3]}
            />
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[4]}
            />
          </Stack>
          <Stack width="30%" spacing={3}>
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[5]}
            />
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[6]}
            />
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[7]}
            />
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[8]}
            />
          </Stack>
          <Stack width="30%" spacing={3}>
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[9]}
            />
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[10]}
            />
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[11]}
            />
            <Image
              style={{
                width: '100%',
                height: 'auto'
              }}
              width={500}
              height={300}
              alt="image"
              src={imageUrls[12]}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

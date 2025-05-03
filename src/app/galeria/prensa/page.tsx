import SelectedImageTrigger from '@/components/SelectedImageTrigger'
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
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: 'background.default'
      }}
    >
      <Box sx={{ bgcolor: 'background.default', width: '100%' }} padding={8}>
        {' '}
        <Typography variant="h2">Prensa</Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          paddingTop={5}
        >
          <Stack width="30%" spacing={3}>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={0}
              isText={true}
            >
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
            </SelectedImageTrigger>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={0}
              isText={true}
            >
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
            </SelectedImageTrigger>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={0}
              isText={true}
            >
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
            </SelectedImageTrigger>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={3}
              isText={true}
            >
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
            </SelectedImageTrigger>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={4}
              isText={true}
            >
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
            </SelectedImageTrigger>
          </Stack>
          <Stack width="30%" spacing={3}>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={5}
              isText={true}
            >
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
            </SelectedImageTrigger>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={6}
              isText={true}
            >
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
            </SelectedImageTrigger>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={7}
              isText={true}
            >
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
            </SelectedImageTrigger>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={8}
              isText={true}
            >
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
            </SelectedImageTrigger>
          </Stack>
          <Stack width="30%" spacing={3}>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={9}
              isText={true}
            >
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
            </SelectedImageTrigger>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={10}
              isText={true}
            >
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
            </SelectedImageTrigger>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={11}
              isText={true}
            >
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
            </SelectedImageTrigger>
            <SelectedImageTrigger
              images={imageUrls}
              startingIndex={12}
              isText={true}
            >
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
            </SelectedImageTrigger>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

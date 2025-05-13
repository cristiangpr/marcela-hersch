import { getImageUrls } from '@/app/actions/getImages'
import SelectedImageTrigger from '@/components/SelectedImageTrigger'

import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'

export default async function Prensa() {
  const bucket = 'prensa'

  const { imageUrls, error } = await getImageUrls(bucket)

  if (error) {
    return <p className="text-red-500">Error: {error}</p>
  }

  return (
    imageUrls && (
      <Container maxWidth="xl">
        <Box sx={{ width: '100%' }} padding={5}>
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
  )
}

import Paola from '@/components/Paola'
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export default function Venta() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: 'background.default'
      }}
    >
      <Box sx={{ bgcolor: 'background.default', width: '100%' }} padding={8}>
        {' '}
        <Typography variant="h5" color="text.secondary">
          Ecucha en tu plataforma favorita
        </Typography>
        <Box display="flex" justifyContent="center" width="80%" paddingTop={5}>
          <Stack spacing={1}>
            <Image width={600} height={450} alt="image" src={'/venta.avif'} />
            <Paola />
          </Stack>

          <Box
            sx={{
              borderRight: '8px solid',
              borderColor: 'divider',
              marginX: 2, // margin-left for spacing
              display: { xs: 'none', md: 'block' } // Hide on mobile
            }}
          />

          <Box width="15%">
            <Stack spacing={2}>
              <Link href="https://www.amazon.com/s?k=Marcela+Hersch&i=digital-music&search-type=ss&ref=ntt_srch_drd_B00TTOWYM0">
                <Image
                  src={'/amazon.png'}
                  alt="button"
                  width={100}
                  height={60}
                />
              </Link>
              <Link href="https://music.apple.com/mx/artist/marcela-hersch/969169480?l=en">
                <Image
                  src={'/apple.png'}
                  alt="button"
                  width={100}
                  height={60}
                />
              </Link>
              <Link href="https://open.spotify.com/artist/1XBQbkH9SCiWXikToqhCcv?si=GMi74eH3R8u64TWaQEBK-A">
                <Image
                  src={'/spotify.png'}
                  alt="button"
                  width={100}
                  height={60}
                />
              </Link>
              <Link href="https://www.youtube.com/channel/UCt_5s2JcyZmY8HOmdwzPcUg">
                <Image
                  src={'/youtube.png'}
                  alt="button"
                  width={100}
                  height={60}
                />
              </Link>
              <Link href="https://music.apple.com/mx/artist/marcela-hersch/969169480">
                <Image
                  src={'/ITunes.png'}
                  alt="button"
                  width={100}
                  height={60}
                />
              </Link>
              <Link href="https://www.deezer.com/mx/artist/7583910">
                <Image
                  src={'/deezer.png'}
                  alt="button"
                  width={100}
                  height={60}
                />
              </Link>
            </Stack>
          </Box>
        </Box>
        <Typography color="text.secondary" variant="h5">
          Otras Plataformas Digitales
        </Typography>
        <Typography variant="h6">
          Pandora, 24-7, 7digital, Akazoo, Anghami, AWA, Boomplay, Hungama,
          iHeartRadio, iMusica, InProdicon, KDigital, KKBox, Kuack, Line Music,
          MediaNet, Napster, NetEase, Cloud Music, Pandora, Qobuz, Saavn,
          Shazam, Slacker Radio, SoundExchange, Tencent Music Entertainment
          (TME), Tidal, TikTok, United Media Agency (UMA), Yandex.
        </Typography>
      </Box>
    </Container>
  )
}

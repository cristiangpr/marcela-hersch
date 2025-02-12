'use client'

import { Container } from '@mui/material'
import { Box, useTheme } from '@mui/material'
import Header from './components/Header'

export default function Home() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: '100vh'
      }}
    >
      {' '}
      <Container
        sx={{
          backgroundColor: theme.palette.background.default
        }}
      >
        <Header />
      </Container>
    </Box>
  )
}

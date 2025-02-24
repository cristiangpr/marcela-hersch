import { Container, Typography } from '@mui/material'
import { Box } from '@mui/material'

export default function VEI() {
  return (
    <Box
      sx={{
        bgcolor: 'bacground.default',
        width: '100%',
        height: '100vh'
      }}
    >
      <Container
        sx={{
          bgcolor: 'bacground.default'
        }}
      >
        {' '}
        <Typography variant="h1">Espanol</Typography>
      </Container>
    </Box>
  )
}

import { Box, Divider, Stack, Typography } from '@mui/material'
export default function HeaderTitle() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          mr: 2, // margin-right
          bgcolor: 'black', // make divider visible against AppBar
          width: '8px' // make divider slightly thicker
        }}
      />
      <Stack spacing={0}>
        <Typography
          variant="h2"
          sx={{ color: 'black', lineHeight: '1.1em', fontWeight: 400 }}
        >
          MARCELA
        </Typography>
        <Typography variant="h3" sx={{ color: 'black' }}>
          HERSCH
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: `text.disabled`, fontWeight: 700 }}
        >
          pianista y compositora
        </Typography>
      </Stack>
    </Box>
  )
}

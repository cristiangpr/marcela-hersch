import { Box, Divider, Stack, Typography } from '@mui/material'
export default function HeaderTitle() {
  return (
    <Box sx={{ display: 'flex', alignItems: { sm: 'left', md: 'center' } }}>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          mr: 2, // margin-right
          bgcolor: 'black', // make divider visible against AppBar
          width: { sm: '0px', md: '8px' }
        }}
      />
      <Stack spacing={0}>
        <Typography
          variant="h2"
          sx={{
            color: 'black',
            lineHeight: '1.1em',
            fontWeight: 400,
            fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' }
          }}
        >
          MARCELA
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: 'black',
            fontSize: { xs: '1.8rem' }
          }}
        >
          HERSCH
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: `text.disabled`,
            fontWeight: 700
          }}
        >
          pianista y compositora
        </Typography>
      </Stack>
    </Box>
  )
}

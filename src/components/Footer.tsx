import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
      textAlign="center"
      width="100%"
      height={50}
      bgcolor="background.paper"
      position={'relative'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Typography fontSize={'0.8rem'}>
        © 2021 Marcela Hersch. ® Todos los derechos reservados
      </Typography>
    </Box>
  )
}

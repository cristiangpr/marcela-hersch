'use client'
import { createTheme } from '@mui/material/styles'
import { Cedarville_Cursive, Roboto_Serif } from 'next/font/google'
const roboto = Roboto_Serif({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})
export const cursive = Cedarville_Cursive({
  weight: '400',
  subsets: ['latin']
})
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '.body': {
          backgroundColor: 'rgb(251,241,236)' // or whatever color you want
        }
      }
    }
  },
  palette: {
    background: {
      paper: 'rgb(214,191,175)',
      default: 'rgb(251,241,236)'
    },
    text: {
      secondary: 'rgb(79,78,74)',
      primary: 'rgb(129,127,115)',
      disabled: 'rgb(151, 146, 113)'
    },
    primary: {
      main: 'rgb(151, 146, 113)'
    },
    action: {
      active: '#001E3C'
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 16,
    body2: {
      fontFamily: cursive.style.fontFamily,
      fontSize: 18
    }
  }
})

export default theme

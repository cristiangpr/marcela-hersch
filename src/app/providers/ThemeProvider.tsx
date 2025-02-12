'use client'
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme
} from '@mui/material/styles'
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
    action: {
      active: '#001E3C'
    }
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    body2: {
      fontFamily: 'marck script, cursive'
    }
  }
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
}

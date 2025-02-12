import { useTheme } from '@mui/material/styles'
import { AppBar, Divider, Menu, MenuItem, Stack } from '@mui/material'
import { Box, Toolbar, Typography } from '@mui/material'
import * as React from 'react'
import Link from 'next/link'

export default function Header() {
  const theme = useTheme()
  // State for dropdown menus
  const [anchorEls, setAnchorEls] = React.useState<(HTMLElement | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null
  ])

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    const newAnchorEls = [...anchorEls]
    newAnchorEls[index] = event.currentTarget
    setAnchorEls(newAnchorEls)
  }

  const handleClose = (index: number) => {
    const newAnchorEls = [...anchorEls]
    newAnchorEls[index] = null
    setAnchorEls(newAnchorEls)
  }
  interface Item {
    name: string
    path: string
  }
  interface MenuItem {
    title: string
    items?: Item[]
  }
  // Navigation menu items
  const menuItems: MenuItem[] = [
    {
      title: 'Inicio'
    },
    {
      title: 'Biografia',
      items: [
        { name: 'Espanol', path: '/biografia/espanol' },
        { name: 'English', path: '/biografia/english' }
      ]
    },
    {
      title: 'Presentaciones 2020 - 2022',
      items: [
        { name: '2020', path: '/presentaciones/2020' },
        { name: '2021', path: '/presentaciones/2021' },
        { name: '2022', path: '/presentaciones/2022' }
      ]
    },
    {
      title: 'Videos',
      items: [
        { name: 'Conciertos', path: '/videos/conciertos' },
        { name: 'Entrevistas y Comentarios', path: '/videos/entrevistas' }
      ]
    },
    {
      title: 'Galería',
      items: [
        { name: 'Fotos', path: '/galeria/fotos' },
        { name: 'Carteles de presentacion', path: '/galeria/carteles' },
        { name: 'Prensa', path: '/galeria/prensa' }
      ]
    },
    {
      title: 'Tesis de Doctorado',
      items: [
        { name: 'Portada', path: '/tesis/portada' },
        { name: 'Tesis', path: '/tesis/tesis' },
        { name: 'Videos e Imagenes', path: '/tesis/videos-e-imagenes' }
      ]
    }
  ]

  return (
    <AppBar position="static" sx={{ boxShadow: 'none', marginTop: 5 }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: theme.palette.background.default,
          boxShadow: 'none'
        }}
      >
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
              sx={{ color: theme.palette.text.disabled, fontWeight: 700 }}
            >
              pianista y compositora
            </Typography>
          </Stack>
        </Box>

        {/* Right item */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Stack spacing={2}>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.text.primary }}
              component={Link}
              href={'./venta'}
            >
              Venta de Discos
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.text.primary }}
              component={Link}
              href={'./discografia'}
            >
              Discografia
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.text.primary }}
              component={Link}
              href={'./contacto'}
            >
              Contacto
            </Typography>
          </Stack>
        </Box>
      </Toolbar>

      {/* Second Toolbar with Dropdowns */}
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          bgcolor: theme.palette.background.default,
          boxShadow: 'none',
          minHeight: '48px'
        }}
      >
        {menuItems.map((menu, index) => (
          <Box key={menu.title}>
            <Typography
              onClick={(e) => handleClick(e, index)}
              sx={{
                color: theme.palette.text.primary,
                cursor: 'pointer',
                '&:hover': {
                  color: theme.palette.text.disabled
                }
              }}
            >
              {menu.title}
            </Typography>
            <Menu
              anchorEl={anchorEls[index]}
              open={menu.items ? Boolean(anchorEls[index]) : false}
              onClose={() => handleClose(index)}
            >
              {menu.items
                ? menu.items.map((item) => (
                    <MenuItem
                      key={item.name}
                      onClick={() => handleClose(index)}
                      component={Link}
                      href={item.path as string}
                    >
                      {item.name}
                    </MenuItem>
                  ))
                : null}
            </Menu>
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  )
}

'use client'
import { AppBar, Container, MenuItem, Stack } from '@mui/material'
import { Box, Toolbar, Typography } from '@mui/material'
import * as React from 'react'
import Link from 'next/link'
import HeaderTitle from './HeaderTitle'

export default function Header() {
  const [openMenu, setOpenMenu] = React.useState<number | null>(null)

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
      title: 'Biografia',
      items: [
        { name: 'Espanol', path: '/biografia/espanol' },
        { name: 'English', path: '/biografia/english' }
      ]
    },
    {
      title: 'Presentaciones 2020 - 2022',
      items: [
        { name: '2022', path: '/presentaciones/2022' },
        {
          name: 'Homenaje a Beethoven 2020-2021',
          path: '/presentaciones/beethoven'
        },
        {
          name: 'Programa de Mano Homenaje a Beethoven',
          path: '/presentaciones/programa'
        }
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
    <Container>
      <AppBar
        position="static"
        sx={{
          boxShadow: 'none',
          marginTop: 5,
          bgcolor: 'background.default'
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            bgcolor: 'background.default',
            boxShadow: 'none',
            marginLeft: 6
          }}
        >
          <HeaderTitle />

          {/* Right item */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Stack spacing={2}>
              <Typography
                variant="subtitle1"
                sx={{ color: `text.primary` }}
                component={Link}
                href={'/venta-de-discos'}
              >
                Venta de Discos
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: `text.primary` }}
                component={Link}
                href={'/discografia'}
              >
                Discografia
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: `text.primary` }}
                component={Link}
                href={'/contacto'}
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
            bgcolor: `background.default`,
            boxShadow: 'none',
            minHeight: '48px',
            paddingTop: 5
          }}
        >
          <Link href={'/'} style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                position: 'relative',
                paddingY: 1,
                cursor: 'pointer'
              }}
            >
              <Typography
                sx={{
                  color: `text.primary`
                }}
              >
                Inicio
              </Typography>
            </Box>
          </Link>
          {menuItems.map((menu, index) => (
            <Box
              key={menu.title}
              onMouseEnter={() => setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(null)}
              sx={{
                position: 'relative',
                paddingY: 1,
                cursor: 'pointer'
              }}
            >
              <Typography
                sx={{
                  color: `text.primary`
                }}
              >
                {menu.title}
              </Typography>
              <Box
                sx={{
                  position: 'absolute',
                  top: '100%', // Position right below the title
                  left: 0,
                  bgcolor: 'background.default',

                  minWidth: 120,
                  display: openMenu === index ? 'block' : 'none',
                  zIndex: 1
                }}
              >
                {menu?.items?.map((item) => (
                  <Link
                    key={item.path}
                    href={`${item.path.toLowerCase()}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <MenuItem
                      sx={{
                        '&:hover': {
                          bgcolor: 'action.hover'
                        },
                        color: 'text.primary'
                      }}
                    >
                      {item.name}
                    </MenuItem>
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Toolbar>
      </AppBar>
    </Container>
  )
}

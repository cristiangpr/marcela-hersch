'use client'
import {
  AppBar,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Stack,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { Box, Toolbar, Typography } from '@mui/material'
import * as React from 'react'
import Link from 'next/link'
import HeaderTitle from './HeaderTitle'
import MenuIcon from '@mui/icons-material/Menu'

export default function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [openMenu, setOpenMenu] = React.useState<number | null>(null)
  const [drawerOpen, setDrawerOpen] = React.useState(false)

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
        { name: 'Español', path: '/biografia/espanol' },
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
  const rightMenuItems = [
    { name: 'Venta de Discos', path: '/venta-de-discos' },
    { name: 'Discografia', path: '/discografia' },
    { name: 'Contacto', path: '/contacto' }
  ]
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setDrawerOpen(open)
    }

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
            marginLeft: { sm: 0, md: 6 }
          }}
        >
          <HeaderTitle />

          {/* Right item */}

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!isMobile && (
              <Stack spacing={2}>
                {rightMenuItems.map((item) => (
                  <Typography
                    key={item.path}
                    variant="subtitle1"
                    sx={{ color: `text.primary`, textDecoration: 'none' }}
                    component={Link}
                    href={item.path}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Stack>
            )}
          </Box>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                color: 'text.primary',
                alignSelf: 'flex-start'
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </Toolbar>

        {/* Second Toolbar with Dropdowns */}

        {!isMobile && (
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
                  cursor: 'pointer',

                  '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    left: '-25px',

                    width: 'calc(100% + 50px)', // Make the border longer
                    height: '1px',
                    backgroundColor: 'divider'
                  },
                  '&::before': { top: 0 },
                  '&::after': { bottom: 0 }
                }}
              >
                <Typography
                  sx={{
                    color: `text.primary`
                  }}
                  fontSize={'0.8rem'}
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
                  cursor: 'pointer',

                  '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    left: '-25px',
                    width: 'calc(100% + 50px)', // Make the border longer
                    height: '1px',
                    backgroundColor: 'divider'
                  },
                  '&::before': { top: 0 },
                  '&::after': { bottom: 0 }
                }}
              >
                <Typography
                  sx={{
                    color: `text.primary`
                  }}
                  fontSize={'0.8rem'}
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
        )}
      </AppBar>
      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '80%',
            maxWidth: 360,
            bgcolor: 'background.default',
            p: 2
          }
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
            Menú
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Home Link */}
        <List>
          <Link
            href={'/'}
            style={{ textDecoration: 'none' }}
            onClick={toggleDrawer(false)}
          >
            <ListItemButton>
              <ListItemText primary="Inicio" sx={{ color: 'text.primary' }} />
            </ListItemButton>
          </Link>
        </List>

        <Divider sx={{ my: 1 }} />

        {/* Main menu categories */}
        <List>
          {menuItems.map((menu) => (
            <React.Fragment key={menu.title}>
              <ListItemText
                primary={menu.title}
                sx={{
                  px: 2,
                  color: 'text.primary',
                  '& .MuiTypography-root': { fontWeight: 'bold' }
                }}
              />

              {menu.items?.map((item) => (
                <Link
                  key={item.path}
                  href={item.path.toLowerCase()}
                  style={{ textDecoration: 'none' }}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary={item.name}
                      sx={{ color: 'text.primary' }}
                    />
                  </ListItemButton>
                </Link>
              ))}

              <Divider sx={{ my: 1 }} />
            </React.Fragment>
          ))}
        </List>

        {/* Right menu items */}
        <List>
          <ListItemText
            primary="Enlaces"
            sx={{
              px: 2,
              color: 'text.primary',
              '& .MuiTypography-root': { fontWeight: 'bold' }
            }}
          />

          {rightMenuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              style={{ textDecoration: 'none' }}
              onClick={toggleDrawer(false)}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  primary={item.name}
                  sx={{ color: 'text.primary' }}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
    </Container>
  )
}

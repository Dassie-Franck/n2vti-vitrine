import { useState } from 'react'
import {
  AppBar, Toolbar, Box, Button, IconButton, Container,
  Menu, MenuItem, Drawer, List, ListItemButton, ListItemText, Collapse,
  useMediaQuery, useTheme
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link, useLocation } from 'react-router-dom'
import TopBar from './TopBar'
import logo from '@assets/n2vti.png'

// Structure de navigation : lien simple OU dropdown (children)
const NAV_LINKS = [
  {
    label: "L'INSTITUT",
    children: [
      { label: 'Qui somme-nous ?', path: '/a-propos' },
      { label: 'Notre approche pédagogique', path: '/approche-pedagogique' },
           { label: 'Notre équipe', path: '/notre-equipe' },
      
    ],
  },
  { label: 'ADMISSION', path: '/admission' },   // ✅ pointe vers la page infos, plus vers le formulaire
  { label: 'FORMATIONS', path: '/formations' },
{ label: 'PARTENARIATS & STAGES', path: '/partenariats-stages' },
   { label: 'VIE AU CAMPUS', path: '/vie-au-campus' },
]

function DesktopNavItem({ item, isActive }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  if (!item.children) {
    return (
      <Button
        component={Link}
        to={item.path}
        sx={{
          color: isActive ? 'secondary.main' : 'text.primary',
          fontWeight: isActive ? 700 : 600,
          fontSize: '0.9rem',
        }}
      >
        {item.label}
      </Button>
    )
  }

  return (
    <>
      <Button
        onClick={(e) => setAnchorEl(e.currentTarget)}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ color: 'text.primary', fontWeight: 600, fontSize: '0.9rem' }}
      >
        {item.label}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        {item.children.map((child) => (
          <MenuItem
            key={child.path}
            component={Link}
            to={child.path}
            onClick={() => setAnchorEl(null)}
          >
            {child.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(null)
  const location = useLocation()

  const isActivePath = (path) => location.pathname === path

  return (
    <>
      <TopBar />
      <AppBar position="sticky" color="inherit" sx={{ bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component="img" src={logo} alt="N2VTI" sx={{ height: 60 }} />
            </Box>

            {isMobile ? (
              <>
                <IconButton onClick={() => setDrawerOpen(true)} color="primary">
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                  <List sx={{ width: 260 }}>
                    {NAV_LINKS.map((item) =>
                      item.children ? (
                        <Box key={item.label}>
                          <ListItemButton
                            onClick={() =>
                              setMobileSubOpen(mobileSubOpen === item.label ? null : item.label)
                            }
                          >
                            <ListItemText primary={item.label} />
                            <ExpandMoreIcon
                              sx={{
                                transform: mobileSubOpen === item.label ? 'rotate(180deg)' : 'none',
                                transition: '0.2s',
                              }}
                            />
                          </ListItemButton>
                          <Collapse in={mobileSubOpen === item.label}>
                            {item.children.map((child) => (
                              <ListItemButton
                                key={child.path}
                                component={Link}
                                to={child.path}
                                sx={{ pl: 4 }}
                                onClick={() => setDrawerOpen(false)}
                              >
                                <ListItemText primary={child.label} />
                              </ListItemButton>
                            ))}
                          </Collapse>
                        </Box>
                      ) : (
                        <ListItemButton
                          key={item.path}
                          component={Link}
                          to={item.path}
                          selected={isActivePath(item.path)}
                          onClick={() => setDrawerOpen(false)}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      )
                    )}
                  </List>
                </Drawer>
              </>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {NAV_LINKS.map((item) => (
                  <DesktopNavItem
                    key={item.label}
                    item={item}
                    isActive={item.path && isActivePath(item.path)}
                  />
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
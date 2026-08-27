import { Box, Container, Stack, IconButton, Link as MuiLink } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link } from 'react-router-dom'

const SOCIAL_LINKS = [
  { icon: TwitterIcon, url: 'https://twitter.com/N2VTI', label: 'Twitter' },
  { icon: FacebookIcon, url: 'https://www.facebook.com/N2VTI', label: 'Facebook' },
  { icon: LinkedInIcon, url: 'https://linkedin.com/company/N2VTI', label: 'LinkedIn' },
  { icon: InstagramIcon, url: 'https://instagram.com/N2VTI', label: 'Instagram' },
]

export default function TopBar() {
  return (
    <Box sx={{ bgcolor: 'secondary.dark', color: 'white', py: 0.75, display: { xs: 'none', md: 'block' } }}>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={0.5}>
            {SOCIAL_LINKS.map(({ icon: Icon, url, label }) => (
              <IconButton
                key={label}
                component="a"
                href={url}
                target="_blank"
                rel="noopener"
                size="small"
                sx={{ color: 'white' }}
                aria-label={label}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Stack>

          <Stack direction="row" spacing={3}>
            <MuiLink
              component={Link}
              to="/actualites"
              underline="none"
              sx={{ color: 'white', fontSize: '0.85rem', fontWeight: 500, '&:hover': { opacity: 0.85 } }}
            >
              Actualités
            </MuiLink>
            <MuiLink
              component={Link}
              to="/contact"
              underline="none"
              sx={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, '&:hover': { opacity: 0.85 } }}
            >
              Contact
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
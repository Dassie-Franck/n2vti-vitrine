import { Box, Container, Grid, Typography, Link as MuiLink, IconButton, Divider, Stack } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import { Link } from 'react-router-dom'
import logo from '@assets/n2vti.png'

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', pt: 8, pb: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          
          {/* Colonne 1 : Logo & Présentation */}
          <Grid item xs={12} md={3}>
            <Box 
              component="img" 
              src={logo} 
              alt="N2VTI" 
              sx={{ height: 65, mb: 2, bgcolor: 'white', p: 1, borderRadius: 2, objectFit: 'contain' }} 
            />
            <Typography variant="body2" sx={{ opacity: 0.85, lineHeight: 1.6, mb: 2 }}>
              New Vision Vocational Training Institute (N2VTI) est un centre de formation professionnelle agréé d'excellence, engagé pour l'insertion et l'employabilité des jeunes.
            </Typography>
            <Typography variant="caption" display="block" sx={{ opacity: 0.7, fontStyle: 'italic' }}>
              Campus : Yaoundé (Biyem-Assi)
            </Typography>
          </Grid>

          {/* Colonne 2 : Liens rapides */}
          <Grid item xs={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontSize: '1rem', letterSpacing: 0.5 }}>
              Liens rapides
            </Typography>
            {[
              { label: 'Accueil', path: '/' },
              { label: 'Formations', path: '/formations' },
              { label: 'Campus', path: '/campus' },
              { label: 'Actualités', path: '/actualites' },
              { label: 'Contact', path: '/contact' },
            ].map((l) => (
              <MuiLink
                key={l.path}
                component={Link}
                to={l.path}
                color="inherit"
                display="block"
                sx={{ mb: 1.2, opacity: 0.8, fontSize: '0.9rem', transition: 'opacity 0.2s', '&:hover': { opacity: 1, textDecoration: 'underline' } }}
              >
                {l.label}
              </MuiLink>
            ))}
          </Grid>

          {/* Colonne 3 : Domaines phares */}
          <Grid item xs={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontSize: '1rem', letterSpacing: 0.5 }}>
              Nos Filières
            </Typography>
            {[
              { label: 'Génie Informatique & Numérique', path: '/formations' },
              { label: 'Paramédical & Santé', path: '/formations' },
              { label: 'Beauté & Esthétique', path: '/formations' },
              { label: 'Commerce & Gestion', path: '/formations' },
            ].map((f, index) => (
              <MuiLink
                key={index}
                component={Link}
                to={f.path}
                color="inherit"
                display="block"
                sx={{ mb: 1.2, opacity: 0.8, fontSize: '0.9rem', transition: 'opacity 0.2s', '&:hover': { opacity: 1, textDecoration: 'underline' } }}
              >
                {f.label}
              </MuiLink>
            ))}
          </Grid>

          {/* Colonne 4 : Contact & Réseaux sociaux */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontSize: '1rem', letterSpacing: 0.5 }}>
              Restons connectés
            </Typography>
            
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, opacity: 0.85, fontSize: '0.85rem' }}>
                <PhoneIcon fontSize="small" />
                <span>+237 6 97 32 17 23</span>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, opacity: 0.85, fontSize: '0.85rem' }}>
                <EmailIcon fontSize="small" />
                <span>contact@n2vti.cm</span>
              </Box>
            </Stack>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                color="inherit" 
                href="https://www.facebook.com/N2VTI" 
                target="_blank" 
                rel="noopener"
                sx={{ bgcolor: 'rgba(255,255,255,0.08)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://wa.me/237697321723" 
                target="_blank" 
                rel="noopener"
                sx={{ bgcolor: 'rgba(255,255,255,0.08)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="mailto:contact@n2vti.cm"
                sx={{ bgcolor: 'rgba(255,255,255,0.08)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.15)' }} />

        {/* Ligne de Copyright et mention de l'agence */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: 2,
            opacity: 0.75,
            fontSize: '0.85rem'
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} N2VTI — New Vision Vocational Training Institute. Tous droits réservés.
          </Typography>
          
          <Typography variant="body2">
            Design & Développement par{' '}
            <MuiLink 
              href="https://www.mperyx.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              color="inherit"
              sx={{ 
                fontWeight: 700, 
                textDecoration: 'underline', 
                '&:hover': { color: 'secondary.light' } 
              }}
            >
              Mperyx
            </MuiLink>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
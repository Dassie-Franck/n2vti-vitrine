import { Box, Container, Stack, Typography, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

// Bande CTA réutilisable : titre à gauche, bouton à droite, fond coloré configurable
export default function CTABanner({ titre, boutonLabel, boutonLien, bgcolor = 'secondary.main' }) {
  return (
    <Box sx={{ bgcolor, py: 3 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, textAlign: { xs: 'center', sm: 'left' } }}>
            {titre}
          </Typography>
          <Button
            component={RouterLink}
            to={boutonLien}
            variant="contained"
            sx={{
              bgcolor: 'white',
              color: bgcolor,
              fontWeight: 700,
              px: 4,
              '&:hover': { bgcolor: 'grey.100' },
            }}
          >
            {boutonLabel}
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
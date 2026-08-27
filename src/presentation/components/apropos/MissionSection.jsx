import { Box, Container, Typography } from '@mui/material'
import { missionAmbition } from '@content/apropos/mission'

export default function MissionSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 7 }, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: 1.5 }}>
          {missionAmbition.tagline}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          {missionAmbition.titre.replace('Notre ', '')}{' '}
          <Box component="span" sx={{ textDecoration: 'underline', textDecorationColor: 'secondary.main', textDecorationThickness: 3 }}>
            mission
          </Box>
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, mt: 2 }}>
          {missionAmbition.mission}
        </Typography>

        <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 1.5 }}>
          {missionAmbition.ambitionTagline}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto', mt: 1 }}>
          {missionAmbition.ambition}
        </Typography>
      </Container>
    </Box>
  )
}
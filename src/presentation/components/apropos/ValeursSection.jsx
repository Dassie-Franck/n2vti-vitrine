import { Box, Container, Typography, Grid } from '@mui/material'
import { notreCeQueNousPronons, valeurs } from '@content/apropos/valeurs'

// Correspondance variante -> couleur, alternance rouge foncé / rouge / gris clair comme le template
const VARIANTE_STYLES = {
  fonce: { bgcolor: 'secondary.dark', color: 'white' },
  principal: { bgcolor: 'secondary.main', color: 'white' },
  clair: { bgcolor: 'grey.200', color: 'text.primary' },
}

function ValeurCard({ icon: Icon, label, variante }) {
  const styles = VARIANTE_STYLES[variante]

  return (
    <Box
      sx={{
        ...styles,
        height: 160,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5,
        textAlign: 'center',
        px: 2,
        transition: 'transform 0.25s ease',
        '&:hover': { transform: 'translateY(-4px)' },
      }}
    >
      <Icon sx={{ fontSize: 36 }} />
      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
        {label}
      </Typography>
    </Box>
  )
}

export default function ValeursSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" align="center" display="block" sx={{ color: 'text.secondary', letterSpacing: 1.5 }}>
          {notreCeQueNousPronons.tagline}
        </Typography>
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
          {notreCeQueNousPronons.titre}
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', mb: 3 }} />

        <Typography
          variant="body1"
          align="center"
          sx={{ color: 'text.secondary', maxWidth: 780, mx: 'auto', mb: 5 }}
        >
          {notreCeQueNousPronons.description}
        </Typography>

        <Grid container spacing={1}>
          {valeurs.map((valeur) => (
            <Grid item xs={6} sm={4} md={2} key={valeur.label}>
              <ValeurCard {...valeur} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
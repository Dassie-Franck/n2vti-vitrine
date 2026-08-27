import { Box, Container, Grid, Typography } from '@mui/material'
import { quiSommesNous } from '@content/apropos/quiSommesNous'

export default function QuiSommesNousSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          {/* Colonne gauche : images superposées */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', pb: { xs: 8, md: 10 }, pr: { xs: 8, md: 10 } }}>
              <Box
                component="img"
                src={quiSommesNous.images.principale}
                alt="N2VTI - Formation en salle"
                sx={{
                  width: '80%',
                  height: 320,
                  objectFit: 'cover',
                  display: 'block',
                  boxShadow: 3,
                }}
              />
              <Box
                component="img"
                src={quiSommesNous.images.secondaire}
                alt="N2VTI - Formation pratique"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '65%',
                  height: 260,
                  objectFit: 'cover',
                  boxShadow: 4,
                  border: '6px solid white',
                }}
              />
            </Box>
          </Grid>

          {/* Colonne droite : texte */}
          <Grid item xs={12} md={7}>
            <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: 1.5 }}>
              {quiSommesNous.tagline}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
              {quiSommesNous.titre}
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mb: 3 }} />

            {quiSommesNous.paragraphes.map((p, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2.5 }}
              >
                {p}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
import { Box, Container, Typography, Grid, Stack } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { pourquoiChoisir } from '@content/home/pourquoiChoisir'

export default function WhyChooseSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Tagline aux couleurs de la charte */}
        <Typography
          variant="overline"
          sx={{ 
            color: 'secondary.main', // Utilisation du rouge institutionnel pour dynamiser
            fontWeight: 700, 
            letterSpacing: 1.5, 
            display: 'block', 
            textAlign: 'center' 
          }}
        >
          {pourquoiChoisir.tagline}
        </Typography>

        {/* Titre principal en noir/gris très foncé pour l'élégance */}
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ color: 'text.primary', fontWeight: 800, mt: 1, mb: 2 }}
        >
          {pourquoiChoisir.titre}
        </Typography>

        {/* Liseré décoratif rouge centré (rappel de la charte) */}
        <Box sx={{ width: 50, height: 4, bgcolor: 'secondary.main', mx: 'auto', mb: 3, borderRadius: 1 }} />

        {/* Description */}
        <Typography
          variant="body1"
          align="center"
          sx={{ color: 'text.secondary', maxWidth: 780, mx: 'auto', mb: 5 }}
        >
          {pourquoiChoisir.description}
        </Typography>

        {/* Grille des points avec un mariage de couleurs propre et pro */}
        <Grid container spacing={3} justifyContent="center">
          {pourquoiChoisir.points.map((point, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack 
                direction="row" 
                spacing={2} 
                alignItems="center"
                sx={{ 
                  p: 2.5, 
                  height: '100%', 
                  bgcolor: 'background.paper', 
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    borderColor: 'secondary.main', // Bordure rouge subtile au survol
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  }
                }}
              >
                {/* Icône aux couleurs de la marque (Rouge secondaire) */}
                <CheckCircleIcon sx={{ color: 'secondary.main', flexShrink: 0 }} />
                <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {point}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
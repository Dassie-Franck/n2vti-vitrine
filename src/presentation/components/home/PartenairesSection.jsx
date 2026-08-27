import { Box, Container, Typography, Grid } from '@mui/material'
import { partenaires } from '@content/home/partenaires'

function LogoItem({ nom, logo }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: 140, // Taille augmentée pour plus de grandeur
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'white',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        p: 3,
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        // Pas d'effets de survol (hover)
      }}
    >
      <Box
        component="img"
        src={logo}
        alt={nom}
        sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
      />
    </Box>
  )
}

export default function PartenairesSection() {
  // On ne garde que les 3 premiers éléments
  const partenairesAffiches = partenaires.slice(0, 3)

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography 
          variant="overline" 
          align="center" 
          display="block" 
          sx={{ color: 'text.secondary', letterSpacing: 2, mb: 1, fontWeight: 700 }}
        >
          ILS NOUS FONT CONFIANCE
        </Typography>
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ color: 'primary.main', fontWeight: 800, mb: 5, fontSize: { xs: '1.5rem', md: '2rem' } }}
        >
          Nos partenaires
        </Typography>

        {/* Grille statique et centrée pour 3 éléments */}
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {partenairesAffiches.map((partenaire) => (
            <Grid item xs={12} sm={4} key={partenaire.nom}>
              <LogoItem {...partenaire} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
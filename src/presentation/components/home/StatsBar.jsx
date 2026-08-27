import { Box, Grid, Typography } from '@mui/material'
import { statistiques } from '@content/home/statistiques'

export default function StatsBar() {
  return (
    <Box
      sx={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        my: 0,
        overflow: 'hidden',
      }}
    >
      <Grid container>
        {/* 1. Affichage des 4 premiers éléments dynamiques */}
        {statistiques.slice(0, 4).map((stat, index) => (
          <Grid
            key={stat.label || index}
            sx={{
              // Sur mobile (xs) : 50% de large (2 par ligne), sur PC/tablette (md) : 20%
              flexBasis: { xs: '50%', md: '20%' },
              maxWidth: { xs: '50%', md: '20%' },
              flexGrow: 0,
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                bgcolor: stat.bgcolor || (index % 2 === 0 ? 'primary.main' : 'grey.700'),
                color: 'white',
                py: { xs: 3, md: 4 },
                px: 2,
                textAlign: 'center',
                minHeight: { xs: 100, md: 110 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 800, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                {stat.prefixe || ''}
                {stat.valeur}
                {stat.suffixe || ''}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}

        {/* 2. Le 5e bloc fixe (Campus Yaoundé & Douala) */}
        <Grid
          sx={{
            // Sur mobile (xs) : 100% de large (prend toute la ligne du bas tout seul), sur PC/tablette (md) : 20%
            flexBasis: { xs: '100%', md: '20%' },
            maxWidth: { xs: '100%', md: '20%' },
            flexGrow: 0,
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              bgcolor: 'grey.700',
              color: '#fff',
              py: { xs: 3, md: 4 },
              px: 2,
              textAlign: 'center',
              minHeight: { xs: 100, md: 110 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 800, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
              1 Campus
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              Yaoundé 
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
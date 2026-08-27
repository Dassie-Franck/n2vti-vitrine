import { Box, Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { approchePedagogique } from '@content/approche/approchePedagogique'

export default function ApprochePedagogiqueSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
          {approchePedagogique.titre}
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', mb: 6 }} />

        <Grid container spacing={5} alignItems="flex-start">
          {/* Colonne gauche : texte */}
          <Grid item xs={12} md={7}>
            <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 700, mb: 2 }}>
              {approchePedagogique.sousTitre}
            </Typography>

            {approchePedagogique.paragraphes.map((p, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2.5 }}
              >
                {p}
              </Typography>
            ))}

            <Typography variant="body1" sx={{ fontWeight: 600, mb: 1.5 }}>
              {approchePedagogique.activitesIntro}
            </Typography>

            <List dense>
              {approchePedagogique.activites.map((activite, index) => (
                <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 26 }}>
                    <FiberManualRecordIcon sx={{ fontSize: 8, color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary={activite} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Colonne droite : images superposées */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', pb: { xs: 8, md: 10 }, pl: { xs: 0, md: 6 } }}>
              <Box
                component="img"
                src={approchePedagogique.images.principale}
                alt="N2VTI - Approche pédagogique"
                sx={{
                  width: '100%',
                  height: { xs: 240, md: 280 },
                  objectFit: 'cover',
                  display: 'block',
                  boxShadow: 3,
                }}
              />
              <Box
                component="img"
                src={approchePedagogique.images.secondaire}
                alt="N2VTI - Travaux pratiques"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: { xs: 0, md: -40 },
                  width: '60%',
                  height: { xs: 160, md: 200 },
                  objectFit: 'cover',
                  boxShadow: 4,
                  border: '6px solid white',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
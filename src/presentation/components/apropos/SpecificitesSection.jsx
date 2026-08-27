import { Box, Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { specificites } from '@content/apropos/specificites'

export default function SpecificitesSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" align="center" display="block" sx={{ color: 'text.secondary', letterSpacing: 1.5 }}>
          {specificites.tagline}
        </Typography>
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
          {specificites.titre}
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', mb: 5 }} />
      </Container>

      {/* Bloc rouge plein, plus large que le Container, comme dans le template */}
      <Box sx={{ bgcolor: 'secondary.dark', color: 'white', py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 4 }}>
            {specificites.intro}
          </Typography>

          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={specificites.image}
                alt="N2VTI - Spécificités"
                sx={{ width: '100%', height: { xs: 260, md: 340 }, objectFit: 'cover' }}
              />
            </Grid>

            <Grid item xs={12} md={7}>
              <List>
                {specificites.points.map((point, index) => (
                  <ListItem key={index} disableGutters alignItems="flex-start" sx={{ py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 28, mt: 0.9 }}>
                      <FiberManualRecordIcon sx={{ fontSize: 8, color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={point}
                      primaryTypographyProps={{ variant: 'body1', sx: { lineHeight: 1.7 } }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
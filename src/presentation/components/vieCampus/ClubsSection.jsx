import { Box, Container, Typography, Grid, Avatar, Stack } from '@mui/material'
import { vieCampusIntro, clubsAssociatifs } from '@content/vieCampus/vieCampus'

export default function ClubsSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" align="center" display="block" sx={{ color: 'text.secondary', letterSpacing: 1.5 }}>
          {vieCampusIntro.tagline}
        </Typography>
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
          {vieCampusIntro.titre}
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', mb: 3 }} />
        <Typography variant="body1" align="center" sx={{ color: 'text.secondary', maxWidth: 780, mx: 'auto', mb: 6 }}>
          {vieCampusIntro.description}
        </Typography>

        <Grid container spacing={4}>
          {clubsAssociatifs.map((club) => (
            <Grid item xs={12} sm={6} md={4} key={club.nom}>
              <Stack spacing={1.5} alignItems="center" textAlign="center">
                <Avatar sx={{ bgcolor: 'secondary.main', width: 64, height: 64 }}>
                  <club.icon sx={{ fontSize: 30 }} />
                </Avatar>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {club.nom}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {club.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
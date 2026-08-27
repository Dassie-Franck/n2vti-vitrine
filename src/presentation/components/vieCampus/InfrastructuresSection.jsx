import { Box, Container, Typography, Grid } from '@mui/material'
import { infrastructures } from '@content/vieCampus/vieCampus'

export default function InfrastructuresSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
          Nos différentes activités scolaires
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', mb: 5 }} />

        <Grid container spacing={2}>
          {infrastructures.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.titre}>
              <Box sx={{ position: 'relative', height: 220, overflow: 'hidden', borderRadius: 1 }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.titre}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 2,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 700 }}>
                    {item.titre}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
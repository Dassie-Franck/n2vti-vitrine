import { Box, Container, Typography, Grid } from '@mui/material'
import MembreCard from './MembreCard'

export default function EquipeCampusSection({ campus, directeur, membres }) {
  return (
    <Box sx={{ py: { xs: 5, md: 6 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
         
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', mb: 5 }} />

        {/* Directeur si présent */}
        {directeur && (
          <Box sx={{ mb: 4 }}>
            <MembreCard {...directeur} />
          </Box>
        )}

        {/* Reste de l'équipe, en grille 4 colonnes */}
        <Grid container spacing={4}>
          {membres?.map((membre, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MembreCard {...membre} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
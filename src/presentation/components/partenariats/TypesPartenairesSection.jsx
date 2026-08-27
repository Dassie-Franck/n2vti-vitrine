import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import { typesPartenaires } from '@content/partenariats/partenariatsStages'

export default function TypesPartenairesSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
          Nos secteurs de partenariat
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', mb: 4 }} />

        <List>
          {typesPartenaires.map((type, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <BusinessCenterIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary={type} primaryTypographyProps={{ fontWeight: 500 }} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  )
}
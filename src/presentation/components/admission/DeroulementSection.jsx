import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined'
import { deroulement } from '@content/admission/deroulement'

export default function DeroulementSection() {
  return (
    <Box id="deroulement" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="overline" align="center" display="block" sx={{ color: 'text.secondary', letterSpacing: 1.5 }}>
          À PROPOS DE L'ADMISSION
        </Typography>
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
          Déroulement des inscriptions
        </Typography>
        {/* Ligne de soulignement en bleu (primary) */}
        <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />

        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, textAlign: 'center' }}>
          {deroulement.paragraphe1}
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, fontWeight: 600 }}>
          {deroulement.paragraphe2}
        </Typography>

        <List>
          {deroulement.materielRequis.map((item, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon sx={{ minWidth: 36 }}>
                {/* Icône de coche en bleu (primary) */}
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  )
}
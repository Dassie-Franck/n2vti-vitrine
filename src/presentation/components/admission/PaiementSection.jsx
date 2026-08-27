import { Box, Container, Typography } from '@mui/material'
import { fraisConcours, modalitesPaiement } from '@content/admission/modalitesPaiement'
import StyledAccordion from '@presentation/components/common/StyledAccordion'

export default function PaiementSection() {
  return (
    <Box id="paiement" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="overline" align="center" display="block" sx={{ color: 'text.secondary', letterSpacing: 1.5 }}>
          À PROPOS DE L'ADMISSION
        </Typography>
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
          Modalités de paiement
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', mb: 5 }} />

        {/* Bloc frais de dossier mis en avant, séparé en titre et contenu */}
        <Box sx={{ border: '1px solid', borderColor: 'divider', mb: '2px' }}>
          <Box sx={{ bgcolor: 'secondary.dark', color: 'white', px: 3, py: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: 0.5 }}>
              {fraisConcours.titre}
            </Typography>
          </Box>
          <Box sx={{ bgcolor: 'background.paper', px: 3, py: 2.5 }}>
            <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.8 }}>
              {fraisConcours.contenu}
            </Typography>
          </Box>
        </Box>

        <StyledAccordion items={modalitesPaiement} />
      </Container>
    </Box>
  )
}
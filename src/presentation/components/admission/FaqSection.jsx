import { Box, Container, Typography, Grid } from '@mui/material'
import { faqColonne1, faqColonne2 } from '@content/admission/faq'
import StyledAccordion from '@presentation/components/common/StyledAccordion'

export default function FaqSection() {
  return (
    <Box id="faq" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" align="center" display="block" sx={{ color: 'text.secondary', letterSpacing: 1.5 }}>
          PLUS D'INFORMATIONS
        </Typography>
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
          FAQ
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 5 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <StyledAccordion items={faqColonne1} defaultExpandedId="faq-1" />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledAccordion items={faqColonne2} defaultExpandedId="faq-5" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
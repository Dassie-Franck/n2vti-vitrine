import { Box, Container, Typography } from '@mui/material'
import { etapesStage } from '@content/partenariats/partenariatsStages'
import StyledAccordion from '@presentation/components/common/StyledAccordion'

export default function EtapesStageSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
          Le parcours de stage en 4 étapes
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', mb: 5 }} />

        <StyledAccordion items={etapesStage} defaultExpandedId="stage-1" />
      </Container>
    </Box>
  )
}
import { Box, Container, Typography } from '@mui/material'
import PageHeroBanner from '@presentation/components/common/PageHeroBanner'
import Breadcrumb from '@presentation/components/common/Breadcrumb'
import EtapesStageSection from '@presentation/components/partenariats/EtapesStageSection'
import TypesPartenairesSection from '@presentation/components/partenariats/TypesPartenairesSection'
import PartenairesSection from '@presentation/components/home/PartenairesSection'
import CTABanner from '@presentation/components/common/CTABanner'
import { partenariatsIntro } from '@content/partenariats/partenariatsStages'

export default function PartenariatsStages() {
  return (
    <>
      <PageHeroBanner image="/assets/banners/company.png" height={420} />
      <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Partenariats & Stages' }]} />

      <Box sx={{ py: { xs: 5, md: 6 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: 1.5 }}>
            {partenariatsIntro.tagline}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
            {partenariatsIntro.titre}
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', mb: 3 }} />
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {partenariatsIntro.description}
          </Typography>
        </Container>
      </Box>

      <TypesPartenairesSection />
      <EtapesStageSection />
      <PartenairesSection />

      <CTABanner
        titre="Devenir partenaire de N2VTI"
        boutonLabel="Nous contacter"
        boutonLien="/contact"
        bgcolor="secondary.dark"
      />
    </>
  )
}
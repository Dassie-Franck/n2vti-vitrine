import PageHeroBanner from '@presentation/components/common/PageHeroBanner'
import Breadcrumb from '@presentation/components/common/Breadcrumb'
import ClubsSection from '@presentation/components/vieCampus/ClubsSection'
import InfrastructuresSection from '@presentation/components/vieCampus/InfrastructuresSection'
import CTABanner from '@presentation/components/common/CTABanner'

export default function VieCampus() {
  return (
    <>
      <PageHeroBanner image="../../../../public/assets/banners/vie-campus.jpg" height={420} />
      <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Vie au campus' }]} />
      <ClubsSection />
      <InfrastructuresSection />
      <CTABanner
        titre="Inscriptions Ouvertes 2026 - 2027"
        boutonLabel="En savoir +"
        boutonLien="/admission"
        bgcolor="secondary.main"
      />
    </>
  )
}
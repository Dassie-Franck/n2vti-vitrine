import PageHeroBanner from '@presentation/components/common/PageHeroBanner'
import AProposHeader from '@presentation/components/apropos/AProposHeader'
import QuiSommesNousSection from '@presentation/components/apropos/QuiSommesNousSection'
import ValeursSection from '@presentation/components/apropos/ValeursSection'
import MissionSection from '@presentation/components/apropos/MissionSection'
import EngagementsSection from '@presentation/components/apropos/EngagementsSection'
import SpecificitesSection from '@presentation/components/apropos/SpecificitesSection'

export default function APropos() {
  return (
    <>
      <PageHeroBanner image="../../../../public/assets/apropos.jpg" height={320} />
      <AProposHeader />
      <QuiSommesNousSection />
      <ValeursSection />
      <MissionSection />
      <EngagementsSection />
      <SpecificitesSection />
    </>
  )
}
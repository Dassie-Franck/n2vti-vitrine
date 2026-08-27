import HeroSection from '@presentation/components/home/HeroSection'
import StatsBar from '@presentation/components/home/StatsBar'
import WhyChooseSection from '@presentation/components/home/WhyChooseSection'
import CampusLifeSection from '@presentation/components/home/CampusLifeSection'
import CampusShowcaseSection from '@presentation/components/home/CampusShowcaseSection'
import DiplomesSection from '@presentation/components/home/DiplomesSection'
import PartenairesSection from '@presentation/components/home/PartenairesSection'
import TemoignagesSection from '@presentation/components/home/TemoignagesSection'
import InscriptionCTABar from '@presentation/components/home/InscriptionCTABar'

export default function Accueil() {
  return (
    <>
      <HeroSection />
     
      <WhyChooseSection />
      <CampusLifeSection />
       <StatsBar />
      <CampusShowcaseSection />
          <DiplomesSection />
      <PartenairesSection />
      <TemoignagesSection />
      <InscriptionCTABar />
    </>
  )
}
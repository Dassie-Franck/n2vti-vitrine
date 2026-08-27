import PageHeroBanner from '@presentation/components/common/PageHeroBanner'
import StepsNavBar from '@presentation/components/admission/StepsNavBar'
import AdmissionSection from '@presentation/components/admission/AdmissionSection'
import PaiementSection from '@presentation/components/admission/PaiementSection'
import DeroulementSection from '@presentation/components/admission/DeroulementSection'
import FaqSection from '@presentation/components/admission/FaqSection'

export default function Admission() {
  return (
    <>
      <PageHeroBanner image="../../../../public/assets/banners/admin.jpg" height={320} />
      <StepsNavBar />
      <AdmissionSection />
      <PaiementSection />
      <DeroulementSection />
      <FaqSection />
    </>
  )
}
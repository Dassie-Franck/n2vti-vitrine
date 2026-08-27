import PageHeroBanner from '@presentation/components/common/PageHeroBanner'
import ApprochePedagogiqueSection from '@presentation/components/approche/ApprochePedagogiqueSection'
import CTABanner from '@presentation/components/common/CTABanner'
import { approchePedagogique } from '@content/approche/approchePedagogique'

export default function ApprochePedagogique() {
  return (
    <>
      <PageHeroBanner image="../../../../public/assets/banners/pedagogique.jpg" height={420} />
      <ApprochePedagogiqueSection />
      <CTABanner
        titre={approchePedagogique.cta.titre}
        boutonLabel={approchePedagogique.cta.boutonLabel}
        boutonLien={approchePedagogique.cta.boutonLien}
        bgcolor="secondary.main"
      />
    </>
  )
}
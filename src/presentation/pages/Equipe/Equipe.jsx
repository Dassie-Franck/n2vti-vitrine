import PageHeroBanner from '@presentation/components/common/PageHeroBanner'
import Breadcrumb from '@presentation/components/common/Breadcrumb'
import EquipeCampusSection from '@presentation/components/equipe/EquipeCampusSection'
import CTABanner from '@presentation/components/common/CTABanner'
import { equipeYaounde, equipeDouala } from '@content/equipe/equipe'

export default function Equipe() {
  return (
    <>
      <PageHeroBanner image="/assets/banners/equipe.jpg" height={420} />
      <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Nos équipes' }]} />

      <EquipeCampusSection
        campus={equipeYaounde.campus}
        directeur={equipeYaounde.directeur}
        membres={equipeYaounde.membres}
      />

      <EquipeCampusSection
        campus={equipeDouala.campus}
        directeur={equipeDouala.directeur}
        membres={equipeDouala.membres}
      />

      <CTABanner
        titre="Inscriptions Ouvertes 2026 - 2027"
        boutonLabel="En savoir +"
        boutonLien="/admission"
        bgcolor="secondary.dark"
      />
    </>
  )
}
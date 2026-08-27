import { Routes, Route } from 'react-router-dom'
import MainLayout from '@presentation/components/layout/MainLayout'
import Accueil from '@presentation/pages/Accueil/Accueil'
import Formations from '@presentation/pages/Formations/Formations'
import FormationDetail from '@presentation/pages/Formations/FormationDetail'
import Admission from '@presentation/pages/Admission/Admission'
import APropos from '@presentation/pages/APropos/APropos'
import ApprochePedagogique from '@presentation/pages/ApprochePedagogique/ApprochePedagogique'
import Equipe from '@presentation/pages/Equipe/Equipe'
import VieCampus from '@presentation/pages/VieCampus/VieCampus'
import PartenariatsStages from '@presentation/pages/PartenariatsStages/PartenariatsStages'

const Campus = () => <div>Page Campus</div>
const CampusDetail = () => <div>Détail Campus</div>
const Actualites = () => <div>Page Actualités</div>
const ActualiteDetail = () => <div>Détail Actualité</div>

const PreInscription = () => <div>Page Pré-inscription</div>
const Contact = () => <div>Page Contact</div>
const NotFound = () => <div>404 - Page introuvable</div>

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Accueil />} />
        <Route path="formations" element={<Formations />} />
        <Route path="formations/:slug" element={<FormationDetail />} />
        <Route path="campus" element={<Campus />} />
        <Route path="campus/:slug" element={<CampusDetail />} />
        <Route path="actualites" element={<Actualites />} />
        <Route path="actualites/:slug" element={<ActualiteDetail />} />
        <Route path="a-propos" element={<APropos />} />
        <Route path="pre-inscription" element={<PreInscription />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="admission" element={<Admission />} />
        <Route path="a-propos" element={<APropos />} />
        <Route path="approche-pedagogique" element={<ApprochePedagogique />} />
        <Route path="notre-equipe" element={<Equipe />} />
        <Route path="vie-au-campus" element={<VieCampus />} />
<Route path="partenariats-stages" element={<PartenariatsStages />} />
      </Route>
    </Routes>
  )
}
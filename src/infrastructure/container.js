import { StaticFormationRepository } from './repositories/StaticFormationRepository'
import { StaticCampusRepository } from './repositories/StaticCampusRepository'
import { StaticActualiteRepository } from './repositories/StaticActualiteRepository'
import { StaticTemoignageRepository } from './repositories/StaticTemoignageRepository'
import { EmailNotificationService } from './services/EmailNotificationService'

import { ListerFormations } from '@application/use-cases/formations/ListerFormations'
import { ObtenirFormationParSlug } from '@application/use-cases/formations/ObtenirFormationParSlug'
import { FiltrerFormationsParDomaine } from '@application/use-cases/formations/FiltrerFormationsParDomaine'
import { FiltrerFormationsParCampus } from '@application/use-cases/formations/FiltrerFormationsParCampus'
import { RechercherFormations } from '@application/use-cases/formations/RechercherFormations'

import { ListerCampus } from '@application/use-cases/campus/ListerCampus'
import { ObtenirCampusParSlug } from '@application/use-cases/campus/ObtenirCampusParSlug'

import { ListerActualites } from '@application/use-cases/actualites/ListerActualites'
import { ObtenirActualiteParSlug } from '@application/use-cases/actualites/ObtenirActualiteParSlug'

import { ListerTemoignages } from '@application/use-cases/temoignages/ListerTemoignages'

import { SoumettreFormulaireContact } from '@application/use-cases/contact/SoumettreFormulaireContact'

// --- Instanciation des repositories (implémentations concrètes) ---
const formationRepository = new StaticFormationRepository()
const campusRepository = new StaticCampusRepository()
const actualiteRepository = new StaticActualiteRepository()
const temoignageRepository = new StaticTemoignageRepository()

const notificationService = new EmailNotificationService({
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
})

// --- Instanciation des use cases (injection des repositories) ---
export const container = {
  formations: {
    listerFormations: new ListerFormations(formationRepository),
    obtenirFormationParSlug: new ObtenirFormationParSlug(formationRepository),
    filtrerParDomaine: new FiltrerFormationsParDomaine(formationRepository),
    filtrerParCampus: new FiltrerFormationsParCampus(formationRepository),
    rechercherFormations: new RechercherFormations(formationRepository),
  },
  campus: {
    listerCampus: new ListerCampus(campusRepository),
    obtenirCampusParSlug: new ObtenirCampusParSlug(campusRepository),
  },
  actualites: {
    listerActualites: new ListerActualites(actualiteRepository),
    obtenirActualiteParSlug: new ObtenirActualiteParSlug(actualiteRepository),
  },
  temoignages: {
    listerTemoignages: new ListerTemoignages(temoignageRepository),
  },
  contact: {
    soumettreFormulaire: new SoumettreFormulaireContact(notificationService),
  },
}
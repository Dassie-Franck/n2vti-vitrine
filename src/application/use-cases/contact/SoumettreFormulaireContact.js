import { ContactFormDTO } from '@application/dto/ContactFormDTO'

export class SoumettreFormulaireContact {
  constructor(notificationService) {
    this.notificationService = notificationService
  }

  async execute(donneesFormulaire) {
    const dto = new ContactFormDTO(donneesFormulaire)
    const erreurs = dto.valider()

    if (erreurs.length > 0) {
      return { succes: false, erreurs }
    }

    try {
      await this.notificationService.envoyer(dto)
      return { succes: true, erreurs: [] }
    } catch (e) {
      return { succes: false, erreurs: ["Échec de l'envoi, veuillez réessayer plus tard."] }
    }
  }
}
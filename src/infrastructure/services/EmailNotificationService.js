import { INotificationService } from '@domain/repositories/INotificationService'

// Implémentation via EmailJS (aucun serveur/BDD à maintenir)
// npm install @emailjs/browser
export class EmailNotificationService extends INotificationService {
  constructor({ serviceId, templateId, publicKey }) {
    super()
    this.serviceId = serviceId
    this.templateId = templateId
    this.publicKey = publicKey
  }

  async envoyer(contactFormDTO) {
    const emailjs = (await import('@emailjs/browser')).default

    return emailjs.send(
      this.serviceId,
      this.templateId,
      {
        nom: contactFormDTO.nom,
        email: contactFormDTO.email,
        telephone: contactFormDTO.telephone,
        formation: contactFormDTO.formationInteressee || 'Non précisée',
        campus: contactFormDTO.campusChoisi || 'Non précisé',
        message: contactFormDTO.message,
      },
      this.publicKey
    )
  }
}
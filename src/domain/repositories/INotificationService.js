// Contrat pour l'envoi de notification (email/whatsapp/etc.) — vit dans le domain
// car c'est une abstraction métier ("notifier quelqu'un"), pas un détail technique
export class INotificationService {
  async envoyer(contactFormDTO) { throw new Error("Méthode envoyer() non implémentée") }
}
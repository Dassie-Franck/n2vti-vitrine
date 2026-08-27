export class SubmitContactUseCase {
  /**
   * @param {Object} contactService - Service concret pour l'envoi (ex: ApiContactService)
   */
  constructor(contactService) {
    if (!contactService) {
      throw new Error("SubmitContactUseCase requiert un service de contact");
    }
    this.contactService = contactService;
  }

  /**
   * Exécute la soumission du formulaire
   * @param {Object} formData - Données du formulaire (nom, email, telephone, message, etc.)
   * @returns {Promise<Object>}
   */
  async execute(formData) {
    // 1. Validation métier basique
    if (!formData.nom || !formData.email || !formData.message) {
      throw new Error("Veuillez renseigner les champs obligatoires (nom, email, message).");
    }

    // Validation simple du format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error("L'adresse email saisie n'est pas valide.");
    }

    // 2. Structuration des données à envoyer
    const payload = {
      ...formData,
      dateSoumission: new Date().toISOString()
    };

    // 3. Appel au service d'infrastructure pour l'envoi effectif
    const response = await this.contactService.send(payload);

    return response;
  }
}